import { Injectable, OnDestroy } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthFacade } from '@mdv19/core-state';
import { first, map, takeUntil } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate, OnDestroy {

  destroy$: Subject<boolean> = new Subject();

  constructor(private router: Router, private facade: AuthFacade) { }

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<boolean>|boolean {

    const queryParams = state.url.length > 1 ?  { returnUrl: state.url } : null;
    console.log(state.url);

    return this.facade.authenticated$.pipe(
      takeUntil(this.destroy$), first(),
      map(x => {
        if(x) {
          return true;
        } else {
          this.router.navigate(['/login'], { queryParams });
          return false;
        }
      })
    );
  }
}
