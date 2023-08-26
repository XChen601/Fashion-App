import React, { useState } from "react";
import "./Navigation.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./img/logo.png";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import {
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

//Firebase
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./firebaseConfig";

function Navigation(args) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const handleGoogle = async (e) => {
    const provider = await new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };
  return (
    <div>
      <Navbar
        {...args}
        color="black"
        light="false"
        dark="true"
        full="true"
        expand="xl"
        container="fluid"
        fixed="top"
        id="nav-bar"
      >
        <NavbarBrand href="/">
          <Link to="/">
            <img alt="logo" src={logo} />
          </Link>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <Link to="/" className="links">
                <NavLink
                  href="/"
                  style={{
                    color: "#ffc008",
                    fontSize: "1.5rem",
                    fontFamily: "yesevaOne",
                    fontWeight: "bold",
                  }}
                >
                  Home
                </NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/Weather" className="links">
                <NavLink
                  href="/Weather"
                  style={{
                    color: "#ffc008",
                    fontSize: "1.5rem",
                    fontFamily: "yesevaOne",
                    fontWeight: "bold",
                  }}
                >
                  Weather
                </NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/wardrobe" className="links">
                <NavLink
                  href="/wardrobe"
                  style={{
                    color: "#ffc008",
                    fontSize: "1.5rem",
                    fontFamily: "yesevaOne",
                    fontWeight: "bold",
                  }}
                >
                  Wardrobe
                </NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/Wardrobe" className="links">
                <NavLink
                  href="/Wardrobe"
                  style={{
                    color: "#ffc008",
                    fontSize: "1.5rem",
                    fontFamily: "yesevaOne",
                    fontWeight: "bold",
                  }}
                >
                  Wardrobe
                </NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/StoryPage" className="links">
                <NavLink
                  href="/StoryPage"
                  style={{
                    color: "#ffc008",
                    fontSize: "1.5rem",
                    fontFamily: "yesevaOne",
                    fontWeight: "bold",
                  }}
                >
                  Story
                </NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/TeamPage" className="links">
                <NavLink
                  href="/TeamPage"
                  style={{
                    color: "#ffc008",
                    fontSize: "1.5rem",
                    fontFamily: "yesevaOne",
                    fontWeight: "bold",
                  }}
                >
                  Team
                </NavLink>
              </Link>
            </NavItem>
          </Nav>
          <div>
            <Button
              onClick={handleGoogle}
              color="light"
              size="lg"
              style={{
                color: "black",
                fontSize: "1.5rem",
                fontFamily: "yesevaOne",
                fontWeight: "bold",
              }}
            >
              Sign In <FcGoogle />
            </Button>
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;
