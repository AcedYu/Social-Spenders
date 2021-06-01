import React from "react";
import API from "../utils/API.js";
import { Card, Button, Image, Table, Modal, Form } from "react-bootstrap";
import { useStoreContext } from "../utils/GlobalState";

const Editor = () => {
  const [state, dispatch] = useStoreContext();
  const [formObject, setFormObject] = React.useState({});
  const [show, setShow] = React.useState(false);
  const [show1, setShow1] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
    console.log(formObject);
  };

  const changeImage = (event) => {
    event.preventDefault();
    var imageData = document.getElementById('uploadcare').getAttribute('value');
  }

  return (
    <>
      <div className="col-9">
        <Card className="my-1">
          <div className="row">
            <div className="col-4 d-flex justify-content-center">
              <Image src={state.user.image} roundedCircle height="300" width="300" className="border ml-2 my-2" />
            </div>
            <Card.Body className="col-4 d-flex justify-content-center">
              <Table hover bordered className="my-auto">
                <tbody>
                  <tr>
                    <td>
                      <h3>Email:</h3>
                    </td>
                    <td colSpan="2">
                      <h3>{state.user.email}</h3>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h3>Username:</h3>
                    </td>
                    <td>
                      <h3>{state.user.name}</h3>
                    </td>
                    <td className="py-auto">
                      <Button size="md" variant="primary" onClick={handleShow1}>Change Username</Button>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </div>
          <div className="row">
            <div className="col-4 d-flex justify-content-center">
              <Button size="lg" variant="primary" className="mb-2" onClick={handleShow}>Change Profile Picture</Button>
            </div>
          </div>
        </Card>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload Photo Here</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center">
          <Form className="text-center" onSubmit={changeImage}>
            <Form.Group>
              <Form.Control type="hidden" role="uploadcare-uploader" name="my_file" id="uploadcare"/>
            </Form.Group>
            <Button variant="success" size="sm" type="submit">Save Profile Picture</Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={show1}
        onHide={handleClose1}
        backdrop="static"
        keyboard={false}
      >
      <Modal.Header closeButton>
          <Modal.Title>Input New Username:</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center">
          <Form className="text-center">
            <Form.Group>
              <Form.Control name="name" onChange={handleInputChange}/>
            </Form.Group>
            <Button variant="success" size="sm" type="submit">Save Username</Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose1}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Editor;