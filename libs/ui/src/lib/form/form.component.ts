import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Task } from '@mdv19/core-data';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'mdv19-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnChanges {

  form: FormGroup;

  @Input() selected: Task;
  @Output() saveTask = new EventEmitter<Task>();
  @Output() deleteTask = new EventEmitter<Task>();
  @Output() resett = new EventEmitter();

  constructor() {
    this.buildForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if( changes.selected ) {
      this.buildForm();
    }
  }

  submit() {
    if(this.form.valid) {
      this.saveTask.emit({...this.selected, ...this.form.value});
      this.form.reset();
    }
  }

  buildForm() {
    if ( this.selected && this.selected.id ) {
      this.form = new FormGroup({
        name: new FormControl(this.selected.name),
        description: new FormControl(this.selected.description),
      });
    } else {
      this.form = new FormGroup({
        name: new FormControl(''),
        description: new FormControl(''),
      });
    }
  }

  onCancel() {
    this.form.reset();
    this.resett.emit();
  }

}
