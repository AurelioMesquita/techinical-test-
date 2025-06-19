import { TaskModel } from '../models/taskModel';

export function status(task: TaskModel, activeTask: TaskModel | null) {
  if (task.interruptDate) return 'Interrompida';
  if (task.completeDate) return 'Completa';
  if (task.id === activeTask?.id) return 'Em andamento';
  return 'Tarefa abandonada';
}
