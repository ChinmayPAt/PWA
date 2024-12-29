import { Component, Input } from '@angular/core';
import { Editor } from '@tiptap/core';

@Component({
    selector: 'text-editor-menu',
    imports: [],
    templateUrl: './text-editor-menu.component.html',
    styleUrl: './text-editor-menu.component.scss'
})
export class TextEditorMenuComponent {
  @Input() editor: Editor;
}
