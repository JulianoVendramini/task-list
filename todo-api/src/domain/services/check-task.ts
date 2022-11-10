import { TaskRepository } from '@/infra/repositories'

export namespace CheckTaskService {
  export type Params = {
    id: number
  }
}

export class CheckTaskService {
  constructor(private readonly taskRepository: TaskRepository) {}

  async edit(params: CheckTaskService.Params) {
    return await this.taskRepository.checkTask(params)
  }
}
