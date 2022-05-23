import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../models/login.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login= new Login()
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }
  loginMethod(){
    if(this.login.username && this.login.password){
      this.authService.authentication(this.login).subscribe(res => {
        this.router.navigate(['/livres'])
        localStorage.setItem("id_token", res.id_token);
   
      })
    }
  }
}
