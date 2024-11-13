import { Component, HostListener, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule],  
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

  export class HeaderComponent implements OnInit {
  mobileNav: boolean = false;
  mobile: boolean = true;
  scrolledNav: boolean = false;

  ngOnInit() {
    this.checkScreen();
  }

  toggleMobileNav() {
    this.mobileNav = !this.mobileNav;
  }

  closeMobileNav() {
    this.mobileNav = false;
  }

  @HostListener('window:resize')
  checkScreen() {
    this.mobile = window.innerWidth <= 990;
    if (this.mobile) this.mobileNav = false;
  }

  @HostListener('window:scroll')
  onScroll() {
    this.scrolledNav = window.scrollY > 50;
  }
}
