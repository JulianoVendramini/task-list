import { gql } from '@apollo/client'

export const CREATE_TASK_MUTATION = gql`
  mutation CreateTask($task: TaskInput) {
    createTask(task: $task) {
      id
      title
      isDone
    }
  }
`

export const DELETE_TASK_MUTATION = gql`
  mutation DeleteTask($deleteTaskId: Int!) {
    deleteTask(id: $deleteTaskId)
  }
`

export const EDIT_TASK_MUTATION = gql`
  mutation EditTask($task: EditTaskInput) {
    editTask(task: $task) {
      id
      title
      isDone
    }
  }
`

export const CHECK_TASK_MUTATION = gql`
  mutation CheckTask($task: CheckTaskInput) {
    checkTask(task: $task) {
      id
      title
      isDone
    }
  }
`
