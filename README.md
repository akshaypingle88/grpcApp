# GrpcApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.4.

# Needed technologies

We are using different technologies which is mention below:
1. Front side Angular 5 + gRPC client side (npm grpc-web-client)
2. Server side GO language + gRPC server side
3. Database Mongo DB
4. Basic platform stand on .proto file

# Setup project and How to run

1. Install GO language and setup global environment GOPATH with C:\users\<username>\go
2. install protoc-gen-go (Installation of protoc-gen-go steps)

	Here is the step by step directions:
	1. Download protoc-win32.zip from https://developers.google.com/protocol-buffers/docs/downloads
	2. Unzip and add location of the protoc.exe to your PATH environment variable
	3. Run `protoc --version` from command prompt to verify
	4. Verify the your GOPATH environment variable is set
	5. Run `go get -u github.com/golang/protobuf/protoc-gen-go` from command prompt. This should install the binary to %GOPATH%/bin
	6. Add `%GOPATH%/bin` to your PATH environment variable
	7. Open a new command prompt, navigate to your .proto file, run `protoc --go_out=. *.proto` 
	NOTE: if you are running from a text editor or ide, you may need to reboot after modifying your environment variables
3. Download application and cd gRPC-app 
4. fire commond "npm install"
4. ng serve
5. Install Mongodb and start mongo service 
6. go run src/app/server/server.go

  PreInstallation of GO lang
  1. go get github.com/golang/protobuf/proto
  2. go get gopkg.in/mgo.v2/bson
  3. go get gopkg.in/mgo.v2
  4. go get github.com/improbable-eng/grpc-web/go/grpcweb
  5. go get github.com/prometheus/common/log
  
  NOTE: .

7. Changes

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
