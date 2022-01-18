import { API } from "aws-amplify";
import React from "react";
import { createTodo, getTodo } from "../lib/todos";

class Home extends React.Component {
  apiName = "todoApi";
  path = "/todos";

  constructor(props) {
    super(props);

    this.state = {
      todoItem: "",
      todoItems: [],
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.refresh = this.refresh.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      todoItem: event.target.value,
    });
  }

  handleClick() {
    this.setState({ todoItem: "" });

    createTodo(this.props.user.username, this.state.todoItem)
      .then(() => {
        this.refresh();
      })
      .catch((error) => console.log("Error while creating: ", error));
  }

  refresh() {
    console.log("### CALLED REFRESH ###");
    getTodo()
      .then((result) => this.setState({ todoItems: result }))
      .catch((error) => console.log("Error: ", error));
  }

  componentDidMount() {
    this.refresh();
  }

  render() {
    return (
      <main>
        <h2>TODO</h2>
        <div>
          {this.state.todoItems.map((t) => (
            <p key={t.id}>
              {t.id} ; {t.item} ; {t.user} ; {t.done}
            </p>
          ))}
        </div>
        <div>#############</div>
        <div>Add Item </div>
        <div>
          <input
            type="text"
            name="item"
            id="item"
            onChange={this.handleInputChange}
            value={this.state.todoItem}
          />
          <button onClick={() => this.handleClick()}>Create</button>
        </div>
      </main>
    );
  }
}

export default Home;
