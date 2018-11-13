import React, { Component } from 'react';
import api from '../services/api';
import CategoriesList from './CategoriesList'

class CategoryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      categories: [],
    };
  }

  async componentDidMount() {
    const result = await api.getCategories()
    if (result.ok) {
      this.setState({
        isLoaded: true,
        categories: result.categories,
      });
    } else {
      this.setState({
        isLoaded: true,
        error: 'Please refresh'
      });
    }
  }

  categoryId = () => this.props.match.params.categoryId

  render() {
    const { error, isLoaded, categories } = this.state;
    if (error) {
      return <div>Error: {error}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <h3>Select Category</h3>
          <CategoriesList categories={categories} selectedCategoryId={this.categoryId()} />
        </div>
      )
    }
  }
}

export default CategoryPage;
