import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "./styles/styles.scss";

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: import.meta.env.API_URL,
  cache: new InMemoryCache(),
});


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
  </React.StrictMode>
)
