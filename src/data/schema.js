import { resolvers } from './resolvers';
import { makeExecutableSchema } from 'graphql-tools';

const typeDefs = `
    type Contact {
        id: ID
        firstName: String
        lastName: String
        email: String
        company: String
        phone: Int
    }

    type Query {
        getContacts: [Contact]
        getContact(id: ID): Contact
    }

    input ContactInput {
        id: ID
        firstName: String
        lastName: String
        email: String
        company: String
        phone: Int
    }

    type Mutation {
        createContact(input: ContactInput): Contact
        updateContact(input: ContactInput): Contact
        deleteContact(id: ID): String
    }
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

export { schema };
