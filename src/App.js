import React, { useState } from "react";
import {
  Container,
  Row,
  Card,
  Button,
  Form,
  FormGroup,
  Badge,
  Navbar,
} from "react-bootstrap";
import "./App.css";
import Menu from "./Assets/Menu.json";
import FoodMarquee from "./FoodMarquee";

function App() {
  const [selectedItem, setSelectedItem] = useState("");
  const [selectedCategories, setSelectedCategories] = useState({
    rice: false,
    noodles: false,
    easy: false,
    spicy: false,
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setSelectedCategories((prevCategories) => ({
      ...prevCategories,
      [name]: checked,
    }));
  };

  const handleRandomSelection = () => {
    let items = [];
    if (selectedCategories.rice) items = [...items, ...Menu.rice];
    if (selectedCategories.noodles) items = [...items, ...Menu.noodles];
    if (selectedCategories.easy) items = [...items, ...Menu.easy];
    if (selectedCategories.spicy) items = [...items, ...Menu.spicy];
    if (items.length > 0) {
      const randomItem = items[Math.floor(Math.random() * items.length)];
      setSelectedItem(randomItem);
    } else {
      setSelectedItem("เลือกประเภทก่อนนะคนดี");
    }
  };

  const handleSelectAll = () => {
    const allItems = [
      ...Menu.rice,
      ...Menu.noodles,
      ...Menu.easy,
      ...Menu.spicy,
      ...Menu.fast,
    ];
    const randomItem = allItems[Math.floor(Math.random() * allItems.length)];
    setSelectedItem(randomItem);
  };

  const handleFastSelection = () => {
    const fastItems = Menu.fast;
    const randomItem = fastItems[Math.floor(Math.random() * fastItems.length)];
    setSelectedItem(randomItem);
  };

  const handleClearSelection = () => {
    setSelectedCategories({
      rice: false,
      noodles: false,
      easy: false,
      spicy: false,
    });
    setSelectedItem("");
  };

  return (
    <>
      <div className="App app-container">
        <Navbar sticky="top" expand="lg" className="navbar-colour shadow">
          <Container className="d-flex justify-content-center align-items-center">
            <Navbar.Brand href="#">
              วันนี้กินอะไรดีคะ🍽️ <Badge bg="warning">V1.0</Badge>
            </Navbar.Brand>
          </Container>
        </Navbar>
        <Container className="px-4 px-lg-5 pt-2">
          <Row className="gx-4 gx-lg-5 my-2">
            <Card className="mt-3 custom-card-colour">
              <Card.Body>
                <Card.Title className="highlight-text">
                  เลือกประเภทเลย
                </Card.Title>
                <Card.Text className="mt-4">
                  <Form>
                    <FormGroup>
                      <Form.Check
                        inline
                        type="checkbox"
                        label="ข้าว"
                        name="rice"
                        checked={selectedCategories.rice}
                        onChange={handleCheckboxChange}
                      />
                      <Form.Check
                        inline
                        type="checkbox"
                        label="เส้น"
                        name="noodles"
                        checked={selectedCategories.noodles}
                        onChange={handleCheckboxChange}
                      />
                      <Form.Check
                        inline
                        type="checkbox"
                        label="ทานเล่น"
                        name="easy"
                        checked={selectedCategories.easy}
                        onChange={handleCheckboxChange}
                      />
                      <Form.Check
                        inline
                        type="checkbox"
                        label="แซ่บ"
                        name="spicy"
                        checked={selectedCategories.spicy}
                        onChange={handleCheckboxChange}
                      />
                    </FormGroup>
                  </Form>
                </Card.Text>
                <Button
                  variant="primary"
                  className="mb-3"
                  onClick={handleRandomSelection}
                >
                  สุ่มเลย!🪄
                </Button>
              </Card.Body>
              <Card.Footer>
                <Button
                  type="button"
                  variant="warning"
                  className="mx-3"
                  onClick={handleSelectAll}
                >
                  ได้หมด
                </Button>
                <Button
                  type="button"
                  variant="light"
                  onClick={handleFastSelection}
                >
                  ขอเป็นมื้อเร็วๆจ้า
                </Button>
              </Card.Footer>
            </Card>
          </Row>
        </Container>

        <Container className="px-4">
          <Row className="gx-4 gx-lg-5 my-5">
            <Card style={{ height: "10rem" }} className="custom-card-colour-2">
              <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                <div>
                  {selectedItem.length === 0 ||
                  selectedItem === "เลือกประเภทก่อนนะคนดี" ? (
                    <Card.Title className="mx-3">กินไรดีนะ</Card.Title>
                  ) : (
                    <Card.Title className="mx-3">เราขอเสนอ</Card.Title>
                  )}
                </div>

                <div>
                  <Card.Text>
                    {selectedItem.length === 0 ? (
                      <div class="loader"></div>
                    ) : (
                      <div class="highlight-text">
                        <h2>{selectedItem}!</h2>
                      </div>
                    )}
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Row>
        </Container>

        <Container className="mt-1">
          <Button
            variant="outline-success"
            className="mb-2"
            onClick={handleClearSelection}
          >
            ล้างๆ
          </Button>
        </Container>

        <Container className="pb-4">
          <FoodMarquee />
        </Container>
      </div>
    </>
  );
}

export default App;
