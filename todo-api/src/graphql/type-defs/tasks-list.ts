import { gql } from 'apollo-server-express'

export default gql`
  type TasksList {
    id: Int
    name: String
    tasks: [Task]
  }

  input CreateTasksListInput {
    name: String
  }

  input DeleteTasksListInput {
    id: Int
  }

  extend type Query {
    getTasksList: [TasksList]
  }

  extend type Mutation {
    createTasksList(tasksList: CreateTasksListInput): TasksList
    deleteTasksList(tasksList: DeleteTasksListInput): Boolean
  }
`
