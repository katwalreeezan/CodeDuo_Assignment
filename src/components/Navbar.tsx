import { useState } from "react";
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBIcon,
  MDBNavbarNav,

  MDBNavbarToggler,
  MDBCollapse,
} from "mdb-react-ui-kit";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  return (
    <div>
      <MDBNavbar expand="lg"  bgColor="primary">
        <MDBContainer >
          <MDBNavbarBrand className="text-white" href='/'>SPELL LISTING</MDBNavbarBrand>
          <MDBNavbarToggler
          className="text-dark"
            type="button"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setOpenNav(!openNav)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>
          <MDBCollapse className="ms-auto" navbar open={openNav}>
            <MDBNavbarNav className="text-white" >
            
             
           
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </div>
  );
};

export default Navbar;
