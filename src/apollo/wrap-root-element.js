import React from 'react';
import { ApolloProvider, ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import fetch from "isomorphic-fetch"

const httpLink =  createHttpLink({ uri: "https://testingvi.wordsinspace.net/graphql" });

const client = new ApolloClient({
    fetch,
    link: httpLink,
    cache: new InMemoryCache(),
});

export const wrapRootElement = ({ element }) => (
  <ApolloProvider client={client}>{element}</ApolloProvider>
);
