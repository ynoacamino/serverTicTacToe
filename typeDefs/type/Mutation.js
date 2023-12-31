const Mutation = `
  type Mutation {
    played(
      play: Int!
      gameId: String!
    ): Table

    resetTable(
      gameId: String!
    ): Table

    register(
      username: String!
      password: String!
    ): Token

    login(
      username: String!
      password: String!
    ): Token

    createGame: Token
    joinGame(
      gameId: String!  
    ): Token
  }
`;

export default Mutation;
