import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

const imgUrl = "https://images.pexels.com/photos/1549702/pexels-photo-1549702.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";

const ItemCard = ({item}) => (
  <Card>
    <CardImg src={imgUrl} />
    <CardBody>
      <CardTitle>{item.name}</CardTitle>
      <CardSubtitle>{item.price}</CardSubtitle>
      <CardText>{item.description}</CardText>
      <Button>Buy Me</Button>
    </CardBody>
  </Card>
)

export default ItemCard
