import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { statusTypes } from 'src/app/interfaces/task';

@Component({
  selector: 'app-create-task',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, MatCardModule, MatButtonModule],
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.scss',
})
export class CreateTaskComponent {
  public taskForm = new FormGroup({
    title: new FormControl('', Validators.required),
    detail: new FormControl(''),
    status: new FormControl('', Validators.required),
  });
  public statusTypes: string[] = ['Defined', 'In Progress', 'Done'];

  public setStatus(value: string) {
    this.taskForm.controls.status.setValue(value);
  }
}
