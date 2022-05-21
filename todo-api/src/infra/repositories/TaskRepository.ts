import { prisma } from '@/config/prisma-client'

import { CreateTaskService } from '@/domain/services'

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

  async listTasks() {
    const tasks = await prisma.task.findMany()

    return tasks
  }
}
