import { gql } from '@apollo/client'

export const CREATE_TASKS_LIST_MUTATION = gql`
  mutation CreateTasksList($tasksList: CreateTasksListInput) {
    createTasksList(tasksList: $tasksList) {
      id
      name
      tasks {
        id
        title
        isDone
      }
    }
  }
`

export const DELETE_TASKS_LIST_MUTATION = gql`
  mutation DeleteTasksList($tasksList: DeleteTasksListInput) {
    deleteTasksList(tasksList: $tasksList)
  }
`
