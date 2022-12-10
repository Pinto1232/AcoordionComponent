import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import{mockData} from "./db";
// This connnect to a fake data source
export interface Solution  {
  topic: string;
  introduction: string;
  description: string;
  imgUrl?:string
}

@Injectable({
  providedIn: 'root'
})
export class FakeDataService {

  
  getSolutions ():Observable<Solution[]> {
    return of(mockData)
  }
 
}
