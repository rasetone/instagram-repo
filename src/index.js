import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import CreatePost from './components/CreatePost'
import CreateUser from './components/CreateUser'
import CreateUserIg from './components/CreateUserIg'
import LoginUser from './components/LoginUser'
import { Router, Route, hashHistory } from 'react-router'
import { ApolloClient, ApolloProvider, createNetworkInterface } from 'react-apollo'
import 'tachyons'

const networkInterface = createNetworkInterface({ 
  uri: 'https://api.graph.cool/simple/v1/cj5275h35xjy40196zeuwze4o'
 })

networkInterface.use([{
  applyMiddleware (req, next) {
    if (!req.options.headers) {
      req.options.headers = {}
    }

    // get the authentication token from local storage if it exists
    if (localStorage.getItem('graphcoolToken')) {
      req.options.headers.authorization = `Bearer ${localStorage.getItem('graphcoolToken')}`
    }
    next()
  },
}])

const client = new ApolloClient({ networkInterface })

ReactDOM.render((
  <ApolloProvider client={client}>
    <Router history={hashHistory}>
      <Route path='/' component={CreateUserIg} />
      <Route path='create' component={CreatePost} />
      <Route path='login' component={LoginUser} />
      <Route path='signup' component={CreateUser} />
    </Router>
  </ApolloProvider>
  ),
  document.getElementById('root')
)
