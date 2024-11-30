const { ApolloServer, gql } = require('apollo-server');

// Definir el esquema GraphQL
const typeDefs = gql`
    type Query {
        hello: String
    }
`;

// Resolver para las consultas
const resolvers = {
    Query: {
        hello: () => '¡Hola mundo desde GraphQL!',
    },
};

// Configuración del servidor Apollo
const server = new ApolloServer({ typeDefs, resolvers });

// Inicia el servidor
server.listen().then(({ url }) => {
    console.log(`🚀 Servidor listo en ${url}`);
});
