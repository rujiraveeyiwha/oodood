import React, { useState } from "react";
import {
  Container,
  Row,
  Card,
  Button,
  Form,
  FormGroup,
  Navbar,
} from "react-bootstrap";
import "./App.css";
import Menu from "./Assets/Menu.json";
import RandomItemDisplay from "./RandomItemDisplay";
import AllMenu from "./AllMenu";

function App() {
  const [selectedItem, setSelectedItem] = useState("");
  const [selectedCategories, setSelectedCategories] = useState({
    rice: false,
    noodles: false,
    easy: false,
    spicy: false,
  });
  const [displayingRandom, setDisplayingRandom] = useState(false);

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
      setDisplayingRandom(true);

      // Set a timeout to update the selectedItem after 2 seconds
      setTimeout(() => {
        setDisplayingRandom(false);
        setSelectedItem(randomItem);
      }, 1000);
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
    ];
    const randomItem = allItems[Math.floor(Math.random() * allItems.length)];
    setDisplayingRandom(true);
    setTimeout(() => {
      setDisplayingRandom(false);
      setSelectedItem(randomItem);
    }, 1000);
  };

  const handleFastSelection = () => {
    const fastItems = Menu.fast;
    const randomItem = fastItems[Math.floor(Math.random() * fastItems.length)];
    setDisplayingRandom(true);
    setTimeout(() => {
      setDisplayingRandom(false);
      setSelectedItem(randomItem);
    }, 1000);
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
            <Navbar.Brand href="#">วันนี้กินอะไรดีคะ❓</Navbar.Brand>
          </Container>
        </Navbar>
        <Container className="px-4 px-lg-5">
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
                        className="custom-font-size"
                        checked={selectedCategories.rice}
                        onChange={handleCheckboxChange}
                      />
                      <Form.Check
                        inline
                        type="checkbox"
                        label="เส้น"
                        name="noodles"
                        className="custom-font-size"
                        checked={selectedCategories.noodles}
                        onChange={handleCheckboxChange}
                      />
                      <Form.Check
                        inline
                        type="checkbox"
                        label="ทานเล่น"
                        name="easy"
                        className="custom-font-size"
                        checked={selectedCategories.easy}
                        onChange={handleCheckboxChange}
                      />
                      <Form.Check
                        inline
                        type="checkbox"
                        label="แซ่บ"
                        name="spicy"
                        className="custom-font-size"
                        checked={selectedCategories.spicy}
                        onChange={handleCheckboxChange}
                      />
                    </FormGroup>
                  </Form>
                </Card.Text>
                <Button
                  variant="primary"
                  className="mb-2 custom-font-size"
                  onClick={handleRandomSelection}
                >
                  สุ่มเลย!🪄
                </Button>{" "}
                <Button
                  variant="outline-success"
                  className="mb-2"
                  onClick={handleClearSelection}
                >
                  ล้างๆ
                </Button>
              </Card.Body>
            </Card>
          </Row>
        </Container>

        <Container className="px-4 px-4 px-lg-5">
          <Row className="gx-4 gx-lg-5">
            <Card className="transparent-card" style={{ fontSize: "0.8rem" }}>
              <Card.Body>
                <p className="text-white">หรือว่า ...</p>
                <Button
                  type="button"
                  variant="warning"
                  className="mx-2"
                  style={{ fontSize: "0.8rem" }}
                  onClick={handleSelectAll}
                >
                  ได้หมด
                </Button>
                <Button
                  type="button"
                  variant="warning"
                  style={{ fontSize: "0.8rem" }}
                  onClick={handleFastSelection}
                >
                  ขอมื้อเร็วๆจ้า
                </Button>
              </Card.Body>
            </Card>
          </Row>
        </Container>

        <Container className="px-4 px-4 px-lg-5">
          <Row className="gx-4 gx-lg-5 my-2">
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
                    {displayingRandom ? (
                      <RandomItemDisplay />
                    ) : selectedItem.length === 0 ? (
                      <p></p>
                    ) : (
                      <div className="highlight-text">
                        <h2>{selectedItem}🎉</h2>
                      </div>
                    )}
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Row>
        </Container>

        <Container className="pb-2">
          {/* <FoodMarquee /> */}
          <AllMenu />
        </Container>
      </div>
    </>
  );
}

export default App;
