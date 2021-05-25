import React, { useState } from "react";
import InputArea from "./InputArea";
import ToDoItem from "./ToDoItem"

function App() {
  const [items, setItem] = useState([])

  function onAdd(newItem){
    setItem(prevItems => [...prevItems, newItem])
  }

  function deleteTask(id){
    setItem((prevItems) => {
      return prevItems.filter((item, index) => {
        return id!==index
      })
    } )
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
     <InputArea onNewItemAdd={onAdd} />
      <div>
        <ul>
          {items.map((item, index) => (<ToDoItem key={index} id={index} newToDoItem={item} deleteItem={deleteTask} />))}
        </ul>
      </div>
    </div>
  );
}

export default App;