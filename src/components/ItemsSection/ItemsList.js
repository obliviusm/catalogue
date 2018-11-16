import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';


const ItemsList = ({items}) => (
  <div>
    {items.map(item => (
      <Link key={item.id} to={`/items/${item.id}`}>
        <Button className='m-1' outline>
          {item.name}
        </Button>
      </Link>
    ))}
  </div>
)

export default ItemsList
