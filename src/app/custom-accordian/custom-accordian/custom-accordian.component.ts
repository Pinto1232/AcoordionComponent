import { Output, EventEmitter } from '@angular/core';
import { Component, Input } from '@angular/core';
// Re usable ui component using bootstrap 
@Component({
  selector: 'app-custom-accordian',
  templateUrl: './custom-accordian.component.html',
  styleUrls: ['./custom-accordian.component.css']
})
export class CustomAccordianComponent {
  @Input() public titleText :string | undefined;
  @Input() public bodyText :string | undefined;
  @Output()
  public readonly clickEvent: EventEmitter<Event> = new EventEmitter<Event>();


  public click(event: Event): void {
          this.clickEvent.emit(event);
      
  }


  
}
