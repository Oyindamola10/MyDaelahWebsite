
import ProductList from '../productCard/ProductList';
import CarouselCom from './Carousel'
// import Button from 'react-bootstrap/Button';
import './Home.css'
// import ShopNowButton from '../ShopNowButton';

const Home = ({handleClick}) => {
  
  return (
    <>
      <div className='myHome'>
          <CarouselCom/>
          <div className='cardImg2'>
            <img src="https://i.imgur.com/o94hbEM.png" alt="watchImg1" id='watch1' />
              <div id='Btn2'>
              <button id='btn3'><a href="/men">Shop Now</a></button>
              </div>
            <img src="https://i.imgur.com/EqQg1IH.jpg" alt="" id='watch2'/>
              <div id='Btn2'>
              <button id='btn3'><a href="/women">Shop Now</a></button>
               </div>   
               <br />
              
            </div>
            <h1 id='heading1'>A Timepiece For All Occassions</h1>
          
           <ProductList  handleClick={handleClick}/>
        </div>
    </>
  )
}

export default Home; 