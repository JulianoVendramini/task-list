import { TaskRepository } from '@/infra/repositories'

export class ListTasksService {
  constructor(private readonly taskRepository: TaskRepository) {}

  async list() {
    const tasks = await this.taskRepository.listTasks()

    return tasks
  }
}
