import React from "react";
import API from "../utils/API";
import { Modal, Button } from "react-bootstrap";

const Landing = () => {
  const [formObject, setFormObject] = React.useState({});
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  };

  function handleSubmit(event) {
    event.preventDefault();
    API.login(formObject)
      .then(res => {
        document.location.replace('/home');
      })
      .catch(err => handleShow())
  }

  return (
    <>
      <div className="h-100 align-items-center container">
        <div className="row align-items-center g-lg-5 py-5 h-100">
          <div className="col-lg-9">
            <img src="./img/socialspendersjumbo.png" className="d-block mx-lg-auto img-fluid" alt="Social Spenders" loading="lazy" />
          </div>
          <div className="col-md-10 col-lg-3">
            <form onSubmit={handleSubmit}>
              <div className="form-floating mb-3">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="name@example.com"
                  name="email"
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-floating mb-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  name="password"
                  onChange={handleInputChange}
                />
              </div>
              <button
                className="w-100 btn btn-lg btn-primary"
                type="submit"
              >
                Sign In
              </button>
              <hr className="my-4" />
              <small className="text-muted">New to the site? Create a new account <a href="/login">here!</a></small>
            </form>
          </div>
        </div>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Login Failure</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Double check your email and password for errors.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            ok
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Landing;