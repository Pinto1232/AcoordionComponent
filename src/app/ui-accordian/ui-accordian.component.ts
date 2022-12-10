import { Component, EventEmitter, Input, Output } from '@angular/core';
// Re usable ui component without library
@Component({
  selector: 'app-ui-accordian',
  templateUrl: './ui-accordian.component.html',
  styleUrls: ['./ui-accordian.component.css']
})
export class UiAccordianComponent {
 public isCollapsed = true;
 @Input() public titleText :string | undefined;
 @Input() public bodyText :string | undefined;
 @Output()
 public readonly clickEvent: EventEmitter<Event> = new EventEmitter<Event>();


 public click(event: Event): void {
         this.clickEvent.emit(event);
     
 }
}
