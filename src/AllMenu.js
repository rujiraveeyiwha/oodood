import { useState } from "react";
import { Col, Row, Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Menu from "./Assets/Menu.json";

function AllMenu() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function getCategoryNameInThai(category) {
    const categoryNames = {
      noodles: "เส้น",
      rice: "ข้าว",
      spicy: "แซ่บ",
      fast: "ขอเร็วๆจ้า",
      easy: "ทานเล่น",
    };
    return categoryNames[category] || category;
  }

  return (
    <>
      <Button onClick={handleShow} className="floating-btn">
        🍴
      </Button>

      {/* <Button
        onClick={handleShow}
        className="all-menu-text text-white"
        variant="light"
      >
        เมนูทั้งหมด
      </Button> */}

      <Modal
        show={show}
        onHide={handleClose}
        size="sm"
        className="custom-modal"
      >
        <Modal.Header closeButton>เมนูทั้งหมด</Modal.Header>
        <Modal.Body className="modal-body-scrollable">
          {" "}
          {Object.keys(Menu).map((category) => (
            <Row key={category}>
              <Col>
                <div className="highlight-text-allmenu">
                  {getCategoryNameInThai(category)}
                </div>
                <ul>
                  {Menu[category].map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </Col>
            </Row>
          ))}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AllMenu;
