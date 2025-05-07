import { createContext } from 'react';
import { TaskStateModel } from '../../models/taskStateMode';
import { initialTaskState } from './initialTaskState';

const initialContextValue = {
  state: initialTaskState,
  setState: () => {},
};
type TaskContextProps = {
  state: TaskStateModel;
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};
export const TaskContext = createContext<TaskContextProps>(initialContextValue);
