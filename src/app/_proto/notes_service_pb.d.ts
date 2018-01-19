// package: notes
// file: notes_service.proto

import * as jspb from "google-protobuf";

export class Note extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getBody(): string;
  setBody(value: string): void;

  getAuthor(): string;
  setAuthor(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Note.AsObject;
  static toObject(includeInstance: boolean, msg: Note): Note.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Note, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Note;
  static deserializeBinaryFromReader(message: Note, reader: jspb.BinaryReader): Note;
}

export namespace Note {
  export type AsObject = {
    id: number,
    body: string,
    author: string,
  }
}

export class Note1 extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Note1.AsObject;
  static toObject(includeInstance: boolean, msg: Note1): Note1.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Note1, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Note1;
  static deserializeBinaryFromReader(message: Note1, reader: jspb.BinaryReader): Note1;
}

export namespace Note1 {
  export type AsObject = {
    name: string
  }
}

export class AddNoteRequest extends jspb.Message {
  getBody(): string;
  setBody(value: string): void;

  getAuthor(): string;
  setAuthor(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddNoteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddNoteRequest): AddNoteRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddNoteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddNoteRequest;
  static deserializeBinaryFromReader(message: AddNoteRequest, reader: jspb.BinaryReader): AddNoteRequest;
}

export namespace AddNoteRequest {
  export type AsObject = {
    body: string,
    author: string,
  }
}

export class SayRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SayRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SayRequest): SayRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SayRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SayRequest;
  static deserializeBinaryFromReader(message: SayRequest, reader: jspb.BinaryReader): SayRequest;
}

export namespace SayRequest {
  export type AsObject = {
    name: string,
  }
}

export class SayResponse extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SayResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SayResponse): SayResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SayResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SayResponse;
  static deserializeBinaryFromReader(message: SayResponse, reader: jspb.BinaryReader): SayResponse;
}

export namespace SayResponse {
  export type AsObject = {
    name: string
  }
}

export class GetNotesRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNotesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetNotesRequest): GetNotesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetNotesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNotesRequest;
  static deserializeBinaryFromReader(message: GetNotesRequest, reader: jspb.BinaryReader): GetNotesRequest;
}

export namespace GetNotesRequest {
  export type AsObject = {
  }
}

export class GetNotesResponse extends jspb.Message {
  clearNotesList(): void;
  getNotesList(): Array<Note>;
  setNotesList(value: Array<Note>): void;
  addNotes(value?: Note, index?: number): Note;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNotesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetNotesResponse): GetNotesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetNotesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNotesResponse;
  static deserializeBinaryFromReader(message: GetNotesResponse, reader: jspb.BinaryReader): GetNotesResponse;
}

export namespace GetNotesResponse {
  export type AsObject = {
    notesList: Array<Note.AsObject>,
  }
}

export class DeleteNoteRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteNoteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteNoteRequest): DeleteNoteRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteNoteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteNoteRequest;
  static deserializeBinaryFromReader(message: DeleteNoteRequest, reader: jspb.BinaryReader): DeleteNoteRequest;
}

export namespace DeleteNoteRequest {
  export type AsObject = {
    id: number,
  }
}

