import React, { Component } from 'react';
import {Route, Switch} from "react-router-dom";
import './App.css';
import Nav from './components/Nav';
import Links from './components/Links';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

class App extends Component {
  state = {
    response: '',
    post: '',
    responseToPost: '',
  };

  componentDidMount() {
    /* this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err)); */
  }

/*   callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch('/api/world', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ post: this.state.post }),
    });
    const body = await response.text();
    this.setState({ responseToPost: body });
  }; */

  render() {
    return (
      <div className="App">
        <Nav />
        <Route render={({location}) => (
          <TransitionGroup>
            <CSSTransition key={location.key} timeout={0} classNames="fade">
              <Switch location={location}>
              <Links exact path="/links" component={Links} auth={this.state.auth} handleAuth={this.handleAuth} />
              {/* <Route exact path="/" render={(props) => <Login {...props} handleAuth={this.handleAuth}/>} />
              <Route exact path="/register" component={Register} />
              <ProtectedRoute exact path="/links" component={Links} auth={this.state.auth} handleAuth={this.handleAuth}/>
              <ProtectedRoute exact path="/addlink" component={AddLink} auth={this.state.auth} handleAuth={this.handleAuth}/>
              <ProtectedRoute exact path="/profile" component={Profile} auth={this.state.auth} handleAuth={this.handleAuth}/>
              <Route component={NotFound} /> */}
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )} />
      </div>
    );
  }
}

export default App;