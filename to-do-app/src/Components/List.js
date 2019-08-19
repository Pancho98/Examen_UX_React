import React, { Component } from "react";
import Item from "./Item";
import { Container, Row, Col } from "reactstrap";
class List extends Component {
  render() {
    return (
      <Container fluid className="list">
        {this.props.filteredData.list.map(item => {
          return (
            <Row>
              <Col className="item">
                <Item item={item} />
              </Col>
            </Row>
          );
        })}
      </Container>
    );
  }
}

export default List;
