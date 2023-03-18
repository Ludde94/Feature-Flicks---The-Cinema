import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

// import our Screening component
import Screening from '../components/screening';

const Screenings = () => {
    const [screenings, setScreenings] = useState([]);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        (async () => {
            // Use Promise.all() to fetch both the screenings and movies data
            const [screeningsResponse, moviesResponse] = await Promise.all([
                fetch('/api/screenings?sort=time'),
                fetch('/api/movies')
            ]);
            const screeningsData = await screeningsResponse.json();
            const moviesData = await moviesResponse.json();
            
            const screeningsWithTitles = screeningsData.map(screening => {
                const movie = moviesData.find(movie => movie.id === screening.movieId);
                return {
                    ...screening,
                    title: movie.title
                };
            });

            setScreenings(screeningsWithTitles);
            setMovies(moviesData);
        })();
    }, []);

    const screeningsByDate = {};

    screenings.forEach(screening => {
        if (!screeningsByDate[screening.datetime]) {
            screeningsByDate[screening.datetime] = [];
        }
        screeningsByDate[screening.datetime].push(screening);
    });
    
    return (
        <div>
          <Container fluid className="movieContainer">
            {Object.entries(screeningsByDate).map(([date, screenings]) => (
              <div key={date}>
                <br />
                <Row xs={1} sm={2} md={3} lg={4} xl={5} xxl={6}>
                  {screenings.map(({time, title, auditoriumId, movieId}, index) => {
                    const movie = movies.find(movie => movie.id === movieId);
                    return (
                      <Col key={index}>
                        <Card className="mb-4">
                          <Screening time={time} movieTitle={movie.title} auditoriumId ={auditoriumId} /> 
                        </Card>
                      </Col>
                    );
                  })}
                </Row>
              </div>
            ))}
          </Container>
        </div>
      );
}

export default Screenings;