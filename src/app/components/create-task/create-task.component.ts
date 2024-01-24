import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Editor } from '@tiptap/core';
import TaskItem from '@tiptap/extension-task-item';
import TaskList from '@tiptap/extension-task-list';
import StarterKit from '@tiptap/starter-kit';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.scss',
})
export class CreateTaskComponent {
  taskForm = new FormGroup({
    title: new FormControl('', Validators.required),
    detail: new FormControl(''),
    status: new FormControl('', Validators.required),
  });
  statusTypes: string[] = ['To do', 'In Progress', 'Done'];
  editor = new Editor({
    extensions: [StarterKit, TaskList, TaskItem],
  });

  constructor(@Inject(MAT_DIALOG_DATA) public data: { title: string }) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log(this.data);
    this.taskForm.controls.title.setValue(this.data.title);
  }

  setStatus(value: string) {
    this.taskForm.controls.status.setValue(value);
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }
}
