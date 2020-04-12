import React from 'react';
import ReactDOM from "react-dom";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const items = [
  {
    task: "Make a todo list",
    id: 1,
    completed: false}
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      items
    }
  }

  addItem = (e, item) => {
    e.preventDefault();

    const newItem = {
      task: item,
      id: Date.now(),
      completed: false
    }

    this.setState({
      items: [...this.state.items, newItem]
    });};

    toggleItem = itemId => {
      this.setState ({
        items: this.state.items.map(item => {
          if(itemId === item.id) {
            return {
              ...item,
              completed: item.completed
            };
          }
          return item;
        })
      });
    }

    clearCompleted = e => {
      e.preventDefault();
      this.setState({
        items: this.state.items.filter(item => !item.completed)
      })
    }
    render() {
      return (
        <div className="App">
          <div className="header">
          <h2>Welcome To Your Todo List</h2>
          <TodoForm addItem={this.addItem} />
        </div>
        <TodoList
          items={this.state.items}
          toggleItem={this.toggleItem}
          clearCompleted={this.clearCompleted}
          />
        </div>
      );
    }
  }


  const rootElement = document.getElementById("root");
  ReactDOM.render(<App />, rootElement);

