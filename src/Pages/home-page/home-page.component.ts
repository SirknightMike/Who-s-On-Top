import { Component } from '@angular/core';
import { UserService } from 'src/Services/user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  users: string[] = [];

  constructor(private _userService: UserService){
    this._userService.getUserDetails().subscribe(res => {
      this.users = res;
    })
  }
}
