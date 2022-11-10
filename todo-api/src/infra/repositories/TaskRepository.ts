import { prisma } from '@/config/prisma-client'

import { CreateTaskService, ListTasksService } from '@/domain/services'
import { CheckTaskService } from '@/domain/services/check-task'
import { EditTaskService } from '@/domain/services/edit-task'

export class TaskRepository {
  async createTask(params: CreateTaskService.Params) {
    const task = await prisma.task.create({
      data: params
    })

    return task
  }

  async deleteTask(id: number) {
    const task = await prisma.task.findFirst({
      where: {
        id
      }
    })

    if (!task) {
      throw new Error('Task not found')
    }

    await prisma.task.delete({
      where: {
        id
      }
    })

    return true
  }

  async editTask(params: EditTaskService.Params) {
    const task = await prisma.task.findFirst({
      where: {
        id: params.id
      }
    })

    if (!task) {
      throw new Error('Task not found')
    }

    return await prisma.task.update({
      where: {
        id: params.id
      },
      data: {
        title: params.title
      }
    })
  }

  async checkTask(params: CheckTaskService.Params) {
    const task = await prisma.task.findFirst({
      where: {
        id: params.id
      }
    })

    if (!task) {
      throw new Error('Task not found')
    }

    const teste = await prisma.task.update({
      where: {
        id: params.id
      },
      data: {
        isDone: !task.isDone
      }
    })

    return teste
  }

  async listTasks(params: ListTasksService.Params) {
    const tasks = await prisma.task.findMany({
      where: {
        tasksListId: params.tasksListid
      }
    })

    return tasks
  }
}
