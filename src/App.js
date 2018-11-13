import React, { Component } from 'react';
import ItemPage from './components/ItemPage.js'
import { Container, Row, Col } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <Container className='pt-3'>
        <ItemPage />
      </Container>
    );
  }
}

export default App;
