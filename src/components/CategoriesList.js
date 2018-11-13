import React from 'react';
import { Button, ButtonGroup  } from 'reactstrap';

const CategoriesList = ({categories}) => (
  <div>
    {categories.map(category => (
      <Button key={category.id} className='m-1'>
        {category.name}
      </Button>
    ))}
  </div>
)

export default CategoriesList
