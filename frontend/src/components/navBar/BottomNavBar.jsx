import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import SideBar from '../sidebar/SideBar';
// import useState from 'react'
import Navbar from 'react-bootstrap/Navbar';
import "./BottomNav.css"
import Search from '../search/Search';
import { Link } from 'react-router-dom';

const BottomNavBar = () => {
  // const [addItem, setAddItem] =useState({
  //   product_id
  //  });

  //  const handleAddItem = async(e) => {
  //   e.preventDefault();

  //   await fetch("http://localhost:8000/api/cart", {
  //     method: "POST",
  //     headers: {
  //        "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(addItem),
  //   });
  // }

  return (
    <div style={{
      backgroundColor: "#f0da98",
      padding: "0.7em 0px"
    }}>

      <Navbar id="navItem3 ">
        <SideBar></SideBar>
        <Container>
          <Nav className="me-auto hideThis">
            <Link to="/men">Men</Link>
            <Link to="/women">Women</Link>
            <Link to="/accessories">Accessories</Link>
            <Link to="/collections">Collections</Link>
            <Link to="/new arrivals">New Arrivals</Link>
          </Nav>
          <Search />
        </Container>
      </Navbar>
    </div>

  )
}

export default BottomNavBar;