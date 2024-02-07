import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function InserisciCommento() {
  return (
    <Form className="my-5">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Commento</Form.Label>
        <Form.Control type="text" placeholder="Commento.." />
        <Form.Text className="text-muted">
          Fa il bravo che verrai letto dagli Epicoders nei secoli dei secoli
        </Form.Text>
      </Form.Group>
      <Button className='mb-3' variant="danger" type="submit">
        Invia
      </Button>
    </Form>
  );
}

export default InserisciCommento;