export type Task = {
  id: string;
  title: string;
  listName: string;
  detail: string;
};

export type Board = {
  id: string;
  title: string;
  listTypes: string[];
  taskList: Task[];
};
