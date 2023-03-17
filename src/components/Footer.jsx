import { Container, Row, Col, Button } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="my-footer sticky-bottom">
      <Container>
        <Row>
          <Col md={12} className="text-center" style={{ display: 'flex', justifyContent: 'center' }}>
            <Button 
              variant="primary" 
              onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
              style={{
                backgroundColor: '#666',
                borderColor: '#007bff',
                transition: 'background-color 0.2s, border-color 0.2s, color 0.2s',
                color: '#fff',
                borderRadius: '50px',
                fontSize: '16px'
              }}
            >
              Top
            </Button>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
