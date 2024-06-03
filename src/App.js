
import React from 'react';
import Todo from "./components/Todo";
import { useEffect, useState } from "react";
import { addTodo, getAllTodo, updateTodo, deleteTodo } from "./utils/HandleApi";

function App() {
  const [todo, setTodo] = useState([]);
  const [text, setText] = useState("");
  const [update, setUpdate] = useState(false);
  const [todoid, setTodoid] = useState("");

  useEffect(() => {
    getAllTodo(setTodo);
  }, []);

  const updateMode = (_id, text) => {
    setUpdate(true);
    setText(text);
    setTodoid(_id);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Todo List</h1>
        <div className="top">
          <input
            type="text"
            className="text"
            placeholder="Add Tasks..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div
            className="add"
            onClick={update
              ? () => updateTodo(todoid, text, setText, setTodo, setUpdate)
              : () => addTodo(text, setText, setTodo)}
          >
            {update ? "Update" : "Add"}
          </div>
        </div>
        <div className="list">
          {todo.map((item) => (
            <Todo
              key={item._id}
              text={item.text}
              updateTodo={() => updateMode(item._id, item.text)}
              deleteTodo={() => deleteTodo(item._id, setTodo)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
