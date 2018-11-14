import React, { Component } from 'react';
import api from '../services/api';
import CategoriesList from './CategoriesList'
import ItemsSection from './ItemsSection'

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
        error: result.error
      });
    }
  }

  render() {
    const { error, isLoaded, categories } = this.state;
    const selectedCategoryId = this.props.match.params.categoryId;
    if (error) {
      return <div>Error: {error}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <h3>Select category</h3>
          <CategoriesList categories={categories} selectedCategoryId={selectedCategoryId} />
          <h3>Items for selected category</h3>
          {selectedCategoryId
            ?  <ItemsSection categoryId={selectedCategoryId} />
            : 'Category was not selected' }
        </div>
      )
    }
  }
}

export default CategoryPage;
