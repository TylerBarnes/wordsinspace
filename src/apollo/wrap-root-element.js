import React from 'react';
import { ApolloProvider, ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import fetch from "isomorphic-fetch"

const httpLink = createHttpLink({
    uri: process.env.NODE_ENV === `development`
        ? `https://importiv.wordsinspace.net/graphql` //`http://localhost:8888/shannon11/graphql`
        : `https://importiv.wordsinspace.net/graphql`
});

const client = new ApolloClient({
    fetch,
    link: httpLink,
    cache: new InMemoryCache(),
});

export const wrapRootElement = ({ element }) => (
  <ApolloProvider client={client}>{element}</ApolloProvider>
);
