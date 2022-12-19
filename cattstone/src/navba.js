import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';




function Navba() {
  return (
    <>
    <Navbar style={{backgroundColor:'grey'}}  expand="lg">
      <Container fluid>
        <Navbar.Brand href="#"> <p className='logoSize'>🧀 Manchego</p></Navbar.Brand>
          <Form className="d-flex">
          <div className='navigation navigation2' style={{display:'flex', alignItems:'center' }}>
            <Form.Control
              type="search"
              className="m-2"
              aria-label="Search" 
              placeholder="Enter Product Id " />
              
          
            <svg className='productIdSearchButton' id="Layer_1" xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 20 20" width="20" height="20"><g id="icon_x5F_function">
            <path id="icn_x5F_search_x5F_forms_1_" d="M18.7 17.3l-5.1-5.1C14.5 11 15 9.6 15 8c0-3.9-3.1-7-7-7S1 4.1 1 8s3.1 7 7 7c1.6 0 3-.5 4.2-1.4l5.1 5.1c.2.2.5.3.7.3.3 0 .5-.1.7-.3.4-.4.4-1 0-1.4M3 8c0-2.8 2.2-5 5-5s5 2.2 5 5-2.2 5-5 5-5-2.2-5-5"/></g></svg>
            <span className='toggleDarkMode' >🌓</span> 
          </div>
          
          </Form>
          
        
      </Container>
    </Navbar>
    <div className='announce' style={{display:'flex', justifyContent:'center'}}>
          <p><i>SIDE-WIDE ANNOUNCEMENT MESSAGE!</i> - SALE / DISCOUNT <b>OFFER</b> - <u>NEW PRODUCT HIGHLIGHT</u></p>
        </div>
    </>
  );
}

export default Navba;
