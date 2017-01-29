import { Injectable } from '@angular/core';
import {Subject, Subscription, Observable} from "rxjs/Rx";
import {JsonApiService} from "../../core/api/json-api.service";
import * as io from 'socket.io-client';

@Injectable()
export class ChatService {

  url: string;

  public messageToSubject;
  public newMessage;


  constructor(private jsonApiService: JsonApiService) {
    this.url = '/chat/chat.json';
    this.messageToSubject = new Subject();
    this.newMessage = new Subject();
  }


  getChatState()  {
    return this.jsonApiService.fetch(this.url)

  }

  messageTo(user){
    this.messageToSubject.next(user)
  }

  sendMessage(message){
    this.newMessage.next(message)

  }

  private socketUrl = 'http://localhost:3000';  
  private socket;
  
  getMessages() {
    let observable = new Observable(observer => {
      this.socket = io(this.socketUrl);
      this.socket.on('news', (data) => {
        observer.next(data);    
      });
      return () => {
        this.socket.disconnect();
      };  
    })     
    return observable;
  } 



}
