import React  from 'react'

import {Navbar,Nav} from 'react-bootstrap'
function Navbarui () {

    return(

  <Navbar bg="dark" variant="dark" style={{marginBottom:'5%'}}>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/details">Display Results</Nav.Link>
      </Nav>
  
  </Navbar>

    )
}

export default Navbarui