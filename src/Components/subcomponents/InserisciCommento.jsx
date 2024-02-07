import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

function InserisciCommento(props) {
  const [commento, setCommento] = useState('')
  const [rate, setRate] = useState(1)

  const bodyCommento = (commento) => {
    return { comment: `${commento}`, rate: rate, elementId: `${props.elementID}` } 
  }

  const handleInputChange = (e) => {
    setCommento(e.target.value)
  }

  const handleRateChange = (e) => {
    setRate(e.target.value) 
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (commento.length > 0) {
      try {
        console.log(JSON.stringify(bodyCommento(commento)))
        let response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/`, {
          method: 'POST',
          body: JSON.stringify(bodyCommento(commento)),
          headers: {
            'Content-type': 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFhMmY2MDE4N2U1YzAwMTgxNGM1ZjYiLCJpYXQiOjE3MDcxODA5NjUsImV4cCI6MTcwODM5MDU2NX0.m18iQGAjFbus5eW2GN5NBb-m4kxJt6NRqXwEYXveaVU',
          },
        })

        if (response.ok) {
          let propsCopia = [...props.currentCommentList]
          setCommento('')
          setRate(1)
          props.updateComments()
        } else {
          throw new Error('Qualcosa è andato storto')
        }
      } catch (error) {
        console.log("Errore invio commento", error)
      }
    }
  }

  return (
    <Form className="my-5" onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formCommento">
        <Form.Label>Commento:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Commento.."
          value={commento}
          onChange={handleInputChange}
        />
        <Form.Text className="text-muted">
          Fa il bravo che verrai letto dagli Epicoders nei secoli dei secoli
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Valutazione: {rate}</Form.Label>
        <Form.Control
          type="range"
          value={rate}
          onChange={handleRateChange}
          min="1"
          max="5"
        />
      </Form.Group>

      <Button className='mb-3' variant="danger" type="submit">
        Invia
      </Button>
    </Form>
  )
}

export default InserisciCommento
