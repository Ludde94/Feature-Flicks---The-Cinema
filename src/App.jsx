// import necessary hooks from React
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
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

return (
  <div className="App">
    <Navbar />
    {greeting === 'Hello world!' && (
      <Button variant="danger" onClick={() => setGreeting('Goodbye cruel world!')}>
        Say goodbye
      </Button>
    )}
    <div className="container mt-4">
      <div className="row">
        {movies.map(({ id, title, description }) => (
          <div className="col-md-4 mb-3" key={id}>
            <Movie title={title} description={description} />
          </div>
        ))}
      </div>
    </div>
  </div>
);
}