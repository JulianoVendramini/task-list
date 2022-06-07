import { prisma } from '@/config/prisma-client'
import { CreateTasksListService } from '@/domain/services/create-tasks-list'

export class TasksListRepository {
  async createTasksList(params: CreateTasksListService.Params) {
    return await prisma.tasksList.create({
      data: params
    })
  }

  async getTasksListByName(name: string) {
    return await prisma.tasksList.findFirst({
      where: {
        name
      }
    })
  }

  async getTasksListById(id: number) {
    return await prisma.tasksList.findUnique({
      where: {
        id
      }
    })
  }

  async deleteTasksList(id: number) {
    return await prisma.tasksList.delete({
      where: {
        id
      }
    })
  }

  async listTasksList() {
    return await prisma.tasksList.findMany({
      include: {
        tasks: true
      }
    })
  }
}
