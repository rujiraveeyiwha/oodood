import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Container className="px-4 px-lg-5 pt-5">
        <Row className="gx-4 gx-lg-5 align-items-center my-5">
          <Col
            lg={5}
            className="d-flex justify-content-center align-items-center"
          ></Col>
          <Col lg={7}></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
