import { gql } from '@apollo/client'

export const TASKS_QUERY = gql`
  query TasksQuery {
    tasks {
      id
      title
      isDone
    }
  }
`
