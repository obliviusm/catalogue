import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

import api from '../../services/api';
import ItemCard from './ItemCard';

class ItemPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      item: null,
    };
  }

  async componentDidMount() {
    const result = await api.getItem(this.props.match.params.itemId)
    if (result.ok) {
      this.setState({
        isLoaded: true,
        item: result.item,
      });
    } else {
      this.setState({
        isLoaded: true,
        error: result.error
      });
    }
  }

  render() {
    const { error, isLoaded, item } = this.state;
    if (error) {
      return <div>Error: {error}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <Row>
          <Col md="3" />
          <Col md="6">
            <ItemCard item={item} />
          </Col>
          <Col md="3" />
        </Row>
      )
    }
  }
}

export default ItemPage;
