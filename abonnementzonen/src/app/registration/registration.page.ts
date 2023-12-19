import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  registrationForm: FormGroup;

  private apiUrl = environment.production ? 'https://eksamen2023.onrender.com/api/user' : 'http://localhost:8080/api/user'

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router, private authService: AuthService) {
    this.registrationForm = this.fb.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  navigateToLogin(){
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.registrationForm.valid) {
      const formData = this.registrationForm.value;

      // Make HTTP POST request to your Node.js server
      this.http.post(this.apiUrl, formData)
        .subscribe(response => {
          console.log('Registration successful', response);
          // You can handle success, navigate to another page, etc.
        }, error => {
          console.error('Registration failed', error);
          // Handle the error, show a message to the user, etc.
        });
    }
  }

  registerWithEmailAndPassword() {

    const userData = Object.assign(this.registrationForm.value, {email: this.registrationForm.value.email});

    this.authService.registerWithEmailAndPassword(userData).then((res: any) => {
      this.router.navigateByUrl('login')
    }).catch((error: any) => {
      console.error(error);
  })}
}