import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Form,Container,Row,Col,InputGroup,Card} from 'react-bootstrap'
import Axios from 'axios'
function Formui() {

  const [validated,setValidated]=useState(false);
  const [email,setEmail]=useState('')
  const [name,setName]=useState('')
  const [city,setCity]=useState('')
  const [status,setStatus]=useState('')
  const [zip,setZip]=useState('')
  const [gender,setGender]=useState('')
  
 
  const handleSubmit = async (event) =>{
    const form = event.currentTarget;
    const body={
     email:email,
      name:name,
      city:city,
      status:status,
      zip:zip,
      gender:gender

    }
    try{
    setValidated(true);
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      
    
      
    }
     else {
   
    const res=await Axios.post('http://localhost:4000/submitData',body)

     }
    }
    catch(err){
      console.log(err)
    }
  }


  return (
    
    
    <Container>
      <Row>
        <Col lg={4}></Col>
        <Col lg={4}>
          <Card style={{width:'110%'}} >
          <Card.Header>Please Provide  Your Details in the Form Below</Card.Header>
          <Card.Body style={{padding:'10%'}}>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Row>
        <Form.Group  controlId="validationCustom01">
          <Form.Label>Email</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="First name"
         
         onChange={(e)=>setEmail(e.target.value)}
      

          />
          <Form.Control.Feedback type='invalid'>Please provide email correctly</Form.Control.Feedback>
        </Form.Group>
        <Form.Group  controlId="validationCustom02">
          <Form.Label>Full name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Full name"
            onChange={(e)=>setName(e.target.value)}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      
      </Form.Row>
      <Form.Row>
        <Form.Group  controlId="validationCustom03">
          <Form.Label>City</Form.Label>
          <Form.Control
            onChange={(e)=>setCity(e.target.value)} 
           type="text" placeholder="City" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group  controlId="validationCustom04">
          <Form.Label>State</Form.Label>
          <Form.Control type="text" placeholder="State" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="validationCustom05">
          <Form.Label>Zip</Form.Label>
          <Form.Control 
           type
            onChange={(e)=>setZip(e.target.value)}
          type="text" placeholder="Zip" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid zip.
          </Form.Control.Feedback>
        </Form.Group>
      </Form.Row>
      <Form.Group>
      <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Select Gender </Form.Label>
    <Form.Control
    
    onChange={(e)=>setGender(e.target.value)}
    as="select"
required
    >
        <option
      value=''>Choose gender</option>
      <option
      value='Male'>Male</option>
      <option
      value='Female'>Female</option>
      
     
    </Form.Control>
  </Form.Group>
     <Form.Group>
      <Form.Label>Select status</Form.Label>
      
      <Form.Check
      required
          type="radio"
          label="incoming"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
          value='incoming'
          onChange={(e)=>setStatus(e.target.value)}
        />
        
        <Form.Check
        required
          type="radio"
          label="outgoing"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
          value='outgoing'
          onChange={(e)=>setStatus(e.target.value)}
          feedback="You must agree before submitting."
        />
        
          </Form.Group>
        
      </Form.Group>
      <Button type="submit">Submit form</Button>
    </Form>   
    </Card.Body>
    </Card>
</Col>
<Col lg={4}></Col>
</Row>

</Container>

  );
}

export default Formui;
