import {
  Alert,
  Card,
  ListGroup,
  Spinner,
} from "react-bootstrap";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const TvShowDetails = (props) => {
  const [movies, setMovies] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const params = useParams();
  const [comment, setComment] = useState([]);

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
      "https://striveschool-api.herokuapp.com/api/comments/" +
        params.dinamicId,
      {
        method: "GET",
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
        setComment(comments);
        console.log(comment);
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
    fetchMovies();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.dinamicId]);
  useEffect(() => {
    fetchComment();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.dinamicId]);

  return (
    <div>
      <Card>
        <h4>
          {props.title}
          {isLoading && (
            <Spinner animation="border" variant="primary" />
          )}
        </h4>
        {isError && (
          <Alert variant="danger">{errorMsg}</Alert>
        )}
        {movies && (
          <>
            <Card.Img
              variant="top"
              src={movies.Poster}
              fluid
            />
            <Card.Body>
              <Card.Title>{movies.Title}</Card.Title>
              <Card.Text>{movies.Plot}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>
                Production: {movies.Production}
              </ListGroup.Item>
              <ListGroup.Item>
                Actors: {movies.Actors}
              </ListGroup.Item>
              <Link
                className="btn btn-dark"
                to={`/addcomments/${movies.imdbID}`}
              >
                Scrivi un commento
              </Link>
              {comment.length > 0 ? (
                comment.map((comm) => {
                  return (
                    <>
                      <ListGroup.Item>
                        Commento di: {comm.author},{" "}
                        {comm.comment}, voto: {comm.rate}
                      </ListGroup.Item>
                    </>
                  );
                })
              ) : (
                <>
                  <Alert variant="danger">
                    Nessun commento per questo film
                  </Alert>
                  <Link
                    className="btn btn-dark"
                    to={`/addcomments/${movies.imdbID}`}
                  >
                    Scrivi un commento
                  </Link>
                </>
              )}
            </ListGroup>
          </>
        )}
      </Card>
    </div>
  );
};
export default TvShowDetails;
