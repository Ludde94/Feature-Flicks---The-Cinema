import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Screening from '../components/screening';

const Screenings = () => {
  const [screenings, setScreenings] = useState([]);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async () => {
      const [screeningsResponse, moviesResponse] = await Promise.all([
        fetch('/api/screenings?sort=time'),
        fetch('/api/movies'),
      ]);
      const screeningsData = await screeningsResponse.json();
      const moviesData = await moviesResponse.json();
      setScreenings(screeningsData);
      setMovies(moviesData);
    })();
  }, []);

  console.log(movies); //LOG ALL THE CATEGORIES

  return (
    <div>
      <Container fluid className="movieContainer">
        <Row xs={1} sm={2} md={3} lg={4} xl={5} xxl={6}>
              {screenings.map(({ time, movieId, auditoriumId, categories }, index) => {
        const movie = movies.find((movie) => movie.id === movieId);
        return (
          <Col key={index}>
            <Card className="mb-4">
            <Screening time={time} movieTitle={movie.title} auditoriumId={auditoriumId} categories={categories}/>
            </Card>
          </Col>
        );
      })}
        </Row>
      </Container>
    </div>
  );
};

export default Screenings;