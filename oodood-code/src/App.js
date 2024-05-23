import React from "react";
import { Container, Col, Row, Card, Button } from "react-bootstrap";
import SelectBox from "./Components/SelectBox";
import "./App.css";

function App() {
  return (
    <div className="App app-container">
      <Container className="px-4 px-lg-5 pt-5">
        <Row className="gx-4 gx-lg-5 my-2">
          <Card>
            <Card.Body>
              <Card.Title>วันนี้กินอะไรดีคะ🍽️</Card.Title>
              <Card.Text>
                <SelectBox></SelectBox>
              </Card.Text>
              <Button variant="primary" className="mb-3">
                สุ่มเลย!🪄
              </Button>
            </Card.Body>
          </Card>
        </Row>

        <Row>
          <Button variant="warning" className="mb-3">
            ได้หมดไม่สนประเภท
          </Button>
          <Button variant="light" className="mb-3">
            ขอเป็นมื้อเร็วๆจ้า
          </Button>
        </Row>
      </Container>

      <Container className="px-4">
        <Row className="gx-4 gx-lg-5 my-4">
          <Card>
            <Card.Body>
              <Card.Title>กินนี่มั้ย</Card.Title>
              <Card.Text>Results</Card.Text>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </div>
  );
}

export default App;
