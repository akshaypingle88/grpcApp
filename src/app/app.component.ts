import { Component, AfterViewInit } from '@angular/core';
import { AppService } from "./app.service";
import { Note, GetNotesResponse } from './_proto/notes_service_pb';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})
export class AppComponent implements AfterViewInit{
  title = 'app';
  notes: Array<Note> = [];
  note: Note = new Note();

  constructor(private service: AppService) {
    console.log('note: ', this.note)
  }

  ngAfterViewInit() {
    // console.log('note: ', this.note)
  }

  insert() {
    // console.log(this.note.setAuthor(this.note['author']));
    this.service.addNotes(this.note).then((result: Note) => {
      console.log('result of insert id is ', result.getId());
    }, (err) => {
      console.log(err);
    })
  }

  getAllData(){
    this.service.getNotes().then((result: Note[]) => { 
      console.log('result: ',result);
      this.notes = result;
     },(err) => { 
       console.log(err);
       });
    console.log("AppComponent queried, ", this.notes);
  }

  edit(id){
    console.log('id : ', id);
  }

  delete(id){
    console.log('id : ', id);
  }
}
