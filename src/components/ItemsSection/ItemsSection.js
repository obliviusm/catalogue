import React, { Component } from 'react';

import api from '../../services/api';
import ItemsList from './ItemsList';
import CustomPagination from '../CustomPagination';

class ItemsSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      items: [],
      pages: null
    };
  }

  componentDidMount() {
    this.fetchData()
  }

  componentDidUpdate(prevProps) {
    if (this.props.categoryId !== prevProps.categoryId
      || this.props.currentPage !== prevProps.currentPage) {
      this.fetchData();
    }
  }

  async fetchData() {
    const { categoryId, currentPage } = this.props;
    const result = await api.getCategoryItems({ categoryId, page: currentPage })
    if (result.ok) {
      this.setState({
        isLoaded: true,
        items: result.items,
        pages: result.pages,
      });
    } else {
      this.setState({
        isLoaded: true,
        error: result.error
      });
    }
  }

  buildPageLink = (page) => page
    ? `/${this.props.categoryId}/${page}`
    : `/${this.props.categoryId}/${this.props.currentPage}`

  render() {
    const { error, isLoaded, items, pages } = this.state;
    const { currentPage } = this.props;
    if (error) {
      return <div>Error: {error}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <ItemsList items={items} />
          <div class="d-flex justify-content-center pt-3">
            <CustomPagination
              first={this.buildPageLink(pages.first)}
              previous={this.buildPageLink(pages.previous)}
              current={currentPage}
              next={this.buildPageLink(pages.next)}
              last={this.buildPageLink(pages.last)}
            />
          </div>
        </div>
      )
    }
  }
}

export default ItemsSection;
