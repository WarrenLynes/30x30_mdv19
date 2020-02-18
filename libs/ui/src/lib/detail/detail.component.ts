import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, first, withLatestFrom } from 'rxjs/operators';
import { TasksFacade } from '@mdv19/core-state';
import { Observable } from 'rxjs';
import { Task } from '@mdv19/core-data';

@Component({
  selector: 'mdv19-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  tasks$: Observable<Task[]> = this.facade.allTasks$;
  task$: Observable<Task> = this.facade.selectedTask$;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public facade: TasksFacade
  ) { }

  ngOnInit() {
    this.facade.loadTasks();

    this.tasks$.pipe(
      withLatestFrom(this.route.paramMap),
      filter(([tasks, params]) => params.has('id') && !!tasks.length),
      first(),
    ).subscribe(([tasks, params]) => {
      console.log(tasks);
      this.facade.selectTask(params.get('id'));
    });
  }

}
