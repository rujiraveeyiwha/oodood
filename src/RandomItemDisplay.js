import React, { useState, useEffect } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import Menu from "./Assets/Menu.json";

// Helper function to get a random item from all categories
const getRandomItem = () => {
  const allItems = Object.values(Menu).flat();
  const randomIndex = Math.floor(Math.random() * allItems.length);
  return allItems[randomIndex];
};

const RandomItemDisplay = () => {
  const [currentItem, setCurrentItem] = useState(getRandomItem());
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentItem(getRandomItem());
    }, 100); // Change item every 1 second
    setIntervalId(id);

    return () => clearInterval(id); // Cleanup on component unmount
  }, []);

  const stopRandomDisplay = () => {
    clearInterval(intervalId);
  };

  return (
    <Container className="text-center">
      <Row className="justify-content-md-center">
        <Col md="auto">
          <div>{currentItem}</div>
        </Col>
      </Row>
    </Container>
  );
};

export default RandomItemDisplay;
