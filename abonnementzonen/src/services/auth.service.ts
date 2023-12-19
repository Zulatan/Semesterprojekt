import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from 'firebase/auth'

import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private asf: AngularFireAuth) { }

  //everything to do with signing in, registering and logging out again
  signInWithGoogle() {
    return this.asf.signInWithPopup(new GoogleAuthProvider());
  }

  registerWithEmailAndPassword(user : { email: string, password: string}) {
    return this.asf.createUserWithEmailAndPassword(user.email, user.password);
  } 

  SignWithEmailAndPassword(user : { email: string, password: string}) {
    return this.asf.signInWithEmailAndPassword(user.email, user.password);
  }

  logout() {
    return this.asf.signOut();
  }


  //Method to get the users data to show their name on the homepage
  getUserData(): Observable<any> {
    return this.asf.authState;
  }


}
