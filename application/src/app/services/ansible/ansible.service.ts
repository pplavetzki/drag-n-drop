import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import * as io from 'socket.io-client';

import {config} from '../../shared/smartadmin.config';
import {Observable} from "rxjs/Rx";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/do';

import { Play } from '../../models/models'

@Injectable()
export class AnsibleService {

    private _apiEndpoint = 'http://150.10.0.2:4050/';
    private _socketUrl = 'http://150.10.0.2:4050/juniper';  
    private _socket;

    constructor(private _http: Http) {
        
    }

    connectSubscription(): Observable<any> {
        let observable = new Observable(observer => {
            this._socket = io(this._socketUrl);

            this._socket.on('ansible-message', (data) => {
                observer.next(data);    
            });

            return () => {
                console.log('disconnected');
                this._socket.disconnect();
            };  
        })     
        
        return observable;
    }

    executePlay(play:Play): Observable<any> {
        let bodyString = JSON.stringify(play);
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option
        let observable = this._http.post(this._apiEndpoint + 'play', play, options)
                                   .map((res:Response) => res.json())
                                   .catch((error:any) => Observable.throw(error.json().error || 'Server Error'));
        
        return observable;
    }

    loadFile(file:string): Observable<any> {
        let observable = this._http.get(file)
                                .map((res:any) => res._body)
                                .catch((error:any) => Observable.throw(error || 'Server Error'));
        return observable;
    }
}