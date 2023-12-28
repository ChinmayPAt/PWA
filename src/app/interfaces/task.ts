export const enum statusTypes {
  DEFINED = '0',
  IN_PROGRESS = '1',
  DONE = '2',
}

export interface task {
  id: string;
  status: statusTypes;
  title: string;
}
