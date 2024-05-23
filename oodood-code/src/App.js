import React, { useState } from "react";
import {
  Container,
  Col,
  Row,
  Card,
  Button,
  Form,
  FormGroup,
  Badge,
  Image,
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
      <Navbar expand="lg" className="navbar-colour shadow">
        <Container className="d-flex justify-content-center align-items-center">
          <Navbar.Brand href="#">
            วันนี้กินอะไรดีคะ🍽️ <Badge bg="warning">V1.0</Badge>
          </Navbar.Brand>
        </Container>
      </Navbar>
      <div className="App app-container">
        <Container className="px-4 px-lg-5 pt-5">
          <Row className="gx-4 gx-lg-5 my-2">
            <Card className="mt-3">
              <Card.Body>
                <Card.Title>เลือกประเภทเลย</Card.Title>
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
            </Card>
          </Row>

          <Button
            type="button"
            variant="warning"
            className="mx-3"
            onClick={handleSelectAll}
          >
            ได้หมด
          </Button>
          <Button type="button" variant="light" onClick={handleFastSelection}>
            ขอเป็นมื้อเร็วๆจ้า
          </Button>
        </Container>

        <Container className="px-4">
          <Row className="gx-4 gx-lg-5 my-5">
            <Card style={{ height: "10rem" }}>
              <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                <div>
                  {selectedItem.length === 0 ? (
                    <Card.Title className="mx-3">คิดๆๆ</Card.Title>
                  ) : (
                    <Card.Title className="mx-3">เราขอเสนอ</Card.Title>
                  )}
                </div>

                <div>
                  <Card.Text>
                    {selectedItem.length === 0 ? (
                      <Image
                        variant="bottom"
                        src="https://media.giphy.com/media/mRh4cLIYhrs9G/giphy.gif?cid=ecf05e47utprpx1v57nlyntvjq466or7y54xhjjwe7hgf42h&ep=v1_gifs_search&rid=giphy.gif&ct=g"
                        style={{ width: "50%", height: "50%" }}
                      />
                    ) : (
                      // <h2 className="mx-3 text-center post-heading">
                      //   {selectedItem}
                      // </h2>
                      <div class="post-heading">
                        <h2>{selectedItem}</h2>
                      </div>
                    )}
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Row>
        </Container>

        <Container className="px-4">
          <Button
            variant="outline-success"
            className="mb-3"
            onClick={handleClearSelection}
          >
            ล้างๆ
          </Button>
        </Container>

        <FoodMarquee />
      </div>
    </>
  );
}

export default App;
