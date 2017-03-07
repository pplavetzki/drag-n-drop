import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import {config} from '../../shared/smartadmin.config';
import {Observable} from "rxjs/Rx";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


import { Host } from '../../models/models'

@Injectable()
export class DataService {

    private apiEndpoint = 'assets/api/mock';

    constructor(private http: Http) {
        
    }

    getHosts(): Observable<any> {
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option
        let observable = this.http.get(this.apiEndpoint + '/hosts/hosts.json', options)
                                  .map((res:any) => res.json())
                                  .catch((error:any) => Observable.throw(error.json().error || 'Server Error'));
        return observable;
    }
}