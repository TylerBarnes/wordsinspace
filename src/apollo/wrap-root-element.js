import React from 'react';
import { ApolloProvider } from 'react-apollo'
import { ApolloProvider as ApolloHooksProvider } from '@apollo/react-hooks'
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import fetch from "isomorphic-fetch"

const httpLink = createHttpLink({
    uri: 'http://localhost:8888/shannon/graphql',
});

const client = new ApolloClient({
    fetch,
    link: httpLink,
    cache: new InMemoryCache(),
});

console.log(client)

export const wrapRootElement = ({ element }) => (
  <ApolloProvider client={client}>
	  <ApolloHooksProvider client={client}>
	   {element}
	  </ApolloHooksProvider>
</ApolloProvider>
);