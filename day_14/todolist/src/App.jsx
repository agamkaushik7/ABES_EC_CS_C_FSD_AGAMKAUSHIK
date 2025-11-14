import { useState } from "react"
import InputToDo from "./components/InputToDo"
import "./App.css"

function App() {
  const [todoList, setTodoList] = useState([]);
  
  const inputHandler = (inputValue) => {
    setTodoList([...todoList, inputValue]);
  }
  
  const deleteHandler = (index) => {
    const newList = [...todoList];
    newList.splice(index, 1);
    setTodoList([...newList]);
  }
  
  const updateHandler = (index, data) => {
    // Add edit functionality here
  }
  
  return (
    <div className="todo-list">
      <h2>TODO LIST</h2>
      {todoList.map((data, index) =>
        <li key={index}>
          {data}
          <div>
            <button className="edit-btn" onClick={() => updateHandler(index, data)}>EDIT</button>
            <button className="delete-btn" onClick={() => deleteHandler(index)}>DEL</button>
          </div>
        </li>)}
      <InputToDo inputHandler={inputHandler} />
    </div>
  )
}

export default App