import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '@mdv19/core-data';

@Component({
  selector: 'mdv19-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() data: Task[];
  @Input() selected: Task;
  @Output() selectTask = new EventEmitter<number>();
  @Output() deleteTask = new EventEmitter<Task>();

  constructor() { }

  ngOnInit() {
  }
}
