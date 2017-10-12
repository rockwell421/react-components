/*
This is an example of using re-usable component container to fetch comments and authors
*/

class CommentList extends React.Component {
  constructor() {
    super();
    this.state = { comments: [] };
  }
  componentDidMount() {
    fetchSomeComments(comments =>
      this.setState({ comments: comments }));
  }
  render() {
    return (
      <ul>
        {this.state.comments.map(c => (
          <li>{c.body}—{c.author}</li>
        ))}
      </ul>
    );
  }
}

// This is just a placeholder for a real request
const fetchSomeComments = cb =>
  cb([
    { author: "Chan", body: "You look nice today." },
    { author: "You", body: "I know, right?!" },
    { author: "Dude", body: "Wowza!" },
    { author: "Dudette", body: "Right?!" }
  ]);

ReactDOM.render(
  <CommentList />,
  document.getElementById("root")
);
