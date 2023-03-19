import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Screening = (props) => {
  const auditoriumId = props.auditoriumId === 1 ? "Stora salongen" : "Lilla salongen";
  
  return (
    <Card className="screening-cards">
      <Card.Body>
        <Card.Title>{props.movieTitle}</Card.Title>
        <Card.Text>{props.time}</Card.Text>
        <Card.Text>{auditoriumId}</Card.Text>
        <Link to={`/DisplaySeats/${props.screeningId}`} className="btn btn-primary btn-sm"> this isnt working
          Booking
        </Link>
      </Card.Body>
    </Card>
  );
}

export default Screening;