import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Http } from '@angular/http';
import { grpc, BrowserHeaders } from "grpc-web-client";
import { NoteService } from "./_proto/notes_service_pb_service";
import { Note, GetNotesRequest, GetNotesResponse, AddNoteRequest, DeleteNoteRequest } from "./_proto/notes_service_pb";
// import {HttpClient, HttpParams, HttpHeaders, HttpRequest} from '@angular/common/http';

@Injectable()
export class AppService {
  host: string = 'http://192.168.15.93:9090';
  notes: Array<Note> = [];
  constructor(private http: Http) {
    // this.getNotes();
    // this.sayHelloToAll();
  }

  getDataFromDB() {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    // return this.http.post('http://localhost:50051/v1/echo', JSON.stringify({'name':"Akshay"}), options);
    // return this.http.get(this.host + 'v1/echo', options);
  }


  getNotes() {
    const request = new GetNotesRequest();
    return new Promise((resolve, reject) => {

      grpc.invoke(NoteService.GetNotes, {
        host: this.host,
        request: request,
        // });
        onMessage: (notes: GetNotesResponse) => {
          this.notes = notes.getNotesList();
          console.log("Successfully queried, ", notes, this.notes);
          resolve(notes.getNotesList())
        },

        onEnd(code: grpc.Code, message: string, trailers: BrowserHeaders) {
          console.log('Error: ', code, message)
          if (code != 0) {
            reject(message)
          }
          // return this.notes;
        }
      })

    })

    // client.onMessage.add((notes: GetNotesResponse) => {  });
    // client.onEnd.add((code: grpc.Code, message: string, trailers: BrowserHeaders) => { })

  }

  addNotes(note: Note) {
    // console.log('print note:', note['author']);
    const request = new AddNoteRequest();
    request.setAuthor(note['author']);
    request.setBody(note['body']);
    return new Promise((resolve, reject) => {
      grpc.invoke(NoteService.AddNote, {
        host: this.host,
        request: request,

        onMessage: (note: Note) => {
          console.log("Successfully queried, ", note);
          resolve(note);
        },

        onEnd(code: grpc.Code, message: string, trailers: BrowserHeaders) {
          console.log(code, message)
          if (code != 0) {
            reject(message)
          }
        }
      })
    });
  }

  deleteNote(id) {
    const request = new DeleteNoteRequest();
    request.setId(id);
    return new Promise((resolve, reject) => {
      grpc.invoke(NoteService.DeleteNote, {
        host: this.host,
        request: request,

        onMessage: (note: Note) => {
          console.log("Successfully queried, ", note);
          resolve(note);
        },

        onEnd(code: grpc.Code, message: string, trailers: BrowserHeaders) {
          console.log(code, message)
          if (code != 0) {
            reject(message)
          }
        }
      })
    });
  }
}


