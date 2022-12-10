import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { FakeDataService, Solution } from './fake-data.service';
// Ideally AppComponent must not contain logic ..will move this to a compent when routing is added
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pisval';
  public data:Observable<Solution[]> | undefined ;
  public imgSrc : BehaviorSubject<string> = new BehaviorSubject("");
  public toogle:boolean=false;

  public constructor(public fakeservice:FakeDataService){}
  
  ngOnInit(): void{
  this.data= this.fakeservice.getSolutions()

  }

  setImage(url:string ){
    this.imgSrc.next(url!)
    this.toogle=!this.toogle
  }
}
