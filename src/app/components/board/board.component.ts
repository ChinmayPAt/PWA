import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { FormControl } from '@angular/forms';
import { Board, Task } from 'src/app/models/task.model';
import * as data from '../../../assets/board.json';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
  standalone: false,
})
export class BoardComponent implements OnInit {
  todo: Array<Task> = []; /*  = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep',
  ]; */

  inProgress: Array<Task> = []; /* = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog',
  ]; */

  done: Array<Task> = [];

  newTaskTitleTodo = new FormControl<string>('');
  newTaskTitleInProgress = new FormControl<string>('');
  statusTypes = '';
  board: Board | any = data;

  constructor() {}

  ngOnInit(): void {
    this.board = data;
    console.log(data);
    console.log(this.board);
    /* this.todo = this.board.taskList.filter((task: { status: string }) => {
      task.status === this.statusTypes.TODO;
    });
    this.inProgress = this.board.taskList.filter((task: { status: string }) => {
      task.status === this.statusTypes.IN_PROGRESS;
    }); */
  }

  drop(event: CdkDragDrop<Task[]>, type: string) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      this.getStatusComponentData(type).list.forEach((item: Task) => {
        item.listName = type;
      });
    }
  }

  private getStatusComponentData(type: string): any {
    const map = {
      TODO: {
        list: this.todo,
        formControlValue: this.newTaskTitleTodo.value,
        resetFormControl: this.newTaskTitleTodo.reset(),
      },
      IN_PROGRESS: {
        list: this.inProgress,
        formControlValue: this.newTaskTitleInProgress.value,
        resetFormControl: this.newTaskTitleInProgress.reset(),
      },
      DONE: {
        list: this.done,
      },
    };
    return map[type];
  }

  private generateUniqueID() {
    return Math.floor(Math.random() * Date.now()).toString(16);
  }

  addNewTask(type: string) {
    const statusObject = this.getStatusComponentData(type);
    const newTask: Task = {
      title: statusObject.formControlValue,
      id: this.generateUniqueID(),
      listName: type,
      detail: '',
    };
    statusObject.list.push(newTask);
    statusObject.resetFormControl;
  }

  updateTask(newTask: Task) {
    this.getStatusComponentData(newTask.listName).list = this.getStatusComponentData(
      newTask.listName
    ).list.map((currentTask: Task) => {
      if (newTask.id === currentTask.id) {
        currentTask.detail = newTask.detail;
        currentTask.title = newTask.title;
      }
    });
  }
}
