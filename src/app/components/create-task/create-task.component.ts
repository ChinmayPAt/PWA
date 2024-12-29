import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Editor } from '@tiptap/core';
import TaskItem from '@tiptap/extension-task-item';
import TaskList from '@tiptap/extension-task-list';
import StarterKit from '@tiptap/starter-kit';
import { STATUS, task } from 'src/app/interfaces/task';

@Component({
    selector: 'app-create-task',
    templateUrl: './create-task.component.html',
    styleUrl: './create-task.component.scss',
    standalone: false
})
export class CreateTaskComponent {
  taskForm = new FormGroup({
    title: new FormControl('', Validators.required),
    detail: new FormControl(''),
    status: new FormControl<STATUS>({ value: null, disabled: true }, Validators.required),
  });
  statusTypes: STATUS[] = [STATUS.TODO, STATUS.IN_PROGRESS, STATUS.DONE];
  editor = new Editor({
    extensions: [StarterKit, TaskList, TaskItem],
  });

  constructor(@Inject(MAT_DIALOG_DATA) public currentTaskData: task, private dialogRef: MatDialogRef<CreateTaskComponent>) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.taskForm.controls.title.setValue(this.currentTaskData.title);
    this.taskForm.controls.status.setValue(this.currentTaskData.status);
    if (this.currentTaskData.detail.length > 0) {
      this.editor.commands.setContent(this.currentTaskData.detail);
    }
  }

  setStatus(value: STATUS) {
    this.taskForm.controls.status.setValue(value);
  }

  onSubmit() {
    const newTaskData: task = {
      title: this.taskForm.controls.title.value,
      detail: this.editor.getHTML(),
      status: this.taskForm.controls.status.value,
      id: this.currentTaskData.id
    }
    this.dialogRef.close(newTaskData);
  }

  onCancel() {
    this.dialogRef.close(null);
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }
}
