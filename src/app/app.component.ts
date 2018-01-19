import { Component } from '@angular/core';
import { AppService } from "./app.service";
// import {grpc} from "grpc/index";
// import { grpc, BrowserHeaders } from "grpc-web-client";
// const PROTO_PATH = '../src/assets/js/pb/messages.proto';
// const serviceDef = grpc.load(PROTO_PATH);
// const PORT = 9000;
// const credentials = grpc.credentials.createInsecure();
// const client = new serviceDef.UserService(`localhost:${PORT}`, credentials);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})
export class AppComponent {
  title = 'app';

  constructor(private service: AppService) {

  }

  // getByUserId(client) {

  //   let md = new grpc.Metadata();
  //   md.add("username", 'Alexis');
  //   md.add("password", "12345");
  //   console.log('getByUserId called: ', client);
  //   client.getByUserId({ userId: 1 }, md, function (err, response) {
  //     console.log('err: ', err);
  //     console.log('response: ', response);
  //     if (err)
  //       console.log(err);
  //     else
  //       console.log('completed ');
  //     console.log(response.user);
  //   });
  // }
  // getAll(client) {
  //   let call = client.getAll({});

  //   call.on('data', function (data) {
  //     console.log(data.user);
  //   });
  // }
 
  // saveAll(client) {
  //   let users = [
  //     {
  //       id: 4,
  //       firstName: 'Luke',
  //       lastName: 'Skywalker',
  //       birthday: new Date(1977, 11, 22).getTime(),
  //       vehicles: [
  //         { id: 7, regNumber: 'SJDKJSDKJI200' },
  //         { id: 8, regNumber: 'WIUDSBDJK9328' }
  //       ]
  //     }
  //   ];

  //   let call = client.saveAll();
  //   call.on("data", function (usr) {
  //     console.log(usr.user)
  //   });

  //   users.forEach(function (usr) {
  //     call.write({ user: usr });
  //   });
  //   call.end();
  // }
}
