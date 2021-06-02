import React from "react";
import { Card, Button, Image } from "react-bootstrap";
import API from "../utils/API";
import StripeCheckout from "react-stripe-checkout";


const MarketEntry = ({name, price, rating, image}) => {
  const handleToken = (token) => {
    var databody = {
      id: token.id,
      email: token.email,
      amount: price,
      name: name
    }
    API.stripeCheckout(databody)
      .then(res => {
        API.postPost({
          content: `I just purchased the ${name} for $${price}!`
        })
        .then().catch(err => console.log(err));
      })
      .catch(err => alert(err + "\n There was a problem with the Stripe API"))
  }
  return (
    <div className="col my-1">
      <Card className="h-100">
        <Card.Img variant="top" src={image} alt="PICTURE OF PRODUCT" />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
          ${price}
          <br />
          {rating}
        </Card.Text>
          <StripeCheckout
          stripeKey="pk_test_51IpPUyEiR4urfrqr1N5JWvxSEbFCJsHFwHSXSEkMcmIikS9msjeHhqM6kN2zqwuBdyhZtYiGrw589d2zxpG3Cn0M00X2hGrh6O"
          token={handleToken}
          amount={price*100}
          name={name}
          />
        </Card.Body>
      </Card>
    </div>
  )
}

export default MarketEntry;