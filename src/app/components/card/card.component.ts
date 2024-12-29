import { Component, Input, OnInit, Output, SimpleChanges, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CreateTaskComponent } from '../create-task/create-task.component';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: false,
})
export class CardComponent implements OnInit {
  @Input() taskData: Task;
  @Output() updateTaskEvent = new EventEmitter<Task>();
  taskTitle = new FormControl({ value: '', disabled: true });
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    this.taskTitle.setValue(this.taskData.title);
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    this.taskTitle.setValue(this.taskData.title);
  }

  editTask() {
    console.log('opened modal');
    this.dialog
      .open(CreateTaskComponent, {
        data: this.taskData,
      })
      .afterClosed()
      .subscribe(res => {
        // console.log(res);
        if (res) {
          this.taskTitle.setValue(res.title);
          this.updateTaskEvent.emit(res);
        }
      });
  }
}
