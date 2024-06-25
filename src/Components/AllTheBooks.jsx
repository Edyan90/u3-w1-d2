import Card from "react-bootstrap/Card";
import fantasy from "../data/books/fantasy.json";
import { Component } from "react";
import { Badge, Button, Col, Container, Row } from "react-bootstrap";
import MyNav from "./MyNav";

class AllTheBooks extends Component {
  state = {
    categoria: fantasy,
  };
  render() {
    return (
      <Container fluid="md" className="mt-5">
        <Row
          className="justify-content-between gap-5
        "
        >
          {fantasy.map((libro) => {
            return (
              <Col xs={6} md={3} xl={3}>
                <Card style={{ width: "18rem", height: "40rem" }}>
                  <Card.Img variant="top" src={libro.img} />
                  <Card.Body>
                    <Card.Title>{libro.title}</Card.Title>
                    <Card.Text>{libro.category}</Card.Text>
                  </Card.Body>
                  <div className="d-flex justify-content-between align-items-center mt-auto mb-2 mx-3">
                    <Button variant="primary">Buy</Button>
                    <Badge bg="danger">{libro.price} €</Badge>
                  </div>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}
export default AllTheBooks;
