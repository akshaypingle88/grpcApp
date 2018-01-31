package main

import (
	"context"
	"fmt"
	"log"
	"net/http"
	"os"
	"sync"

	"gopkg.in/mgo.v2"

	library "./_proto"
	db "./db"
	"github.com/improbable-eng/grpc-web/go/grpcweb"
	"google.golang.org/grpc"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/grpclog"
	"google.golang.org/grpc/metadata"
)

var (
	PORT = 9090

	// we use a map as an in-memory store for the application, it is protected by a RWMutes to allow
	// safe concurrent access.
	NOTE_LOCK = &sync.RWMutex{}

	// atomicly load and increment NOTE_INDEX to serve as a unique key
	NOTE_INDEX int64 = 3
	NOTES            = map[int64]*library.Note{
		1: &library.Note{Id: 1, Author: "Ben", Body: "First Note"},
		2: &library.Note{Id: 2, Author: "Ben", Body: "Second Note"},
		3: &library.Note{Id: 3, Author: "Ben", Body: "Third Note"},
	}
)

var c *mgo.Collection

type DataStore struct {
	session *mgo.Session
}

func main() {

	// db.Start()
	// c = db.Collection(Collection)
	// Find and Count
	// fname := "Akshay"
	// gamesWon, err := c.Find(bson.M{"fname": fname}).Count()
	// if err != nil {
	// 	panic(err)
	// } else {
	// 	log.Println("%s has won %d games.\n", fname, gamesWon)

	// server
	grpcServer := grpc.NewServer()
	library.RegisterNoteServiceServer(grpcServer, &noteService{})
	grpclog.SetLogger(log.New(os.Stdout, "GRPC:", log.LstdFlags))

	wrappedServer := grpcweb.WrapServer(grpcServer)

	handler := func(res http.ResponseWriter, req *http.Request) {
		wrappedServer.ServeHTTP(res, req)
	}

	httpServer := &http.Server{
		Addr:    fmt.Sprintf(":%d", PORT),
		Handler: http.HandlerFunc(handler),
	}
	log.Println("called")
	grpclog.Println("Starting server... at %d", PORT)
	log.Fatalln(httpServer.ListenAndServe())
	// }
}

type noteService struct{}

func (ns *noteService) AddNote(ctx context.Context, req *library.AddNoteRequest) (*library.Note, error) {
	grpc.SendHeader(ctx, metadata.Pairs("Pre-Response-Metadata", "Is-sent-as-headers-unary"))
	println(" grpc call in AddNote")
	NOTE_LOCK.Lock()
	defer NOTE_LOCK.Unlock()
	note := db.AddNote(req.Body, req.Author)
	// atomic.AddInt64(&NOTE_INDEX, 1)
	// id := atomic.LoadInt64(&NOTE_INDEX)

	// note := &library.Note{
	// 	Id:     id,
	// 	Author: req.Author,
	// 	Body:   req.Body,
	// }

	// NOTES[note.Id] = note
	return note, nil
}

func (ns *noteService) GetNotes(ctx context.Context, req *library.GetNotesRequest) (*library.GetNotesResponse, error) {
	grpc.SendHeader(ctx, metadata.Pairs("Pre-Response-Metadata", "Is-sent-as-headers-unary"))
	log.Println("ctx %v ", ctx)
	NOTE_LOCK.RLock()
	defer NOTE_LOCK.RUnlock()

	dbNotes := db.GetNotes()
	log.Printf("%v", dbNotes)
	// notes := make([]*library.Note, len(dbNotes))

	// idx := 0
	// for _, v := range dbNotes {
	// 	notes[idx] = &library.Note{
	// 		Id:     v.Id,
	// 		Author: v.Author,
	// 		Body:   v.Body,
	// 	}
	// 	idx++
	// }

	// // Find and Count
	// var fname = "Akshay"
	// var gamesWon, err = c.Find(bson.M{"fname": fname}).Count()
	// if err != nil {
	// 	panic(err)
	// }
	// log.Println("%s has won %d games.\n", fname, gamesWon)

	resp := &library.GetNotesResponse{Notes: dbNotes}
	// resp := dbNotes
	return resp, nil
}

func (ns *noteService) DeleteNote(ctx context.Context, req *library.DeleteNoteRequest) (*library.Note, error) {
	grpc.SendHeader(ctx, metadata.Pairs("Pre-Response-Metadata", "Is-sent-as-headers-unary"))

	NOTE_LOCK.Lock()
	defer NOTE_LOCK.Unlock()

	if oldNote, exists := NOTES[req.Id]; exists {
		note := &library.Note{
			Id:     oldNote.Id,
			Author: oldNote.Author,
			Body:   oldNote.Body,
		}

		delete(NOTES, req.Id)
		return note, nil
	}

	return nil, grpc.Errorf(codes.NotFound, "Note could not be found.")
}
