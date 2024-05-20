import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { FormControl } from '@angular/forms';
import { board, task } from 'src/app/interfaces/task';
import { STATUS } from 'src/app/interfaces/task';
import * as data from '../../../assets/board.json';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  todo: Array<task> = []; /*  = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep',
  ]; */

  inProgress: Array<task> = []; /* = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog',
  ]; */

  done: Array<task> = [];

  newTaskTitleTodo = new FormControl<string>('');
  newTaskTitleInProgress = new FormControl<string>('');
  statusTypes = STATUS;
  board: board | any = data;

  constructor() {}

  ngOnInit(): void {
    this.board = data;
    console.log(data);
    console.log(this.board);
    this.todo = this.board.taskList.filter((task: { status: STATUS }) => {
      task.status === this.statusTypes.TODO;
    });
    this.inProgress = this.board.taskList.filter((task: { status: STATUS }) => {
      task.status === this.statusTypes.IN_PROGRESS;
    });
  }

  drop(event: CdkDragDrop<task[]>, type: STATUS) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      this.getStatusComponentData(type).list.forEach((item: task) => {
        item.status = type;
      });
    }
  }

  private getStatusComponentData(type: STATUS): any {
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

  addNewTask(type: STATUS) {
    const statusObject = this.getStatusComponentData(type);
    const newTask: task = {
      title: statusObject.formControlValue,
      id: this.generateUniqueID(),
      status: type,
      detail: '',
    };
    statusObject.list.push(newTask);
    statusObject.resetFormControl;
  }

  updateTask(newTask: task) {
    this.getStatusComponentData(newTask.status).list = this.getStatusComponentData(
      newTask.status
    ).list.map((currentTask: task) => {
      if (newTask.id === currentTask.id) {
        currentTask.detail = newTask.detail;
        currentTask.title = newTask.title;
      }
    });
  }
}
