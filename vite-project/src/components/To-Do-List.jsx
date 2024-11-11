import { useState } from "react";
import React from "react";

function ToDoList({ addToDo }) {
    const [value, setValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value.trim()) { // Check if input is not empty
            addToDo(value); // Pass the input value to addToDo in Header
            setValue("");    // Clear the input field after submission
        }
    };

    return (
        <>
            <form className="ToDoForm" onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="todo-input"
                    placeholder="What is the task?"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <button type="submit" className="todo-btn">Add task</button>
            </form>
        </>
    );
}

export default ToDoList;
