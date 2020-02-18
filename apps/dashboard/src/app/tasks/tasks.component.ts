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
  task$: Observable<Task> = this.facade.selectedTask$;

  constructor(private facade: TasksFacade) { }

  ngOnInit() {
    this.facade.loadTasks();
  }

  saveTask(task: Task) {
    if(task.id) {
      this.facade.updateTask(task);
    } else {
      this.facade.createTask(task);
    }
    this.reset();
  }

  delete(task: Task) {
    this.facade.deleteTask(task);
  }

  select(taskId: number) {
    this.facade.selectTask(taskId);
  }

  reset() {
    this.facade.selectTask(null);
  }
}
