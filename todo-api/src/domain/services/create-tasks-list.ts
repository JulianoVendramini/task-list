import { TasksListRepository } from '@/infra/repositories'
import { TasksList } from '../entities'
import { TasksListAlreadyExistsError } from '../errors'

export namespace CreateTasksListService {
  export type Params = {
    name: string
  }

  export type Result = TasksList
}

export class CreateTasksListService {
  constructor(private readonly tasksListRepository: TasksListRepository) {}

  async create(
    tasksList: CreateTasksListService.Params
  ): Promise<CreateTasksListService.Result> {
    const tasksListExistent = await this.tasksListRepository.getTasksListByName(
      tasksList.name
    )

    if (tasksListExistent) {
      throw new TasksListAlreadyExistsError()
    }

    return await this.tasksListRepository.createTasksList(tasksList)
  }
}
