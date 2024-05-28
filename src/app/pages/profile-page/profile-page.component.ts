import { Component } from '@angular/core';
import { Profile } from 'src/app/interfaces/profile-interface';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent {
  profile: Profile = {
    FirstName: "Michael",
    LastName: "Peterson",
    ChampionshipTitles: 2,
    Victories: 50,
    WinPercentage: 60
  }
}
