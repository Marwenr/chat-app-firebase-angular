import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  currentUser= {}

  constructor(private auth: Auth) { }
  login(email:string, password:string) {
    return signInWithEmailAndPassword(
      this.auth,
      email,
      password
    );
  }
  register(email:string, password:string) {
    return createUserWithEmailAndPassword(
      this.auth,
      email,
      password
    );

  }
}
