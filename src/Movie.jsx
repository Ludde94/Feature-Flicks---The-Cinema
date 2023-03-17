import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';

export default function Movie(props) {
  // Destructure props into separate variables
  let { title, description } = props;
  let { posterImage } = description;

  posterImage = 'https://cinema-rest.nodehill.se/' + posterImage;
const linkUrl = `/auditorium/${description.title}`;

  return (
    <Row className="my-4">
      <Col className="text-center">
        <Link to={linkUrl}>
          <h2 className="movie-title">{title}</h2>
         <Image src={posterImage} alt={`Poster for ${title}`} fluid className="movie-poster" />
        </Link>
      </Col>
    </Row>
  );
}