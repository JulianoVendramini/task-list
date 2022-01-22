const { gql } = require("apollo-server");
const todos = require("../../db");

const typeDefs = gql`

  type Todo {
    id: ID
    title: String
    completed: Boolean
  }

  type Query {
    todos: [Todo]
  }
  
  type Mutation {
    createTodo(title: String!): Todo
  }
`;

const resolvers = {
    Query: {
        todos: () => todos,
    },

    Mutation: {
        createTodo: (_, { title }) => {
            const todoAlreadyExists = todos.find(todo => todo.title === title)
            
            if(todoAlreadyExists){
                throw new Error("Todo already exists")
            }

            const newTodo = {
                id: todos.length + 1,
                title,
                completed: false,
            }

            todos.push(newTodo)
            return newTodo
        }
    }
  };

module.exports = {
    typeDefs,
    resolvers,
};