import React, {useState} from "react"

function InputArea(props) {
    const [newItem, addItem] = useState("")

    function handleChange(event){
        addItem(event.target.value)
    }

    return (<div className="form">
        <input onChange={handleChange} type="text" value={newItem} />
        <button onClick={()=>{
            props.onNewItemAdd(newItem)
            addItem("")
        }} >
            <span>Add</span>
        </button>
    </div>)
}

export default InputArea