import { gql } from 'apollo-server-express';
import GraphQLDateTime from 'graphql-type-datetime';
import { Tweet } from "./models/Post";

export const typeDefs = gql`
    scalar DateTime

    type Query {
        tweets: [Tweet]
    }

    type Mutation {
        createTweet(username: String!, message: String!, date: DateTime!): Tweet!
    }

    type Tweet {
        id: ID!
        username: String!
        message: String!
        date: DateTime
    }
`;


export const resolvers = {
    DateTime: GraphQLDateTime,
    Query: {
        tweets: () => Tweet.find()
    },
    Mutation: {
        createTweet: async (_, {username, message, date}) => {    //why first argument is blank
            const tweeter = new Tweet({ username, message, date });
            await tweeter.save();
            return tweeter;
        }
    }
};