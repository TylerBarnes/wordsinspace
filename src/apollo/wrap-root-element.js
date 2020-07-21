import React from 'react';
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/react-hooks';
import fetch from "isomorphic-fetch"

const httpLink = createHttpLink({
    uri: 'http://localhost:8888/shannon/graphql',
});

const client = new ApolloClient({
    fetch,
    cache: new InMemoryCache(),
});

export const wrapRootElement = ({ element }) => (
  <ApolloProvider client={client}>{element}</ApolloProvider>
);
