import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./TopNav.css";
import { useAppContext } from '../../context/AppContext';
import { Link } from 'react-router-dom';
// import ShoppingCart from '../shoppingCart/ShoppingCart';


const TopNavBar = ({ setShow }) => {
  const { cartNo: size } = useAppContext()

  return (
    <div>
      <Navbar expand="lg" id='navItem'>
        <Container className='navItem2' id='navitem'>

          <Nav >
            <Link to="/" id='myLink'>Home</Link>
            <Link to="/about" id='myLink'>About Us</Link>
            {/* <Link to="/SignUp" id='myLink'>My Account</Link> */}
            <Link to="/contact" id='myLink'>Contact Us</Link>
            <Link to="/blog" id='myLink'>Blog</Link>
          </Nav>
          <Navbar.Brand href="#home" id='brandName'><b>DAELAHCOLLECTIBLES</b></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          </Navbar.Collapse>
        </Container>
        <div className='brandCart' onClick={() => setShow(sizetrue)}>
          <Link to='/signUp'> <i className="fa fa-user" id='user'></i> </Link>
          <span>
            <Link to='/shopping'><i className="fa fa-shopping-cart" id='brandCart2' onClick={() => setShow(false)} ></i></Link>
          </span>
          <span id='size'>{size}</span>
        </div>

      </Navbar>

    </div>

  )
}

export default TopNavBar;