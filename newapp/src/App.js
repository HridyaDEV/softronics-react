import { Navbar, Nav, Container, Row, Col, Button ,Image, Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'; 
import Card1 from './components/Card1';
import Card2 from './components/Card2';
 
function App() {
  return (
    <>
      <Navbar expand="lg" className="navbar">
        <Container className='d-flex '>
          <Navbar.Brand href="#home">Your Logo</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#portfolio">Portfolio</Nav.Link> 
            <Nav.Link href="#about">About</Nav.Link> 
            <Nav.Link href="#contact">Contact</Nav.Link> 
            <Nav.Link href="#sign-up">Sign Up</Nav.Link> 
          </Nav>
        </Container>
      </Navbar>

      <div className="Second position-relative">
  <div className="text-center text-light">
    <h1>Good Design is Good Business</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit<br />
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
    </p>
    <Button variant="warning" size="lg" className="mt-5">Learn More</Button>
  </div>
</div>


<div className="services-section text-center ">

  <div className="our-service text-white d-flex justify-content-center align-items-center bg-primary position-relative translate-middle start-50 top-50 ">
    <h2 >Our Services</h2>
  </div> 

 
</div>


<div className="d-flex flex-wrap justify-content-center gap-5 mt-4">
      <Card1 
        image="/feature3.jpg" 
        title="Web Design" 
        description="It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages." 
      />
      <Card1 
        image="/feature3.jpg" 
        title="Search Optimization" 
        description="It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages." 
      />
      <Card1 
        image="/feature3.jpg" 
        title="Online Shop" 
        description="It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages." 
      />
      <Card1 
        image="/feature3.jpg" 
        title="Social Media" 
        description="It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages." 
      />
    </div>
      

       <div className="portfolio-section text-white py-5 bg-dark ">
        <Container>
          <div className='d-flex justify-content-evenly gap-5 ms-auto'>
          <h2 className="text-center text-danger text-left">Our Portfolio Awesome</h2>
          <Button variant="primary">More Works</Button>

          </div>
          
          <div className='d-flex justify-content-center align-items-center mt-5 gap-5'>
         
          <Card2
              image= "/feature3.jpg" 
              title= "Title 1"
              description = "This is description for Title 1"
          />
          <Card2
          image= "/feature3.jpg" 
          title= "Title 2"
          description = "This is description for Title 2"

          />
            <Card2
          image= "/feature3.jpg" 
          title= "Title 3"
          description = "This is description for Title 3"

          />
          </div>

          </Container>
          </div>
         
          
      
      
      




   
    </>
  );
}

export default App;
