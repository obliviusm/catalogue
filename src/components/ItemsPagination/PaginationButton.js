import React from 'react';
import { PaginationItem, PaginationLink } from 'reactstrap';
import { Link } from 'react-router-dom';

const PaginationButton = ({ page, children }) => (
  <PaginationItem>
      <Link to={page}>
        <PaginationLink>
        {children}
        </PaginationLink>
      </Link>
  </PaginationItem>
)

export default PaginationButton;
