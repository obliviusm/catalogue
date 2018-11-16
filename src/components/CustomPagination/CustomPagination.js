import React from 'react';
import { Pagination } from 'reactstrap';

import PaginationButton from './PaginationButton'

const CustomPagination = ({ first, previous, current, next, last }) => (
  <Pagination>
    <PaginationButton page={first} >First</PaginationButton>
    <PaginationButton page={previous} >Previous</PaginationButton>
    <PaginationButton page={current} >{current}</PaginationButton>
    <PaginationButton page={next} >Next</PaginationButton>
    <PaginationButton page={last} >Last</PaginationButton>
  </Pagination>
)

export default CustomPagination;
