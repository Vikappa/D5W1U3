import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function ModalSignIn(props) {
  const handleClose = () => props.setShowModal(false)
  const [newUserName, setNewUserName] = useState('')

  const registrazione = (username) => {
    setNewUserName(username)
    props.setCurrentUserName(username)
    console.log(props)
  }

  return (
    <>
      <Modal show={props.showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Registrazione</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Inserisci Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Username"
                autoFocus
                value={newUserName}
                onChange={(e) => registrazione(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalSignIn;