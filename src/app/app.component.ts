import { Component, inject, OnInit } from '@angular/core';
import { BoardStore } from './state/board.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: false,
})
export class AppComponent implements OnInit {
  readonly boardStore = inject(BoardStore);

  ngOnInit(): void {
    this.boardStore.loadBoardById();
    console.log(this.boardStore.boards());
  }
}
