export enum STATUS {
  TODO = 'TODO',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}

export interface board {
  taskList: Array<task>;
  id: string;
}

export interface task {
  id: string;
  status: STATUS;
  title: string;
  detail: string | null;
}
