import {Status} from "../tasks/tasks.component";

export interface Item {
  id: number;
  name?: string;
  description?: string;
  dueDate?: Date;
  status?: Status;
}
