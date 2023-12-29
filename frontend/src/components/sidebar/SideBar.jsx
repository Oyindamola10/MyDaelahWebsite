import "./SideBar.css";
import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Category from "./category/Category";
import Price from "./price/Price";
import Colors from "./colors/Colors";
import { HamburgerIcon } from "../../assets/GlobalIcons";

const SideBar = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div>
        <button onClick={handleShow} id="sidebarbtn">
          <HamburgerIcon />
        </button>

        <Offcanvas show={show} onHide={handleClose} className="sidebar">
          <Offcanvas.Header closeButton></Offcanvas.Header>
          <Offcanvas.Body>
            <Category></Category>
            <Price></Price>
            <Colors></Colors>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </>
  );
};

export default SideBar;
