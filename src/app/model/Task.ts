import {Status} from "../tasks/tasks.component";

export interface Task {
  name: string;
  description: string;
  dueDate: string;
  status: Status;
}
