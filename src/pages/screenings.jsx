import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Screening from '../components/screening';
import Button from 'react-bootstrap/Button';

const Screenings = () => {
  const [screenings, setScreenings] = useState([]);
  const [movies, setMovies] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

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
      setCategories([...new Set(moviesData.map(movie => movie.description.categories).flat())]);
    })();
  }, []);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  }


  let filteredScreenings = screenings;
  if (selectedCategory) {
    const filteredMovies = movies.filter(movie => movie.description.categories.includes(selectedCategory));
    const filteredMovieIds = filteredMovies.map(movie => movie.id);
    filteredScreenings = screenings.filter(screening => filteredMovieIds.includes(screening.movieId));
  }

  const screeningsByDate = {};
  filteredScreenings.forEach(screening => {
  const dateObj = new Date(screening.time);
  const date = dateObj.toLocaleDateString();
  const weekday = dateObj.toLocaleDateString('en-US', { weekday: 'long' });
  const dateWithWeekday = `${weekday}, ${date}`;
  if (!screeningsByDate[dateWithWeekday]) {
    screeningsByDate[dateWithWeekday] = [];
  }
  screeningsByDate[dateWithWeekday].push(screening);
});

  return (
    <div>
      <Container fluid className="movieContainer">
        <Row xs={1} sm={2} md={3} lg={4} xl={5} xxl={6}>
          {categories.map((category, index) => (
            <Col key={index}>
              <Button className="categoryButton" onClick={() => handleCategorySelect(category)}>{category}</Button>
            </Col>
          ))}
        </Row>
        {Object.entries(screeningsByDate).map(([dateWithWeekday, screenings]) => (
          <div key={dateWithWeekday}>
            <h2 className="headline">{dateWithWeekday}</h2>
            <Row xs={1} sm={2} md={3} lg={4} xl={5} xxl={6}>
              {screenings.map(({ time, movieId, auditoriumId }, index) => {
                const movie = movies.find((movie) => movie.id === movieId);
                return (
                  <Col key={index}>
                    <Card className="mb-4">
                      <Screening time={time} movieTitle={movie.title} auditoriumId={auditoriumId} category={movie.description.categories} ScreenId={movieId} />
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
};

export default Screenings;