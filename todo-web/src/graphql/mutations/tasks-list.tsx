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
