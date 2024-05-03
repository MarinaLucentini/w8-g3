import { useState, useEffect } from "react";
import { Alert, Spinner, Card } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
const MyGallery = (props) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [hoveredImageId, setHovereImageId] = useState(null);

  const fetchMovies = () => {
    setIsLoading(true);

    fetch(
      "http://www.omdbapi.com/?apikey=cb94ee65&s=" +
        props.fetch
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
        setMovies(movies.Search);
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
  const handleMouseEnter = (id) => {
    setHovereImageId(id);
  };

  const handleMouseLeave = () => {
    setHovereImageId(null);
  };
  const filterMovies =
    movies && movies.length > 0
      ? movies.filter((film, index) => index < 6)
      : [];
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          className: "center",
          centerMode: true,
          infinite: true,
          centerPadding: "60px",
          slidesToShow: 3,
          speed: 2000,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  useEffect(() => {
    fetchMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.fetch]);

  return (
    <div className="my-3">
      <h4 className="my-3">
        {props.title}
        {isLoading && (
          <Spinner animation="border" variant="primary" />
        )}
      </h4>
      {isError && (
        <Alert variant="danger">{errorMsg}</Alert>
      )}

      <div className="slider-container">
        <Slider {...settings}>
          {filterMovies.map((films) => {
            return (
              <>
                <div
                  onMouseEnter={() =>
                    handleMouseEnter(films.imdbID)
                  }
                  onMouseLeave={() => handleMouseLeave()}
                  key={films.imdbID}
                  className="mx-2"
                >
                  {!hoveredImageId ||
                  hoveredImageId === films.imdbID ? (
                    <>
                      <Card
                        onMouseEnter={() =>
                          handleMouseEnter(films.imdbID)
                        }
                        onMouseLeave={() =>
                          handleMouseLeave()
                        }
                        className="bg-dark text-white mx-2 card-size"
                      >
                        <Card.Img
                          variant="top"
                          src={films.Poster}
                        />

                        <Card.Body>
                          <>
                            <Card.Title>
                              {films.Title}
                            </Card.Title>

                            <Link
                              to={`/tvshow/details/${films.imdbID}`}
                              className="btn btn-outline-light"
                            >
                              Dettagli
                            </Link>
                          </>
                        </Card.Body>
                      </Card>
                    </>
                  ) : (
                    <img
                      src={films.Poster}
                      alt={films.Title}
                      className="img-fluid img-card object-fit-cover"
                    />
                  )}
                </div>
              </>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};
// class MyGallery extends Component {
//   componentDidMount = (fetch) => {
//     this.fetchMovies();
//   };

//   handleShow = () => {
//     this.setState({ isShow: true });
//   };

//   handleClose = () => {
//     this.setState({ isShow: false });
//   };
//   render() {}
// }
export default MyGallery;
