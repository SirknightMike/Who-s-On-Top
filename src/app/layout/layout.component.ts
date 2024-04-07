import { Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Router } from '@angular/router';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

  @ViewChild('drawer') drawer!: MatDrawer;

  constructor(private _route: Router){}

  onProfileClick() {
    this._route.navigate(['/profile'])
  }

  toggleDrawer() {
    if(this.drawer.opened){
      this.drawer.close();
    } else {
      this.drawer.open();
    }
  }
}
