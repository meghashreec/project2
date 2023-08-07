import React from "react"
import "./ToDoApp.css"
import TodoList from "./ToDoList"
export const ContextApi = React.createContext()
export default function ToDoApp() {
    const defaultTodos = [
        { task: "Default task, can't be deleted", id: 1, status: 0 }
    ]
    const [todos, setTodos] = React.useState(defaultTodos)
    const todoCreateHandler = todoNew => {
        setTodos([{ ...todoNew }, ...todos])
    }
    const todoDeleteHandler = id => {
        setTodos(currentTodos => {
            let todoRemains = currentTodos.filter(todo => {
                return todo.id !== id || todo.id === 1
            })
            return todoRemains
        })
    }
    const todoStatusChangeHandler = id => {
        setTodos(currentTodos => {
            let todoRemains = currentTodos.map(todo => {
                if (todo.id === id) {
                    return { ...todo, status: !todo.status }
                }
                return { ...todo }
            })
            return todoRemains
        })
    }
    return (
        <ContextApi.Provider
            value={{
                todos,
                todoCreateHandler,
                todoDeleteHandler,
                todoStatusChangeHandler
            }}
        >
            <h2 className="heading"> ToDo List </h2>
            <TodoList/>
        </ContextApi.Provider>
    )
}
