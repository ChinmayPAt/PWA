import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  cannotEdit: boolean = true;
  constructor() {}

  ngOnInit(): void {}

  editTask() {
    this.cannotEdit = false;
    console.log('opened modal');
  }
}
