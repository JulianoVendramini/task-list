import {
  CheckTaskService,
  CreateTaskService,
  DeleteTaskService,
  EditTaskService,
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

const makeEditTask = () => {
  const taskRepository = new TaskRepository()
  const editTaskService = new EditTaskService(taskRepository)

  return editTaskService
}

const makeCheckTask = () => {
  const taskRepository = new TaskRepository()
  const checkTaskService = new CheckTaskService(taskRepository)

  return checkTaskService
}

const makeListTasks = () => {
  const taskRepository = new TaskRepository()
  const listTasksService = new ListTasksService(taskRepository)

  return listTasksService
}

export default {
  Query: {
    list: async (_, { tasksListid }) => makeListTasks().list({ tasksListid })
  },
  Mutation: {
    createTask: async (_, { task }) => makeCreateTask().create(task),
    deleteTask: async (_, { id }) => makeDeleteTask().delete(id),
    editTask: async (_, { task }) => makeEditTask().edit(task),
    checkTask: async (_, { task }) => makeCheckTask().edit(task)
  }
}
