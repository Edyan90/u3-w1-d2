import { Component } from "react";
import { Col, Card, Button, Badge } from "react-bootstrap";

class SingleBook extends Component {
  state = {
    selected: false,
  };
  selezionato = () => {
    this.setState({ selected: !this.state.selected });
  };
  render() {
    return (
      <Col xs={12} md={5} lg={5} xl={3}>
        {console.log(this.props.ciccia)}
        <Card
          style={{
            width: "18rem",
            height: "42rem",
            border: this.state.selected ? "3px solid crimson" : "1px solid grey",
          }}
          onClick={this.selezionato}
        >
          <Card.Img variant="top" src={this.props.ciccia.img} />
          <Card.Body>
            <Card.Title>{this.props.ciccia.title}</Card.Title>
            <Card.Text>{this.props.ciccia.category}</Card.Text>
          </Card.Body>
          <div className="d-flex justify-content-between align-items-center mt-auto mb-2 mx-3">
            <Button variant="primary">Buy</Button>
            <Badge bg="danger">{this.props.ciccia.price} €</Badge>
          </div>
        </Card>
      </Col>
    );
  }
}
export default SingleBook;
