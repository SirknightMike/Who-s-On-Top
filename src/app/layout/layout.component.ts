import { Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  @ViewChild('drawer') drawer!: MatDrawer;
  isDark = false;

  toggleTheme(): void {
    this.isDark = !this.isDark;
    document.body.classList.toggle('dark-theme', this.isDark);
    localStorage.setItem('wot-theme', this.isDark ? 'dark' : 'light');
  }

  ngOnInit(): void {
    const saved = localStorage.getItem('wot-theme');
    if (saved === 'dark') {
      this.isDark = true;
      document.body.classList.add('dark-theme');
    }
  }

  constructor(private _route: Router) {}

  onProfileClick() {
    this._route.navigate(['/profile']);
  }

  toggleDrawer() {
    if (this.drawer.opened) {
      this.drawer.close();
    } else {
      this.drawer.open();
    }
  }

  onLogoutClick() {
    this._route.navigate(['/login']);
  }
}
