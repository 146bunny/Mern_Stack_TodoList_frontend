import React from 'react'
import {BiEdit} from "react-icons/bi"
import {AiFillDelete} from "react-icons/ai"

const Todo = ({text,updateTodo,deleteTodo}) => {
  return (
    <div className="todo">
        <div className="text">
            {text}
            <div className="icons">
                <BiEdit className='icon' onClick={updateTodo} />
                <AiFillDelete className='icon' onClick={deleteTodo} />
            </div>
        </div>
    </div>
  )
}

export default Todo