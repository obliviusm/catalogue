import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ItemPage from './components/ItemPage.js'
import CategoryPage from './components/CategoryPage.js'

class App extends Component {
  render() {
    return (
      <Router>
        <Container className='pt-3'>
          <Switch>
            <Route path="/items" exact component={ItemPage} />
            <Route path="/:categoryId" exact component={CategoryPage} />
            <Route render={() => 'Not Found'} />
          </Switch>
        </Container>
      </Router>
    );
  }
}

export default App;
