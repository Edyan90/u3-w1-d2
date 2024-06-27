import { Component } from "react";
import CommentsList from "./CommentsList";
import AddComments from "./AddComments";

class CommentArea extends Component {
  state = {
    comments: [],
  };

  fetchComments = () => {
    fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjdkNTVhYTNhMzhjYjAwMTVmNjNjZWIiLCJpYXQiOjE3MTk0ODk5NjMsImV4cCI6MTcyMDY5OTU2M30.16nMX_VbXAW_QQwS3bouQXrfEJ4NsCBR0NpuVZuH4TA",
      },
    })
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("errore nel reperimento dati");
        }
      })
      .then((data) => {
        console.log(data);
        this.setState({ comments: data });
      })
      .catch((err) => alert(err));
  };
  componentDidMount() {
    this.fetchComments();
  }
  render() {
    return (
      <>
        {console.log(this.props.bookID)}
        <CommentsList commenti={this.state.comments} idLibro={this.props.bookID} />
        {/* <AddComments /> */}
      </>
    );
  }
}

export default CommentArea;
