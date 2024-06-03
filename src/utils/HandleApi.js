
import axios from 'axios'
const baseUrl="https://mern-stack-todolist-backend.onrender.com"


const getAllTodo=(setTodo)=>{
    axios.get(baseUrl)
    .then(({data})=>{
        console.log(data);
        setTodo(data);
    })
    .catch(err=>console.log(err))
}

const addTodo=(text,setText,setTodo)=>{
    axios.post("https://mern-stack-todolist-backend.onrender.com/add",{text})
    .then(({data})=>{
        console.log(data);
        setText("")
        getAllTodo(setTodo);
    })
    .catch(err=>console.log(err))
}

const updateTodo=(todoid,text,setText,setTodo,setUpdate)=>{
    axios.post("https://mern-stack-todolist-backend.onrender.com/update",{_id:todoid,text})
    .then(({data})=>{
        console.log(data);
        setText("")
        setUpdate(false)
        getAllTodo(setTodo);
    })
    .catch(err=>console.log(err))
}

const deleteTodo=(todoid,setTodo)=>{
    axios.post("https://mern-stack-todolist-backend.onrender.com/delete",{_id:todoid})
    .then(({data})=>{
        console.log(data);
        getAllTodo(setTodo);
    })
    .catch(err=>console.log(err))
}


export {getAllTodo,addTodo,updateTodo,deleteTodo}