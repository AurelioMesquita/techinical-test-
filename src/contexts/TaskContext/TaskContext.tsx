import { createContext } from 'react';
import { TaskStateModel } from '../../models/taskStateMode';
import { initialTaskState } from './initialTaskState';
import { TaskActionModel } from './taskActions';

const initialContextValue = {
  state: initialTaskState,
  dispatch: () => {},
};
type TaskContextProps = {
  state: TaskStateModel;
  dispatch: React.Dispatch<TaskActionModel>;
};
export const TaskContext = createContext<TaskContextProps>(initialContextValue);
