import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  hide: boolean = true;
  passwordControl:FormControl = new FormControl('', Validators.required);

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  constructor(private router: Router, private authService: AuthService, private fb: FormBuilder) { }
    navigateToOpretbruger(){
      this.router.navigate(['/registration']);
    }

    navigateToForside(){
      this.router.navigate(['/tabs/tab1']);
    }
  ngOnInit(): void {
  }

  loginWithGoogle() {
    this.authService.signInWithGoogle().then((res: any) => {
      this.router.navigateByUrl('tabs/tab1')
    }).catch((error: any) => {
      console.error(error);
    })
  }

  loginWithEmailAndPassword() {
    // const userData = Object.assign(this.loginForm.value, {email: this.loginForm.value.email});
    const userData = this.loginForm.value;
    console.log(userData); 

    this.authService.SignWithEmailAndPassword(userData).then((res: any) => {
      console.log('login succesfuld')
      this.router.navigateByUrl('/tabs/tab1')
    }).catch((error: any) => {
      console.error(error);
  })}
}