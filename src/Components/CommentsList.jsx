import { Component } from "react";
import { ListGroup } from "react-bootstrap";
/* import SingleComment from "./SingleComment"; */

class CommentsList extends Component {
  logdeicommenti = () => {
    console.log(this.Commenti);
  };
  componentDidMount() {
    this.logdeicommenti();
  }
  render() {
    return (
      <div>
        <h5>Comments:</h5>
        <ListGroup>{/* {<SingleComments /> */}</ListGroup>
      </div>
    );
  }
}
export default CommentsList;
