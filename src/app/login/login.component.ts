import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private shared: SharedService, private router: Router) {}

  user={
    email: '',
    password: '',
  }

  loginWithEmail() {
    this.shared.login(this.user.email,this.user.password).then((res: any) => {
      const data={
        displayName: res.user.displayName,
        email: res.user.email
      }
      this.shared.currentUser = data;
      this.router.navigate([''])
    }).catch((err: any) => {
      console.log(err)
    })
  }
}
