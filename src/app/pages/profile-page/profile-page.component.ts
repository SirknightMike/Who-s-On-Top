import { Component } from '@angular/core';


export interface Profile {
  FirstName: string;
  LastName: string;
  ChampionshipTitles: number;
  Victories: number;
  WinPercentage: number;
}
@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent {
  profile: Profile = {
    FirstName: "Michael",
    LastName: "Petterson",
    ChampionshipTitles: 2,
    Victories: 50,
    WinPercentage: 60
  }
}
