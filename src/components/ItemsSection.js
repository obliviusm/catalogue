import React, { Component } from 'react';

import api from '../services/api';
import ItemsList from './ItemsList';

class ItemsSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() {
    this.fetchData()
  }

  componentDidUpdate(prevProps) {
    if (this.props.categoryId !== prevProps.categoryId) {
      this.fetchData();
    }
  }

  async fetchData() {
    const result = await api.getCategoryItems(this.props.categoryId)
    if (result.ok) {
      this.setState({
        isLoaded: true,
        items: result.items,
      });
    } else {
      this.setState({
        isLoaded: true,
        error: result.error
      });
    }
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ItemsList items={items} />
      )
    }
  }
}

export default ItemsSection;
