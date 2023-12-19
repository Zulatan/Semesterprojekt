import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.page.html',
  styleUrls: ['./landingpage.page.scss'],
})
export class LandingpagePage implements OnInit {

  constructor(private router: Router) { }
    navigateToOpretbruger(){
      this.router.navigate(['/registration']);
    }

    navigateToLogin(){
      this.router.navigate(['/login']);
    }

  ngOnInit() {
  }

}
