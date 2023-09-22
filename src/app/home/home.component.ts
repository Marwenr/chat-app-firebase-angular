import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private shared: SharedService, private router: Router) {}
  user = this.shared.currentUser

  ngOnInit() {
    if(Object.keys(this.user).length === 0) {
      this.router.navigate(['/login'])
    }
  }
}
