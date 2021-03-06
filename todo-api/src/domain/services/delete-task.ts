import { TaskRepository } from '@/infra/repositories'

export namespace DeleteTaskService {
  export type Params = {
    id: number
  }
}

export class DeleteTaskService {
  constructor(private readonly taskRepository: TaskRepository) {}

  async delete(id: number) {
    await this.taskRepository.deleteTask(id)
    return true
  }
}
