import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import 'assets/styles/main.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

const client = new ApolloClient({
  url: 'https://onebigappback.herokuapp.com/graphql'
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
  , document.getElementById('root'))
registerServiceWorker()
