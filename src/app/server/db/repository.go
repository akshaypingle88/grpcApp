package db

import (
	"fmt"
	"log"

	library "../_proto"
	mgo "gopkg.in/mgo.v2"
	"gopkg.in/mgo.v2/bson"
)

//Repository ...
type noteService struct{}

type msg struct {
	// Msg   string        `bson:"msg"`
	Count int `bson:"count"`
}

// SERVER the DB server
const SERVER = "localhost:27017"

// DBNAME the name of the DB instance
const DBNAME = "testdb"

// DOCNAME the name of the document
const DOCNAME = "notes"

func GetNotes() []*library.Note {
	log.Printf("Get notes called from repository")

	session, err := mgo.Dial(SERVER)
	if err != nil {
		fmt.Println("Failed to establish connection to Mongo server:", err)
	}
	log.Printf("Mongo DB connected")
	defer session.Close()
	c := session.DB(DBNAME).C(DOCNAME)
	results := []*library.Note{}
	log.Printf("find DB ")
	if err := c.Find(nil).All(&results); err != nil {
		fmt.Println("Failed to write results:", err)
	}
	log.Printf("result %v", results)
	return results
}

func AddNote(body string, author string) *library.Note {
	log.Printf("body %v ", body)
	session, err := mgo.Dial(SERVER)
	if err != nil {
		fmt.Println("Failed to establish connection to Mongo server:", err)
	}
	log.Printf("Mongo DB connected")
	defer session.Close()
	c := session.DB(DBNAME).C(DOCNAME)
	count, err2 := c.Find(bson.M{}).Count()
	if err2 != nil {
		panic(err)
	}
	fmt.Printf("total book count = %d\n", count)
	var i64 int64
	i64 = int64(count + 1)
	if err := c.Insert(&library.Note{i64, body, author}); err != nil {
		fmt.Println("Failed to write results:", err)
	}
	log.Printf("result %v", &library.Note{i64, body, author})
	return &library.Note{i64, body, author}
}
