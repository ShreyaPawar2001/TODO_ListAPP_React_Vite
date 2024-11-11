import { useState } from "react";
import React from "react";

function ToDoEdit({ editTodo ,task }) {
    const [value, setValue] = useState(task.task);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value.trim()) { // Check if input is not empty
            editTodo(value, task.id ); // Pass the input value to addToDo in Header
            setValue("");    // Clear the input field after submission
        }
    };

    return (
        <>
            <form className="ToDoForm" onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="todo-input"
                    placeholder="Update task"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <button type="submit" className="todo-btn">Update task</button>
            </form>
        </>
    );
}

export default ToDoEdit;
