import { Component } from '@angular/core';
import { UserService } from 'src/Services/user/user.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  users: string[] = [];

  constructor(private _userService: UserService){
  }
}
