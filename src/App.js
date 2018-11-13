import React, { Component } from 'react';
import CategoryPage from './components/CategoryPage.js'
import { Container, Row, Col } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <Container className='pt-3'>
        <CategoryPage />
      </Container>
    );
  }
}

export default App;
