import { NavLink } from "react-router-dom";
import logo from "./assets/logo.png";

import {
  Button,
  Container,
  Nav,
  Navbar,
  Stack,
} from "react-bootstrap";

const MyNav = (props) => {
  return (
    <Navbar
      expand="lg"
      className="bg-navbar-netflix"
      data-bs-theme="dark"
    >
      <Container fluid>
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo" className="img-logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <NavLink to="/" className="fw-bold nav-link">
              Home
            </NavLink>
            <NavLink
              to="/tvshow"
              className="fw-bold nav-link"
            >
              Tv shows
            </NavLink>
            <NavLink className="fw-bold nav-link">
              Movies
            </NavLink>
            <NavLink className="fw-bold nav-link">
              Recently added
            </NavLink>
            <NavLink className="fw-bold nav-link">
              My list
            </NavLink>
          </Nav>
          <Stack
            direction="horizontal"
            className="ms-auto align-items-center"
            gap={1}
            id="kids"
          >
            <Button variant="btn">
              <i className="bi bi-search icons"></i>
            </Button>
            <div className="p-2 fw-bold text-white">
              KIDS
            </div>
            <div>
              <i className="bi bi-bell icons"></i>
            </div>
            <div>
              <i className="bi bi-person-circle icons"></i>
            </div>
          </Stack>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNav;
