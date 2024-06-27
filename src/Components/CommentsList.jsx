import { Component } from "react";
import { ListGroup } from "react-bootstrap";
import SingleComment from "./SingleComment";

class CommentsList extends Component {
  render() {
    return (
      <div>
        <h5>Comments:</h5>
        <ListGroup>
          <SingleComment arrComments={this.props.commenti} />
        </ListGroup>
      </div>
    );
  }
}
export default CommentsList;
