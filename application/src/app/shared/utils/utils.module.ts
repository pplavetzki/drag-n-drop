import {NgModule} from "@angular/core";
import {MomentPipe} from "./moment.pipe";
import {KeysPipe} from "./keys.pipe";
import {TimeDirective} from "./time.directive";
import { FieldFilterPipe } from './field-filter.pipe';
import {BodyService} from "./body.service";
import {NotificationService} from "./notification.service";
import {ToggleActiveDirective} from "./toggle-active.directive";

@NgModule({
  declarations: [ToggleActiveDirective, MomentPipe, TimeDirective, FieldFilterPipe, KeysPipe],
  exports: [ToggleActiveDirective, MomentPipe, TimeDirective, FieldFilterPipe, KeysPipe],
  providers: [BodyService, NotificationService]
})
export class UtilsModule{
  static forRoot(){
    return {
      ngModule: UtilsModule,
      providers: [BodyService, NotificationService]
    }
  }
}
