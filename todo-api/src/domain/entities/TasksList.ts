import { Task } from '@prisma/client'

export type TasksList = {
  id: number
  name: string
  tasks?: Task[]
}
