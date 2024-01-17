import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { statusTypes } from 'src/app/interfaces/task';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.scss',
})
export class CreateTaskComponent {
  public taskForm = new FormGroup({
    title: new FormControl('', Validators.required),
    detail: new FormControl(''),
    status: new FormControl('', Validators.required),
  });
  public statusTypes: string[] = ['To do', 'In Progress', 'Done'];

  constructor(@Inject(MAT_DIALOG_DATA) public data: { title: string }) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log(this.data);
    this.taskForm.controls.title.setValue(this.data.title);
  }

  public setStatus(value: string) {
    this.taskForm.controls.status.setValue(value);
  }
}
