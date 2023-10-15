const typeDefs = `

  # Object types

  type User {
    _id: ID
    username: String!
    email: String!
  }

  type Message {
    _id: ID!
    messageText: String!
    messageAuthor: User!
    createdAt: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Lesson {
    _id: ID!
    name: String!
    iconUrl: String!
    problems: [Problem]!
    unit: String!
  }

  type Problem {
    _id: ID!
    name: String!
    lessonID: ID!
    problemType: String!
    question: String!
    answers: [Answer]
    correctAnswer: String!
  }

  type Answer {
    answerID: ID!
    userID: String
    lessonID: String!
    body: String
    isValidated: Boolean!
  }

 # Input types

  input answerInput {
    userID: String
    lessonID: String!
    body: String
  }

  input userInput {
    username: String!
    email: String!
    password: String!
  }

  input messageInput {
    messageText: String!
    messageAuthor: String!
  }

  input lessonInput {
    lessonID: ID!
    lessonAnswerData: String!
  }

  # Queries & Mutations

  type Query {
    me: User
    lesson(id: ID!): Lesson
    problem(id: ID!): Problem
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(userData: userInput!): Auth
    problemValidate(answerData: answerInput!): Answer
    addMessage(messageData: messageInput): Message
  }

`;

module.exports = typeDefs;