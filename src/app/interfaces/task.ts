export const enum status {
  DEFINED = '0',
  IN_PROGRESS = '1',
  DONE = '2',
}

export interface task {
  id: string;
  status: status;
  title: string;
}
