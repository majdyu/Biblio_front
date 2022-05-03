import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthGuard } from './services/auth.guard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'test';
  authenticated= true;
  constructor(private authguard: AuthGuard, private router: Router, private activatedRoute: ActivatedRoute){}
  ngOnInit(): void {
    console.log(this.router.url)
    if(this.router.url == "/"){
      setTimeout(() => {
        this.router.navigate(["/livres"])
      }, 100)
    }
   this.authguard.getIsAuth().subscribe(res => {
    this.authenticated = res;
   })
  }

}
