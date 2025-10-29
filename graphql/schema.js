const { buildSchema } = require('graphql');

module.exports = buildSchema(`
  scalar Date

  enum Status {
    TODO
    IN_PROGRESS
    DONE
  }

  type Task {
    id: ID!
    title: String!
    description: String
    status: Status!
    dueDate: Date
    createdAt: Date
    updatedAt: Date
  }

  input TaskInput {
    title: String!
    description: String
    dueDate: Date
  }

  input TaskUpdateInput {
    title: String
    description: String
    status: Status
    dueDate: Date
  }

  type Query {
    tasks(status: Status): [Task!]!
    task(id: ID!): Task
  }

  type Mutation {
    createTask(input: TaskInput!): Task!
    updateTask(id: ID!, input: TaskUpdateInput!): Task!
    deleteTask(id: ID!): Boolean!
    changeStatus(id: ID!, status: Status!): Task!
  }
`);

