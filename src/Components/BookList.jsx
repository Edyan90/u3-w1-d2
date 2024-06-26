import { Component } from "react";
import { Container, Row, Form, Col, Alert } from "react-bootstrap";
import SingleBook from "./SingleBook";
import fantasy from "../data/books/fantasy.json";
import history from "../data/books/history.json";
import horror from "../data/books/horror.json";
import romance from "../data/books/romance.json";
import scifi from "../data/books/scifi.json";

class BookList extends Component {
  state = {
    categoria: fantasy,
    formValue: {
      searchForm: "",
    },
  };

  handleFormSubmit = (event) => {
    event.preventDefault(); // Previene il comportamento predefinito del submit
  };
  render() {
    const { categoria, formValue } = this.state;
    const { searchForm } = formValue;
    const filteredBooks = searchForm //Se questa è vera ovvero contiene un valore allora creami i libri filtrati altrimenti la categoria selezionata
      ? categoria.filter((libro) => libro.title.toLowerCase().includes(searchForm.toLowerCase()))
      : categoria;
    return (
      <Container fluid="md" className="mt-5">
        <div>
          <h3>Scegli la tua categoria preferita:</h3>
        </div>
        <div className="d-flex justify-content-evenly">
          <button className="btn btn-info me-5 mb-5" onClick={() => this.setState({ categoria: fantasy })}>
            fantasy
          </button>
          <button className="btn btn-info me-5 mb-5" onClick={() => this.setState({ categoria: history })}>
            history
          </button>
          <button className="btn btn-info me-5 mb-5" onClick={() => this.setState({ categoria: horror })}>
            horror
          </button>
          <button className="btn btn-info me-5 mb-5" onClick={() => this.setState({ categoria: romance })}>
            romance
          </button>
          <button className="btn btn-info me-5 mb-5" onClick={() => this.setState({ categoria: scifi })}>
            scifi
          </button>
        </div>
        <div>
          <h6>cerca il titolo nella categoria scelta:</h6>
          <Form inline className="mb-5">
            <Row>
              <Col xs="auto">
                <Form.Control
                  onSubmit={this.handleFormSubmit}
                  type="text"
                  placeholder="Search"
                  className=" mr-sm-2"
                  value={this.state.formValue.searchForm}
                  onChange={(evento) => {
                    this.setState({
                      formValue: { ...this.state.formValue, searchForm: evento.target.value },
                    });
                  }}
                />
              </Col>
            </Row>
          </Form>
        </div>
        <Row className="justify-content-between gap-5">
          {searchForm && filteredBooks.length === 0 ? (
            <Alert variant="danger"> Mi dispiace, titolo non trovato</Alert>
          ) : (
            filteredBooks.map((newLibro) => <SingleBook key={newLibro.asin} ciccia={newLibro} />)
          )}
          {/* this.state.categoria.map((libro) => <SingleBook category={libro} )/>*/}
        </Row>
      </Container>
    );
  }
}
export default BookList;
