import { gql } from 'apollo-server-express'

export default gql`
  type Task {
    id: Int
    title: String
    isDone: Boolean
  }

  input TaskInput {
    title: String!
    tasksListId: Int!
  }

  input EditTaskInput {
    id: Int
    title: String
  }

  input CheckTaskInput {
    id: Int
    isDone: Boolean
  }

  extend type Query {
    list(tasksListid: Int!): [Task]
  }

  extend type Mutation {
    createTask(task: TaskInput): Task
    deleteTask(id: Int): Boolean
    editTask(task: EditTaskInput): Task
    checkTask(task: CheckTaskInput): Task
  }
`
