import Carousel from 'react-bootstrap/Carousel';

import "./Carousel.css"
import Button from 'react-bootstrap/Button';


const CarouselCom = () => {
  return (
     <>
     <div>
      
      <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.imgur.com/MlO6TcB.jpg"
          alt="First slide"  />
        <Carousel.Caption>
        <Button size='lg' active id='Btn'> <a href="/collections">Shop Now</a></Button>
         
        </Carousel.Caption> 
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.imgur.com/MlO6TcB.jpg"
          alt="First slide"  />
        <Carousel.Caption>
        <Button size='lg' active id='Btn'><a href="/collections">Shop Now</a></Button>
         
        </Carousel.Caption> 
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.imgur.com/MlO6TcB.jpg"
          alt="First slide"  />
        <Carousel.Caption>
        <Button size='lg' active id='Btn'><a href="/collections">Shop Now</a></Button>
         
        </Carousel.Caption> 
      </Carousel.Item>
    </Carousel>
    </div>
   

    </>
  )
}

export default CarouselCom;