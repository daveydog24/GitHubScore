import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from './user-github.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userExists: boolean = null;
  score: number = 0;
  font: string = 'black';
  message: string = 'black';
  username: string = null;

  constructor(private _dataService: DataService) {}

  getFont(score){
    if(score <20) {
      this.font = "red"
      this.message = "Needs Work!"
    } else if (score >= 20 && score < 50) {
      this.font = "orange"
      this.message = "A Decent Start!"
    } else if (score >= 50 && score < 100) {
      this.font = "black"
      this.message = "Doing good!"
    } else if (score >= 100 && score < 200) {
      this.font = "green"
      this.message = "Great Job!"
    } else {
      this.font = "green"
      this.message = "Github Elite!"
    }
  }

  calculateScore(form: NgForm) {
    this.username = form.value.username;

    this._dataService.retrieveUser(this.username)
      .subscribe(
        user => {
          this.userExists = true;
          this.score = user.public_repos + user.followers;
          form.reset();
          this.getFont(this.score);
        },
        (response: Response) => this.userExists = false
      );
    }
}