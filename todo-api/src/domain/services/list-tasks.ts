import { TaskRepository } from '@/infra/repositories'

export namespace ListTasksService {
  export interface Params {
    tasksListid: number
  }
}
export class ListTasksService {
  constructor(private readonly taskRepository: TaskRepository) {}

  async list(params: ListTasksService.Params) {
    const tasks = await this.taskRepository.listTasks(params)

    return tasks
  }
}
