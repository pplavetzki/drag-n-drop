import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';


import { ChatService } from '../shared/chat/chat.service';
import {DragulaService} from 'ng2-dragula/ng2-dragula';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  private connection;

  constructor(private _dragulaService:DragulaService, private _chatService:ChatService) { 
    _dragulaService.setOptions('second-bag', {
      copy:(el, source) => { return source.id === 'left'; },
      copySortSource: false,
      accepts: (el, target, source, sibling) => {
        return target.id !== 'left';
      }
    });
  }



  ngOnInit() {
    this.connection = this._chatService.getMessages().subscribe(message => {
      console.log(message);
    });
  }

  ngOnDestroy() {
    this.connection.unsubscribe();
  }

}
