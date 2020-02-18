import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '@mdv19/core-data';
import { TasksFacade } from '@mdv19/core-state';

@Component({
  selector: 'mdv19-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  tasks$: Observable<Task[]> = this.facade.allTasks$;

  constructor(private facade: TasksFacade) { }

  ngOnInit() {
    this.facade.loadTasks();
  }

}
