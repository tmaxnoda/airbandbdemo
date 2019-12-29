import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanLoad, UrlSegment, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class  AuthGuard implements CanLoad  {
 constructor(private router: Router, private authService: AuthService) {}
  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.authService.isUserAuthenticated) {
      this.router.navigateByUrl('/auth');
    }
    return this.authService.isUserAuthenticated;
  }

}
