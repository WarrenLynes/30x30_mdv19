import { NgModule } from '@angular/core';
import { LoginComponent, NotFoundComponent, UiModule } from '@mdv19/ui';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { TasksComponent } from './tasks/tasks.component';

@NgModule({
  imports: [
    UiModule,
    RouterModule.forRoot([
      { path: '404', component: NotFoundComponent },
      { path: 'login', component: LoginComponent },
      {path: '', canActivate: [AuthGuard], component: TasksComponent},
      { path: '**', redirectTo: '404', pathMatch: 'full' }
    ], { initialNavigation: 'enabled' })
  ]
})
export class AppRoutingModule {}
