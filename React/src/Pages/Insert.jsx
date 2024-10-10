import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Insert=()=>{
    return(
        <>
          <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Roll no</Form.Label>
        <Form.Control type="text" placeholder="Enter roll number" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>name</Form.Label>
        <Form.Control type="text" placeholder="enter name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>city</Form.Label>
        <Form.Control type="text" placeholder="Enter city" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>fees</Form.Label>
        <Form.Control type="text" placeholder="Enter fees" />
        
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        </>
    )
}

export default Insert;