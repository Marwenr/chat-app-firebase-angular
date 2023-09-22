import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private shared: SharedService, private router: Router) {}

  user = {
    email: '',
    password: '',
  }

  registerWithMail() {
    this.shared.register(this.user.email, this.user.password).then((res) => {
      const data={
        displayName: res.user.displayName,
        email: res.user.email
      }
      this.shared.currentUser = data;
      this.router.navigate([''])
    }).catch((err) => {
      console.log(err)
    })
  }

}
