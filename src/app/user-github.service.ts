import { Observable } from 'rxjs/';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {
  // tasks: BehaviorSubject<any[]> = new BehaviorSubject([]);
  // username: string = "";


  constructor(private _http: HttpClient) {
    // this.retrieveTasks(this.username);
   }
  
  // retrieveTasks(username) {
  //   let x = this._http.get(`https://api.github.com/users/${ username }`).subscribe( 
  //     (task: any[]) => { this.tasks.next(task) }
  //   );
  //   console.log("x: " + x);
  // }
  // addTask(newTask: any) {
  //   let y = this._http.post(`https://api.github.com/users/${ this.username }`, newTask).subscribe( 
  //     (response) => {this.retrieveTasks(this.username); }
  //   );
  //   console.log("y: " + y);
  // }

  retrieveUser(username: string): Observable<User> {
    return this._http.get(`https://api.github.com/users/${ username }`);
  }
}
