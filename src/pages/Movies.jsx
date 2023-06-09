// import necessary hooks from React
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

// import our Movie component
import Movie from '../components/Movie';

const Movies = () => {
    // A variable that will contain a list of movies
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        (async () => {
        setMovies(await (await (fetch('/api/movies'))).json());
        })();
    },[]);
    return (
      <div>
      <Container fluid className="movieContainer">
        <Row md={2} lg={3} xxl={4} className="mt-4">
          {movies.map(({ id, title, description }) => (
            <Col key={id} className="mb-4">
              <Movie title={title} description={description} />
            </Col>
          ))}
        </Row>
      </Container>
      </div>
      );
    };

export default Movies;