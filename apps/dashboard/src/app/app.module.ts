import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreStateModule } from '@mdv19/core-state';
import { CoreDataModule } from '@mdv19/core-data';
import { MaterialModule } from '@mdv19/material';
import { UiModule } from '@mdv19/ui';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, TasksComponent],
  imports: [
    CoreStateModule,
    CoreDataModule,
    MaterialModule,
    UiModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
