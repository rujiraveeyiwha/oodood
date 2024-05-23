import React from "react";
import { Form, Col, Row, Stack } from "react-bootstrap";

function SelectBox() {
  return (
    <Form>
      <Form.Group as={Row} className="mb-3 mt-3">
        <Col>
          <Stack gap={2} className="col-md-5 mx-auto">
            <Form.Check label="เส้น" className="checkbox" />
            <Form.Check label="ข้าว" className="checkbox" />
            <Form.Check label="ทานเล่น" className="checkbox" />
            <Form.Check label="แซ่บ" className="checkbox" />
          </Stack>
        </Col>
      </Form.Group>
    </Form>
  );
}

export default SelectBox;
