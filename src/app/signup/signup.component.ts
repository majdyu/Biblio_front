import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ManagerUser } from '../models/user.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user = new ManagerUser();
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  register() {
    if (this.isFormValid())
      this.user.login = this.user.email;
    this.authService.register(this.user).subscribe(() => {
      console.log("registered");
      this.router.navigate(['/login'])
    }, error => {
      console.log(error);

    })
  }
  isFormValid(): boolean {
    if (this.user.firstName &&
      this.user.lastName &&
      this.user.email &&
      this.user.password
    )
      return true;
    else return false;
  }
}
