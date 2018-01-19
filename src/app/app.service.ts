import {Injectable} from '@angular/core';
import { Headers, RequestOptions, Http } from '@angular/http';
import { grpc, BrowserHeaders } from "grpc-web-client";
import { NoteService, Note1Service } from "./_proto/notes_service_pb_service";
import { Note, Note1, GetNotesRequest, GetNotesResponse, AddNoteRequest, DeleteNoteRequest, SayRequest, SayResponse } from "./_proto/notes_service_pb";
// import {HttpClient, HttpParams, HttpHeaders, HttpRequest} from '@angular/common/http';

@Injectable()
export class AppService {
    host: string = 'http://localhost:50051';
    notes: Array<any> = [];
    constructor(private http: Http){
        // this.getNotes();
        this.sayHelloToAll();
    }

    getDataFromDB() {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
      
        // return this.http.post('http://localhost:50051/v1/echo', JSON.stringify({'name':"Akshay"}), options);
        // return this.http.get(this.host + 'v1/echo', options);

       
    }

    sayHelloToAll(){

        const request = new SayRequest();
        request.setName('Akshay');
        grpc.invoke(Note1Service.SayHello, {
            host: this.host,
            request: request,
      
            onMessage: (note: Note1) => {
                this.notes.push(note);
              console.log("Successfully queried, ", this.notes);
            },
      
            onEnd(code: grpc.Code, message: string, trailers: BrowserHeaders){
              console.log(code, message)
            }
          })
          // this.getNotes();
    }


    getNotes(){
        const request = new GetNotesRequest();
    
        grpc.invoke(NoteService.GetNotes, {
          host: this.host,
          request: request,
    
          onMessage: (notes: GetNotesResponse) => {
            this.notes = notes.getNotesList();
            console.log("Successfully queried, ", notes);
          },
    
          onEnd(code: grpc.Code, message: string, trailers: BrowserHeaders){
            console.log(code, message)
          }
        })
      }
}

