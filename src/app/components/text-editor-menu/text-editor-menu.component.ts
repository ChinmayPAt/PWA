import { Component, Input } from '@angular/core';
import { Editor } from '@tiptap/core';

@Component({
  selector: 'text-editor-menu',
  templateUrl: './text-editor-menu.component.html',
  styleUrl: './text-editor-menu.component.scss',
  standalone: false,
})
export class TextEditorMenuComponent {
  @Input() editor: Editor;
}
