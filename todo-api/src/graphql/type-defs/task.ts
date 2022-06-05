import { gql } from 'apollo-server-express'

export default gql`
  type Task {
    id: Int
    title: String
    isDone: Boolean
    tasksListId: Int
  }

  input TaskInput {
    title: String!
    tasksListId: Int!
  }

  extend type Query {
    tasks: [Task]
  }

  extend type Mutation {
    createTask(task: TaskInput): Task
    deleteTask(id: Int!): Boolean
  }
`
