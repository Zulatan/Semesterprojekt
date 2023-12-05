import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router) { }
    navigateToOpretbruger(){
      this.router.navigate(['/registration']);
    }

    navigateToForside(){
      this.router.navigate(['/tabs/tab1']);
    }
  ngOnInit() {
  }

}
