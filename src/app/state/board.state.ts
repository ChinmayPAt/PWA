import { inject, Injectable } from '@angular/core';
import { Board } from '../models/task.model';
import { APIRequest, DataService } from '../services/data/data.service';
import { patchState, signalState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { exhaustMap, pipe } from 'rxjs';
import { APP_CONFIG } from '../app.config';
import { tapResponse } from '@ngrx/operators';

type BoardState = { boards: Board[] };

const initialState: BoardState = {
  boards: [],
};

@Injectable()
export class BoardStore {
  readonly dataService = inject(DataService);
  readonly state = signalState(initialState);

  readonly boards = this.state.boards;

  readonly loadBoardById = rxMethod<void>(
    pipe(
      exhaustMap(() => {
        const request: APIRequest = {
          url: APP_CONFIG.API_URL.getBoard + '1',
        };
        return this.dataService.getData(request).pipe(
          tapResponse({
            next: (board: Board) => this.updateBoard(board),
            error: console.error,
          })
        );
      })
    )
  );

  private updateBoard(board: Board) {
    patchState(this.state, state => {
      let boards = state.boards;
      boards.push(board);
      return { ...state, boards };
    });
  }
}
