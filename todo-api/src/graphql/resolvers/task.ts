import {
  CreateTaskService,
  DeleteTaskService,
  ListTasksService
} from '@/domain/services'
import { TaskRepository } from '@/infra/repositories'

const makeCreateTask = () => {
  const taskRepository = new TaskRepository()
  const createTaskService = new CreateTaskService(taskRepository)

  return createTaskService
}

const makeDeleteTask = () => {
  const taskRepository = new TaskRepository()
  const deleteTaskService = new DeleteTaskService(taskRepository)

  return deleteTaskService
}

const makeListTasks = () => {
  const taskRepository = new TaskRepository()
  const listTasksService = new ListTasksService(taskRepository)

  return listTasksService
}

export default {
  Query: {
    tasks: async () => makeListTasks().list()
  },
  Mutation: {
    createTask: async (_, { task }) => makeCreateTask().create(task),
    deleteTask: async (_, { id }) => {
      makeDeleteTask().delete(id)
    }
  }
}
