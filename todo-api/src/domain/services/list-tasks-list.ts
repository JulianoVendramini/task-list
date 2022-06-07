import { TasksListRepository } from '@/infra/repositories'

export class ListTasksListService {
  constructor(private readonly tasksListRepository: TasksListRepository) {}

  async list() {
    return await this.tasksListRepository.listTasksList()
  }
}
