import React from "react";
import "./ListTodo.scss";
import AddTodo from "./AddTodo";
import { toast } from "react-toastify";
import Color from "../HOC/Color";
class ListTodo extends React.Component {
  state = {
    ListTodos: [
      {
        id: "todo1",
        title: "Doing homework",
      },
      {
        id: "todo2",
        title: "Play game",
      },
      {
        id: "todo3",
        title: "Clean the house",
      },
    ],
    editTodo: {},
  };

  addNewTodo = (todo) => {
    this.setState({
      ListTodos: [...this.state.ListTodos, todo],
    });

    toast.success("Add success");
  };

  handleDeleteTodo = (todo) => {
    let currentTodos = this.state.ListTodos;
    currentTodos = currentTodos.filter((item) => item.id !== todo.id);

    this.setState({
      ListTodos: currentTodos,
    });
    toast.success("Delete success");
  };

  handleEditTodo = (todo) => {
    let { editTodo, ListTodos } = this.state;
    let isEmptyObj = Object.keys(editTodo).length === 0;

    //Save
    if (isEmptyObj === false && editTodo.id === todo.id) {
      let ListTodosCopy = [...ListTodos];
      let objIndex = ListTodosCopy.findIndex((item) => item.id === todo.id);
      ListTodosCopy[objIndex].title = editTodo.title;

      this.setState({
        ListTodos: ListTodosCopy,
        editTodo: {},
      });
      toast.success("Update Todo success");
      return;
    }
    //Edit
    this.setState({
      editTodo: todo,
    });
  };

  handleOnchangeEditTodo = (event) => {
    let editTodoCopy = { ...this.state.editTodo };
    editTodoCopy.title = event.target.value;
    this.setState({
      editTodo: editTodoCopy,
    });
  };
  render() {
    let { ListTodos, editTodo } = this.state;

    let isEmptyObj = Object.keys(editTodo).length === 0;

    return (
      <>
        <p>Simple TODO App with React.JS</p>
        <div className="list-todo-container">
          <AddTodo addNewTodo={this.addNewTodo} />
          <div className="list-todo-content">
            {ListTodos &&
              ListTodos.length > 0 &&
              ListTodos.map((item, index) => {
                return (
                  <div className="todo-child" key={item.id}>
                    {isEmptyObj === true ? (
                      <span>
                        {index + 1} - {item.title}
                      </span>
                    ) : (
                      <>
                        {editTodo.id === item.id ? (
                          <span>
                            {index + 1} -{" "}
                            <input
                              value={editTodo.title}
                              onChange={(event) =>
                                this.handleOnchangeEditTodo(event)
                              }
                            />
                          </span>
                        ) : (
                          <span>
                            {index + 1} - {item.title}
                          </span>
                        )}
                      </>
                    )}
                    <button
                      className="edit"
                      onClick={() => this.handleEditTodo(item)}
                    >
                      {isEmptyObj === false && editTodo.id === item.id
                        ? "Save"
                        : "Edit"}
                    </button>
                    <button
                      className="delete"
                      onClick={() => this.handleDeleteTodo(item)}
                    >
                      Delete
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
      </>
    );
  }
}

export default Color(ListTodo);
