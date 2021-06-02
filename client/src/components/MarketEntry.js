import React from "react";
import { Card, Button, Image } from "react-bootstrap";
import API from "../utils/API";

const MarketEntry = () => {
  return (
    <Card>
      <Card.Img variant="top" src="" alt="PICTURE OF PRODUCT" />
      <Card.Body>
        <Card.Title>ITEM TITLE</Card.Title>
        <Card.Text>
          PRICE
          <br/>
          RATING
        </Card.Text>
        <Button variant="primary">STRIPE MODAL BUTTON HERE</Button>
      </Card.Body>
    </Card>
  )
}

export default MarketEntry;