import React from "react";
import API from "../utils/API.js";
import { Card, Button, Image, Table } from "react-bootstrap";
import { useStoreContext } from "../utils/GlobalState";

const Editor = () => {
  const [state, dispatch] = useStoreContext();
  return (
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
                    <Button size="md" variant="primary">Change Username</Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Card.Body>
        </div>
        <div className="row">
          <div className="col-4 d-flex justify-content-center">
            <Button size="lg" variant="primary" className="mb-2">Change Profile Picture</Button>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default Editor;