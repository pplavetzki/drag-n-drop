import { Injectable } from '@angular/core';
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

    private _socketUrl = 'http://192.168.0.2:4050/juniper';  
    private _socket;

    constructor() {
        
    }

    executePlay(play:Play): Observable<any> {
        let observable = new Observable(observer => {
            this._socket = io(this._socketUrl);

            this._socket.on('ansible-message', (data) => {
                observer.next(data);    
            });

            return () => {
                this._socket.disconnect();
            };  
        })     
        
        return observable;
    }
}