// import necessary hooks from React
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

// import our Movie component
import Movie from './pages/Movie';
import Navbar from './components/Navbar';
export default function App() {

  // A variable that will contain a list of movies
  const [movies, setMovies] = useState([]);

  // Run this function when the component mounts
  useEffect(() => {
    // Self-executing asyncronous anonomyous function
    (async () => {
      // Fetch all the movies from the REST api
      // and store them in the state variable movies
      setMovies(await (await (fetch('/api/movies'))).json());
    })();
  }, []);


  // Create a state variable called greeting
  const [greeting, setGreeting] = useState('Hello world!');

  return <div className="App">
    <Navbar />
    <h1>{greeting}</h1>
    {greeting === 'Hello world!' && <Button variant = "danger"
      onClick={() => setGreeting('Goodbye cruel world!')}
    >Say goodbye</Button>}
    {/* Loop through all movies and display each movie */}
    {movies.map(({ id, title, description }) => <Movie
      key={id}
      title={title}
      description={description}
    />)}
  </div>;

}