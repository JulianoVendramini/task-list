export type TaskProps = {
  id: number
  title: string
  isDone: boolean
}

export type TasksListProps = {
  id: number
  name: string
  tasks: TaskProps[]
}
