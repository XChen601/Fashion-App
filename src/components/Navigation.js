import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./img/logo.png"
import "./Navigation.css";
import {
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

function Navigation(args) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar {...args} color='dark' light='false' dark='true' full='true' expand='xl' container='fluid' fixed='top' id='nav-bar'>
      <NavbarBrand href="/">
        <img
            alt="logo"
            src={logo}
        />
      </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/" style={{color: '#ffc008', fontSize: "1.5rem"}}>Home</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret style={{color: '#ffc008', fontSize: "1.5rem"}}>
                Team
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Xing Chen 🙃</DropdownItem>
                <DropdownItem>Bryan Rivera 💯</DropdownItem>
                <DropdownItem>Tenzing Nyima 😎</DropdownItem>
                <DropdownItem>Salif Tankoano 🤔</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <div>
            <Button
                color="warning"
                size="lg"
            >
                Sign In
            </Button>
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;