import {
  CreateTasksListService,
  DeleteTasksListService,
  ListTasksListService
} from '@/domain/services'
import { TasksListRepository } from '@/infra/repositories'

const makeCreateTasksList = () => {
  const tasksListRepository = new TasksListRepository()
  const createTasksListService = new CreateTasksListService(tasksListRepository)

  return createTasksListService
}

const makeDeleteTasksList = () => {
  const tasksListRepository = new TasksListRepository()
  const deleteTasksList = new DeleteTasksListService(tasksListRepository)

  return deleteTasksList
}

const makeGetTasksList = () => {
  const tasksListRepository = new TasksListRepository()
  const listTasksListService = new ListTasksListService(tasksListRepository)

  return listTasksListService
}

export default {
  Query: {
    getTasksList: async () => makeGetTasksList().list()
  },
  Mutation: {
    createTasksList: async (_, { tasksList }) =>
      makeCreateTasksList().create(tasksList),
    deleteTasksList: async (_, { tasksList }) =>
      makeDeleteTasksList().delete(tasksList.id)
  }
}
