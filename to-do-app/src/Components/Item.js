import React, { Component } from "react";
import { Card, CardHeader, CardBody, CardFooter, Row, Col } from "reactstrap";
import { FaTrash, FaCheck } from "react-icons/fa";

class Item extends Component {
  render() {
    return (
      <Card>
        <CardHeader>{this.props.item.title}</CardHeader>
        <CardBody>
          {this.props.item.body}
          <br />
          Fecha de creacion: {this.props.item.date.toLocaleString()}
        </CardBody>
        <CardFooter>
          <Row>
            <Col
              md={6}
              style={{
                flex: 1,
                flexDirection: "column",
                alignItems: "flex-start"
              }}
            >
              <FaCheck color="green" />
            </Col>
            <Col
              md={6}
              style={{
                flex: 1,
                flexDirection: "column",
                alignItems: "flex-end"
              }}
            >
              <FaTrash color="red" />
            </Col>
          </Row>
        </CardFooter>
      </Card>
    );
  }
}

export default Item;
