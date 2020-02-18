import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksService } from './tasks/tasks.service';
import { SnackbarComponent } from './snackbar/snackbar.component';

@NgModule({
  declarations: [SnackbarComponent],
  imports: [ CommonModule, HttpClientModule ],
  providers: [ TasksService ],
  entryComponents: [SnackbarComponent],
})
export class CoreDataModule {}
