import React, { useState } from "react";

import "../App.css";


function Todo() {
  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask !== "") {
      setTask((prevTasks) => [...prevTasks, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
     setTask((prevTasks) => prevTasks.filter((_, i) => i !== index));
    
  }

  return (
    <div className="to-do-list">
      <h1>To-Do-List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="add-button" onClick={addTask}>
          Add
        </button>
      </div>
      <div className="list">

      
      <ol>
        {task.map((taskItem, index) => (
          <li key={index}>
            <div>{taskItem}
            <button
              className="delete-button"
              onClick={() => deleteTask(index)}
            >
              Delete
            </button>
            <button className="edit-button">
                Edit

            </button>
            </div>
          </li>
        ))}
      </ol>
      </div>
    </div>
  );
}

export default Todo;
