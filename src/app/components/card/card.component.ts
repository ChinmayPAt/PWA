import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() value: any;
  task = new FormControl({ value: '', disabled: true });
  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    this.task.setValue(changes.value.currentValue);
  }

  editTask() {
    this.task.enable();
    console.log('opened modal');
  }

  disableEdit() {
    this.task.disable();
  }
}
