import ToDoList from "./To-Do-List";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import ToDoItem from "./TO-DOItem";
import ToDoEdit from "./ToDoEdit";

function Header() {
    const [todos, setTodos] = useState([]);

    const addToDo = (task) => {
        const newTodo = { id: uuidv4(), task: task, completed: false, isEditing: false };
        setTodos([...todos, newTodo]);
    };

    // Log todos array every time it updates
    useEffect(() => {
        console.log(todos);
    }, [todos]);

    

    const deleteTodo = (id)=>{
        setTodos(todos.filter(todo => todo.id !==id))
    }

    const editTodo =(id) =>{
        setTodos(todos.map(todo => todo.id === id ?{...todo,isEditing: !todo.isEditing} :todo))
    }

    const editTask = (task, id) => {
        setTodos(
          todos.map((todo) =>
            todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
          )
        );
      };

    return (
        <>
            <div className="TodoWrapper">
                <h1>Get Things Done!</h1>
                <ToDoList addToDo={addToDo} />
                {/* <ToDoEdit/> */}
                {todos.map((todo, index)=>(
                    todo.isEditing ?(
                        <ToDoEdit key={todo.id} editTodo={editTask} task={todo}/>
                    ):(
                        <ToDoItem task={todo} key={index} deleteTodo={deleteTodo} 
                        editTodo={editTodo}/>
                    )
                    // <ToDoItem task={todo} key={index}/>


                ))}
            </div>
        </>
    );
}

export default Header;
