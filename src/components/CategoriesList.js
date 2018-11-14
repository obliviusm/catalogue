import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';


const buttonColor = (id, selectedId) => id === selectedId ? 'primary' : 'secondary'

const CategoriesList = ({categories, selectedCategoryId}) => (
  <div>
    {categories.map(category => (
      <Link key={category.id} to={`/${category.id}`}>
        <Button
          className='m-1'
          color={buttonColor(category.id, selectedCategoryId)}
        >
          {category.name}
        </Button>
      </Link>
    ))}
  </div>
)

export default CategoriesList
