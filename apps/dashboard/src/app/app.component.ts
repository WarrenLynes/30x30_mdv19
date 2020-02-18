import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { AppFacade, AuthFacade } from '@mdv19/core-state';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'mdv19-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  authenticated$: Observable<boolean> = this.authFacade.authenticated$;
  destroy$: Subject<boolean> = new Subject();
  loading: boolean;

  links = [
    {path: '', title: 'tasks', icon: 'access_time'},
  ];

  constructor(
    private authFacade: AuthFacade,
    private appFacade: AppFacade,
    private cdRef: ChangeDetectorRef,
    private router: Router
  ){}

  ngOnInit(): void {
    this.appFacade.initialize();
    this.appFacade.loading$.pipe(takeUntil(this.destroy$)).subscribe((x) => {
      if (x !== this.loading) {
        this.loading = x;
        this.cdRef.detectChanges()
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }

  onLogout() {
    this.authFacade.logout();
  }

}
