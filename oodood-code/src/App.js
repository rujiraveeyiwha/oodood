import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import './App.css'

function App() {
  return (
    <div className="App app-container">
      <Container className="px-4 px-lg-5 pt-5">
        <Row className="gx-4 gx-lg-5 align-items-center my-5">
          <Card>
            <Card.Body>
              <Card.Title>Special title treatment</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional
                content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </div>
  );
}

export default App;
