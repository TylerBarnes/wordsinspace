import React, {useState, useEffect} from 'react';
import { ApolloProvider, ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import fetch from "isomorphic-fetch"

const httpLink = createHttpLink({
    uri: `https://local.wordsinspace.net/graphql` //http://localhost:8888/test/graphql 
});

const client = new ApolloClient({
    fetch,
    link: httpLink,
    cache: new InMemoryCache(),
});

function ClientOnly({ children, ...delegated }) {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return (
    <div {...delegated}>
      {children}
    </div>
  );
}

export const wrapPageElement = ({ element }) => (
	<ClientOnly>
	  <ApolloProvider client={client}>{element}</ApolloProvider>
  </ClientOnly>
);
