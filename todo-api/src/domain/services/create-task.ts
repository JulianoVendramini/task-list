import { TaskRepository } from '@/infra/repositories'
import { Task } from '../entities'

export namespace CreateTaskService {
  export type Params = {
    title: string
    tasksListId: number
  }

  export type Result = Task
}

export class CreateTaskService {
  constructor(private readonly taskRepository: TaskRepository) {}

  async create(
    task: CreateTaskService.Params
  ): Promise<CreateTaskService.Result> {
    return await this.taskRepository.createTask(task)
  }
}
