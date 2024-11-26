import React, { useState } from "react";

const Todolist = () => {
  const [todo, setTodo] = useState([
    {
      id: 1,
      task: "Doing coding",
      isCompleted: false,
      isDeleted: false,
    },
    {
      id: 2,
      task: "Swimming",
      isCompleted: false,
      isDeleted: false,
    },
    {
      id: 3,
      task: "Driving",
      isCompleted: false,
      isDeleted: false,
    },
  ]);
  const [todoInput, setTodoInput] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    setTodoInput(e.target.value);
  };
  const addTodo = () => {
    let toInput = {
      id: todo.length + 1,
      task: todoInput,
      isCompleted: false,
      isDeleted: false,
    };
    setTodo((prev) => [...prev, toInput]);
    setTodoInput("");
    console.log(todo);
  };
  const handleCheck = (id) => {
    const newList = todo.map((todo) => {
      if (todo.id === id) {
        todo.isCompleted = true;
      }
      return todo;
    });
    setTodo(newList);
  };
  const handleDelete = (id) => {
    const newList = todo.filter((todo) => todo.id !== id);

    setTodo(newList);
  };
  return (
    <div
      class="todolist-container"
      style={{
        width: "600px",
        height: "80vh",
        paddingTop: "5px",
        border: "1px solid black",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <input type="text" value={todoInput} onChange={handleChange} />
        <button onClick={addTodo}>Add</button>
      </div>
      {todo.reverse().map((todo) => {
        return (
          <div
            key={todo.id}
            style={{
              marginTop: "10px",
              border: "1px solid black",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <input
              type="checkbox"
              onClick={() => {
                handleCheck(todo.id);
              }}
              disabled={todo.isCompleted === true ? true : false}
            />
            <p className={todo.isCompleted === true ? "completed" : ""}>
              {todo.task}
            </p>
            <button onClick={() => handleDelete(todo.id)}>X</button>
          </div>
        );
      })}
    </div>
  );
};

export default Todolist;
