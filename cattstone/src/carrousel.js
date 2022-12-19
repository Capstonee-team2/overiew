import Carousel from 'react-bootstrap/Carousel';

function Carrousel() {
  return (
    <Carousel>
 
        <Carousel.Item>
        <img
          className="d-block w-50"
          src="https://www.shutterstock.com/image-photo/man-hands-holding-global-network-260nw-1801568002.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrousel;