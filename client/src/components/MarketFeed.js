import React from "react";
import API from "../utils/API";
import { Modal, Button } from "react-bootstrap";

import MarketEntry from "./MarketEntry.js";

const MarketFeed = () => {
  const [items, setItems] = React.useState([]);
  const [formObject, setFormObject] = React.useState({});
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  };

  const handleSubmit = (event) => {
    var query = formObject.query;
    if (!query) {
      handleShow();
    } else {
      API.getAmazon(query)
      .then(res => {
        setItems(res.data.docs)
      })
      .catch(err => handleShow())
    }
  }

  return (
    <>
      <div className="col-9">
        <div className="input-group mt-1 mb-2">
          <input
            type="text"
            className="form-control"
            name="query"
            placeholder="Search Amazon"
            onChange={handleInputChange}
          />
          <button
            className="btn btn-primary"
            type="button"
            id="button-addon2"
            onClick={handleSubmit}
          >
            Search
          </button>
        </div>
        <div className="card-group row-cols-2">
          {
            items.map((item) => (
              <MarketEntry
              name={item.product_title}
              price={item.app_sale_price}
              rating={item.evaluate_rate}
              image={item.product_main_image_url}
              />
            ))
          }
        </div>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          An Error has occured with the Amazon API.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            ok
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default MarketFeed;