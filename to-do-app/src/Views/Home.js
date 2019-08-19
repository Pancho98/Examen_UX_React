import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Button
} from "reactstrap";
import { FaSearch, FaPlus } from "react-icons/fa";
import List from "../Components/List";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      title: "",
      body: "",
      date: {},
      data: JSON.parse(localStorage.getItem("data")),
      filteredData: JSON.parse(localStorage.getItem("data"))
    };
  }
  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleQuery = e => {
    let data = JSON.parse(JSON.stringify(this.state.data));
    data.list = data.list.filter(item => item.title.includes(e.target.value));
    this.setState({ filteredData: data });
  };
  render() {
    return (
      <Container className="RealContainer">
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <Form
            onSubmit={e => {
              e.preventDefault();
              let item = {
                title: this.state.title,
                body: this.state.body,
                date: new Date()
              };
              let data = this.state.data;
              data.list = [...data.list, item];
              localStorage.setItem("data", JSON.stringify(data));
              this.setState({ data, filteredData: data });
              this.toggle();
            }}
          >
            <ModalHeader toggle={this.toggle}>Crear item</ModalHeader>
            <ModalBody>
              <FormGroup>
                <Label>Titulo</Label>
                <Input
                  required
                  type="text"
                  name="title"
                  onChange={this.handleChange}
                  placeholder="Pasar por el super"
                />
              </FormGroup>
              <FormGroup>
                <Label>Cuerpo</Label>
                <Input
                  required
                  type="textarea"
                  name="body"
                  onChange={this.handleChange}
                  placeholder={"Huevos\nJamon"}
                />
              </FormGroup>
            </ModalBody>
            <ModalFooter>
              <Button color="success">Crear</Button>
              <Button onClick={this.toggle} color="danger">
                Cancelar
              </Button>
            </ModalFooter>
          </Form>
        </Modal>
        <h1>
          Pendientes{" "}
          <FaPlus
            onClick={this.toggle}
            color="white"
            size={32}
            style={{
              backgroundColor: "green",
              padding: "5px",
              cursor: "pointer",
              borderRadius: "100%"
            }}
          />
        </h1>
        <Row>
          <Col>
            <InputGroup>
              <Input onChange={this.handleQuery} placeholder="Busqueda" />
              <InputGroupAddon addonType="append">
                <InputGroupText>
                  <FaSearch />
                </InputGroupText>
              </InputGroupAddon>
            </InputGroup>
          </Col>
        </Row>
        <List filteredData={this.state.filteredData} />
      </Container>
    );
  }
}

export default Home;
