import React from "react";
import API from "../utils/API";
import { Modal, Button } from "react-bootstrap";

const Login = () => {
  const [formObject, setFormObject] = React.useState({});
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  };

  function handleSignup(event) {
    event.preventDefault();
    API.signup(formObject)
      .then(res => {
        document.location.replace('/home');
      })
      .catch(err => handleShow())
  }

  function handleLogin(event) {
    event.preventDefault();
    API.login(formObject)
      .then(res => {
        document.location.replace('/home');
      })
      .catch(err => handleShow())
  }

  return (
    <>
      <div className="h-100 container">
        <div class="row row-1">
          <div class="col-sm-6 mt-5">
            <div class="card py-3 px-3">
              <div class="card-body">
                <form onSubmit={handleLogin}>
                  <h5 class="mb-5">Sign In</h5>
                  <div class="mb-3">
                    <label class="form-label">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="name@example.com"
                      name="email"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      name="password"
                      onChange={handleInputChange}
                    />
                    <button type="button" class="btn btn-primary mt-3" type="submit">Sign In</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="col-sm-6 mt-5">
            <div id="card-sign-up" class="card py-3 px-3">
              <div class="card-body">
                <form onSubmit={handleSignup}>
                  <h5 class="mb-5">Sign Up</h5>
                  <div class="mb-3">
                    <label class="form-label">Name</label>
                    <input
                      type="name"
                      class="form-control"
                      placeholder="Your Username Here"
                      name="name"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="name@example.com"
                      name="email"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      name="password"
                      onChange={handleInputChange}
                    />
                    <button type="button" class="btn btn-primary mt-3" type="submit">Sign Up</button>
                  </div>
                </form>

              </div>
            </div>
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

export default Login;