import {ApolloServer, gql} from 'apollo-server';

class TestClass {
    public printMessage() {
        console.log('message, dsfsfsdf');
    }
}

new TestClass().printMessage();

// The GraphQL schema
const typeDefs = gql`
    type Query {
        "A simple type for getting started!"
        hello: String
    }
`;

// A map of functions which return data for the schema.
const resolvers = {
    Query: {
        hello: () => 'world'
    }
};

const server: ApolloServer = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen().then(({url}) => {
    console.log(`🚀 Server ready at ${url}`);
});
