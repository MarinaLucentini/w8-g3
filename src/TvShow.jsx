import {
  Col,
  Container,
  Row,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  Button,
  Form,
} from "react-bootstrap";

import MyGallery from "./MyGallery";
import { useState } from "react";

const TvShow = () => {
  const [searchUser, setSearchUser] = useState("");
  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(searchUser);
  };
  const handleChanged = (e) => {
    setSearchUser(e.target.value);
  };
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
            <Col>
              <Form
                onSubmit={handlesubmit}
                className="d-flex align-items-center"
              >
                <Form.Control
                  type="text"
                  placeholder="Cerca serie tv"
                  value={searchUser}
                  onChange={handleChanged}
                />

                <Button variant="btn" type="submit">
                  <i className="bi bi-search icons"></i>
                </Button>
              </Form>
            </Col>
            <Col className="d-flex justify-content-end">
              <i className="bi bi-grid icons"></i>

              <i className="bi bi-grid-3x3 icons"></i>
            </Col>
          </Row>
          <MyGallery
            title={"La tua serie tv"}
            fetch={searchUser}
          />
        </Container>
      </main>
    </>
  );
};

export default TvShow;
