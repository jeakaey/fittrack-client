import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: 'https://fittrack-server-fmbz.onrender.com/graphql',
  cache: new InMemoryCache()
});

export default client;
