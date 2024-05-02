import {
  Navbar,
  Container,
  Row,
  Col,
  Button,
  Form,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "react-bootstrap";
import logo from "./assets/logo.png";
import profile from "./assets/avatar.png";

const Profilepage = () => {
  return (
    <>
      <Navbar
        expand="lg"
        className="bg-navbar-netflix"
        data-bs-theme="dark"
      >
        <Container fluid>
          <Navbar.Brand href="#home">
            <img
              src={logo}
              alt="logo"
              className="img-logo"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
      <main>
        <Container>
          <Row>
            <Col xs={2}></Col>
            <Col xs={8}>
              <h1 className="text-white">Edit Profile</h1>
              <hr className="border border-secondary" />
            </Col>
            <Col xs={2}></Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col xs={2}></Col>
            <Col xs={2}>
              <Container className="position-relative">
                <img
                  src={profile}
                  alt=""
                  className="img-fluid"
                />
                <div className="position-absolute bottom-0 end-0">
                  <Button className="btn btn-sm btn-dark border border-light rounded-5 d-none d-lg-block">
                    <i className="bi bi-pencil-fill text-white"></i>
                  </Button>
                </div>
              </Container>
            </Col>
            <Col xs={6}>
              <Row>
                <Col xs={8}>
                  <Form.Control
                    type="text"
                    placeholder="Steve Student"
                    aria-label="Disabled input example"
                    disabled
                    readOnly
                    className="rounded-0 bg-secondary border-0"
                  />
                </Col>
                <Col xs={4}></Col>
              </Row>

              <Row className="flex-column my-3">
                <Col>
                  <p className="text-white">Language:</p>
                </Col>
                <Col>
                  <Row>
                    <Col xs={4} lg={6}>
                      <Dropdown>
                        <DropdownToggle
                          className="btn-secondary rounded-0"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          English
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem href="#Italiano">
                            Italiano
                          </DropdownItem>
                          <DropdownItem href="#Portoghese">
                            Portoghese
                          </DropdownItem>
                          <DropdownItem href="#Spagnolo">
                            Spagnolo
                          </DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </Col>
                    <Col xs={6} lg={8}></Col>
                  </Row>
                </Col>
              </Row>
              <hr className="border border-secondary" />
              <Row className=" flex-column my-3">
                <Col>
                  <p className="text-white fs-6 fs-xl-4">
                    Maturity settings:
                  </p>
                </Col>
                <Col>
                  <Row>
                    <Col xs={12} lg={6}>
                      <span className="btn placeholder bg-secondary text-white mx-3 fs-6 fs-xl-4 rounded-0">
                        ALL MATURITY LANGUAGE
                      </span>
                    </Col>
                    <Col xs={0} lg={6}></Col>
                  </Row>
                </Col>
                <Col>
                  <p className="text-white fs-6 fs-xl-4">
                    Shoe titles of all maturity rating for
                    this profile
                  </p>
                </Col>
                <Col>
                  <Row>
                    <Col xs={5} lg={2}>
                      <Button
                        className=" fs-6 fs-xl-4 p-0 p-md-1 rounded-0"
                        variant="outline-light"
                      >
                        EDIT
                      </Button>
                    </Col>
                    <Col xs={7} lg={10}></Col>
                  </Row>
                </Col>
              </Row>
              <hr className="border border-secondary" />
              <Row className=" flex-column my-3">
                <Col>
                  <p className="text-secondary fs-6 fs-xl-4">
                    Autoplay controls
                  </p>
                </Col>
                <Col>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="defaultCheck1"
                    />
                    <label
                      className="form-check-label text-secondary fs-6 fs-xl-4"
                      for="defaultCheck1"
                    >
                      Autoplay next episode in series on all
                      devices
                    </label>
                  </div>
                </Col>
                <Col>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="defaultCheck1"
                    />
                    <label
                      className="form-check-label text-secondary fs-6 fs-xl-4"
                      for="defaultCheck1"
                    >
                      Autoplay prewies while browsing on all
                      devices
                    </label>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col xs={2}></Col>
          </Row>
        </Container>
        <Container className="text-center">
          <Row>
            <Col className="d-flex align-items-center justify-content-center ">
              <Row className="border-top py-3">
                <Col xs={4} lg={2}>
                  <Button
                    className=" fs-6 fs-xl-4 p-0 p-md-1 rounded-0"
                    variant="outline-secondary"
                  >
                    SAVE
                  </Button>
                </Col>
                <Col xs={4} lg={2}>
                  <Button
                    className="  fs-6 fs-xl-4 p-0 p-md-1 rounded-0"
                    variant="outline-secondary"
                  >
                    CANCEL
                  </Button>
                </Col>
                <Col xs={4} lg={8}>
                  <Button
                    className=" fs-6 fs-xl-4 p-0 p-md-1 rounded-0"
                    variant="outline-secondary"
                  >
                    DELETE PROFILE
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
};

export default Profilepage;
