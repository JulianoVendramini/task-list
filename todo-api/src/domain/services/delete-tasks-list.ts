import { TasksListRepository } from '@/infra/repositories'
import { TasksListNotFoundError } from '../errors'

export namespace DeleteTasksListService {
  export type Params = {
    id: number
  }
}

export class DeleteTasksListService {
  constructor(private readonly tasksListRepository: TasksListRepository) {}

  async delete(id: number) {
    const tasksListExistent = this.tasksListRepository.getTasksListById(id)

    if (!tasksListExistent) {
      throw new TasksListNotFoundError()
    }

    await this.tasksListRepository.deleteTasksList(id)

    return true
  }
}
