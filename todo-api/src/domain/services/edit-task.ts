import { TaskRepository } from '@/infra/repositories'

export namespace EditTaskService {
  export type Params = {
    id: number
    title: string
  }
}

export class EditTaskService {
  constructor(private readonly taskRepository: TaskRepository) {}

  async edit(params: EditTaskService.Params) {
    return await this.taskRepository.editTask(params)
  }
}
