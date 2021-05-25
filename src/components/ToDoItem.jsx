import React from "react"

function ToDoItem(props){
    return <li onClick={ () => {
        props.deleteItem(props.id)
        }} >{props.newToDoItem}</li>
}

export default ToDoItem