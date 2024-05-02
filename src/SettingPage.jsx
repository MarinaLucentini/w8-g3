import MyNav from "./MyNav";
import {
  Container,
  Row,
  Col,
  Button,
} from "react-bootstrap";
import profile from "./assets/avatar.png";

const SettingPage = () => {
  return (
    <>
      <MyNav />
      <main className="bg-white">
        <Container className="py-5">
          <Row>
            <Col xs={12} md={8} lg={6} className="mx-auto">
              {" "}
              <h3 className="text-dark">Account</h3>
              <hr className="border border-secondary" />
              <Container className=" my-5">
                <Row>
                  <Col xs={12} sm={4}>
                    <h6 className="text-secondary">
                      MEMBERSHIP & BILLING
                    </h6>
                    <Button
                      variant="secondary"
                      className="mt-2 mt-sm-0 rounded-0"
                    >
                      Cancel Membership
                    </Button>
                  </Col>
                  <Col xs={12} sm={4}>
                    <h6 className="text-dark">
                      student@strive.strip
                    </h6>
                    <h6 className="text-secondary">
                      Password
                    </h6>
                    <h6 className="text-secondary">
                      Phone
                    </h6>
                  </Col>
                  <Col
                    xs={12}
                    sm={4}
                    className="d-flex flex-column"
                  >
                    <a href="#change">
                      Change account email
                    </a>
                    <a href="#change pass">
                      {" "}
                      Change password{" "}
                    </a>
                    <a href="#changenum">
                      Change number phone
                    </a>
                  </Col>
                </Row>
                <hr className="border border-secondary" />
              </Container>
              <Row>
                <Col xs={12} sm={4}></Col>
                <Col xs={12} sm={4}>
                  <h6 className="text-black">
                    <i className="bi bi-paypal"></i>
                    Paypal
                  </h6>
                </Col>
                <Col
                  xs={12}
                  sm={4}
                  className="d-flex flex-column"
                >
                  <a href="#update"> Update payment</a>
                  <a href="#billing"> Billing Details </a>
                </Col>
              </Row>
              <hr className="border border-secondary" />
              <Row>
                <Col xs={12} sm={4}></Col>
                <Col xs={12} sm={4}></Col>
                <Col
                  xs={12}
                  sm={4}
                  className="d-flex flex-column"
                >
                  <a href="#render">
                    Render gift card or promo code
                  </a>
                  <a href="#where">
                    {" "}
                    Where to buy gift card{" "}
                  </a>
                </Col>
              </Row>
              <hr className="border border-secondary" />
              <Row>
                <Col xs={12} sm={4}>
                  <h6 className="text-secondary">
                    PLAN DETAILS
                  </h6>
                </Col>
                <Col xs={12} sm={4}>
                  <h6 className="text-dark">
                    Premium{" "}
                    <i className="bi bi-badge-hd"></i>
                  </h6>
                </Col>
                <Col
                  xs={12}
                  sm={4}
                  className="d-flex flex-column"
                >
                  <a href="#changeplan"> Change plan </a>
                </Col>
              </Row>
              <hr className="border border-secondary" />
              <Row>
                <Col xs={12} sm={4}>
                  <h6 className="text-secondary">
                    SETTINGS
                  </h6>
                </Col>
                <Col
                  xs={12}
                  sm={4}
                  className="d-flex flex-column"
                >
                  <a href="#parental">Parental controls</a>
                  <a href="#test">Test participation</a>
                  <a href="#manage">
                    Manage download devices
                  </a>
                  <a href="#active">Active a devices</a>
                  <a href="#recent">
                    Recent delive treaming activity
                  </a>
                  <a href="#sign">Sign out all devices </a>
                </Col>
                <Col xs={12} sm={4}></Col>
              </Row>
              <hr className="border border-secondary" />
              <Row>
                <Col xs={12} sm={4}>
                  <h6 className="text-secondary">
                    MY PROFILE
                  </h6>
                </Col>
                <Col
                  xs={12}
                  sm={4}
                  className="d-flex align-items-center"
                >
                  <img
                    src={profile}
                    alt=""
                    className="img-fluid w-25 mx-3"
                  />
                  <h6 className="text-secondary">
                    Strive Student
                  </h6>
                </Col>
                <Col
                  xs={12}
                  sm={4}
                  className="d-flex flex-column"
                >
                  <a href="#manage">Menage profiles</a>
                  <a href="#addprofile">
                    {" "}
                    Add profile email{" "}
                  </a>
                </Col>
              </Row>
              <Row className="my-5">
                <Col xs={12} sm={4}></Col>
                <Col
                  xs={12}
                  sm={4}
                  className="d-flex flex-column"
                >
                  <a href="#manage">Language</a>
                  <a href="#addprofile">
                    {" "}
                    Playback settings{" "}
                  </a>
                  <a href="#addprofile">
                    {" "}
                    Subtitle apparence{" "}
                  </a>
                </Col>
                <Col
                  xs={12}
                  sm={4}
                  className="d-flex flex-column"
                >
                  <a href="#manage">Viewing activity</a>
                  <a href="#addprofile"> Rating </a>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
};
export default SettingPage;
