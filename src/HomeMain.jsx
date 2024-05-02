import {
  Col,
  Container,
  Row,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
} from "react-bootstrap";

import MyGallery from "./MyGallery";

const Home = () => {
  return (
    <>
      <main>
        <Container fluid className="px-4">
          <Row>
            <Col className="d-flex">
              <h2 className="mb-4">Tv Show</h2>
              <Dropdown className="ms-4 mt-1" autoClose>
                <DropdownToggle
                  className="btn-sm rounded-0"
                  variant="outline-secondary"
                >
                  Genres
                </DropdownToggle>
                <DropdownMenu>
                  <Dropdown.Item href="#/action-1">
                    Commedy
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Drama
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Thriller
                  </Dropdown.Item>
                </DropdownMenu>
              </Dropdown>
            </Col>
            <Col className="d-flex justify-content-end">
              <i className="bi bi-grid icons"></i>

              <i className="bi bi-grid-3x3 icons"></i>
            </Col>
          </Row>
          <MyGallery
            title={"Trending Now"}
            fetch={"Harry Potter"}
          />
          <MyGallery
            title={"Watch it Again"}
            fetch={"Star Wars"}
          />
          <MyGallery
            title={"New Releases"}
            fetch={"Lord of the Rings"}
          />
        </Container>
      </main>
    </>
  );
};

export default Home;
