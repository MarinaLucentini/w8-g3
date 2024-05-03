import {
  Alert,
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
  Spinner,
} from "react-bootstrap";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Addcomments = () => {
  const [movies, setMovies] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const params = useParams();
  const [comment, setComment] = useState({
    comment: "",
    rate: "",
    elementId: params.dinamicId,
  });
  const fetchMovies = () => {
    setIsLoading(true);
    fetch(
      "http://www.omdbapi.com/?apikey=cb94ee65&i=" +
        params.dinamicId
    )
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          if (resp.status === 400) {
            throw new Error(
              "Richiesta errata o incompleta"
            );
          }
          if (resp.status === 401) {
            throw new Error("Richiesta non autorizzata");
          }
          if (resp.status === 403) {
            throw new Error("Forbidden");
          }
          if (resp.status === 404) {
            throw new Error("Elemento non trovato");
          }
          if (resp.status === 500) {
            throw new Error("Server Error");
          }
          throw new Error("Errore nella richiesta");
        }
      })
      .then((movies) => {
        setMovies(movies);
      })
      .catch((err) => {
        console.log(err);
        setIsError(true);
        setErrorMsg(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  const fetchComment = () => {
    fetch(
      "https://striveschool-api.herokuapp.com/api/comments/",
      {
        method: "POST",
        body: JSON.stringify(comment),
        headers: {
          "Content-Type": "application/json",

          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjE4ZjYwYTdmMzA0NjAwMWFlNTlmYTEiLCJpYXQiOjE3MTQ0MDAxMTIsImV4cCI6MTcxNTYwOTcxMn0.R1bNr5Db_DgmIlOFTMUMkxtY2H6Nt-0wEcEDw9S58-8",
        },
      }
    )
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          if (resp.status === 400) {
            throw new Error(
              "Richiesta errata o incompleta"
            );
          }
          if (resp.status === 401) {
            throw new Error("Richiesta non autorizzata");
          }
          if (resp.status === 403) {
            throw new Error("Forbidden");
          }
          if (resp.status === 404) {
            throw new Error("Elemento non trovato");
          }
          if (resp.status === 500) {
            throw new Error("Server Error");
          }
          throw new Error("Errore nella richiesta");
        }
      })
      .then((comments) => {
        setComment({
          comment: "",
          rate: "",
          elementId: params.dinamicId,
        });
      })
      .catch((err) => {
        console.log(err);
        setIsError(true);
        setErrorMsg(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  useEffect(() => {
    if (params.dinamicId) {
      fetchMovies();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.dinamicId]);
  const handlesubmit = (e) => {
    e.preventDefault();
    fetchComment();
  };
  const handleChanged = (propertyName, propertyValue) => {
    setComment({
      ...comment,
      [propertyName]: propertyValue,
    });
  };
  return (
    <Container>
      <Row>
        <Col>
          <h4>
            {isLoading && (
              <Spinner
                animation="border"
                variant="primary"
              />
            )}
          </h4>
          {isError && (
            <Alert variant="danger">{errorMsg}</Alert>
          )}
          <Card>
            <Card.Img variant="top" src={movies.Poster} />
            <Card.Body>
              <Card.Title>{movies.Title}</Card.Title>
              <Card.Text>{movies.Plot}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Form onSubmit={handlesubmit}>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Aggiungi un commento</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                onChange={(e) =>
                  handleChanged("comment", e.target.value)
                }
              />
            </Form.Group>
            <Form.Select
              aria-label="Default select example"
              onChange={(e) =>
                handleChanged("rate", e.target.value)
              }
            >
              <option>Seleziona il voto</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </Form.Select>
            <Button type="submit">
              Invia il tuo commento
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
export default Addcomments;
