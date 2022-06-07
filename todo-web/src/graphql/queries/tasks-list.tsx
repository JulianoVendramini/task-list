import { gql } from '@apollo/client'

export const TASKS_LIST_QUERY = gql`
  query Query {
    getTasksList {
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
