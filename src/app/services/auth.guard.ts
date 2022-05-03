import { EventEmitter, Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { BehaviorSubject, Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable({
    providedIn: 'root'
 })
 
 export class AuthGuard implements CanActivate {
   isAuthenticated = false;
   private isAuth: BehaviorSubject<boolean> = new  BehaviorSubject<boolean>(true);
     constructor(private router: Router,
        private authService: AuthService
                ) {
     }
     canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
         this.authService.isAuthenticated().subscribe(value => {
           console.log(value);
           
          this.isAuth.next(value);
           if (value) {
              this.isAuthenticated  = true
              console.log(route);
            
           }
 
           if (this.isAuthenticated  != true) {
             this.router.navigate(['/login']);
           }
         });
         return this.isAuthenticated;
     }
     getIsAuth(): Observable<boolean>{
      return this.isAuth.asObservable();
     }
 }