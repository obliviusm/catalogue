import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import ItemPage from './components/ItemPage.js'
import CategoryPage from './components/CategoryPage.js'

class App extends Component {
  render() {
    return (
      <Router>
        <Container className='p-3'>
          <Switch>
            <Route path="/items/:itemId" exact component={ItemPage} />
            <Route path="/" exact component={CategoryPage} />
            <Redirect from='/:categoryId' to='/:categoryId/1' exact />
            <Route path="/:categoryId/:currentPage" component={CategoryPage} />
            <Route render={() => 'Not Found'} />
          </Switch>
        </Container>
      </Router>
    );
  }
}

export default App;
