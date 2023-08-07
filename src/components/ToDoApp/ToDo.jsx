import React, { Fragment, useContext } from "react"
import { ContextApi } from "./ToDoApp"

export default function Todo(props) {
    const { todos, todoDeleteHandler, todoStatusChangeHandler } = useContext(
        ContextApi
    )
    return (
        <Fragment>
            {todos.map(todo => {
                return (
                    <div key={todo.id} className="list">
                        <span>
                            {todo.status ? <del>{todo.task}</del> : todo.task}
                        </span>
                        <button
                            onClick={() => todoStatusChangeHandler(todo.id)}
                            title="Change Status"
                        >
                            {todo.status ? "Cancle" : "Done"}
                        </button>
                        <button
                            onClick={() => todoDeleteHandler(todo.id)}
                            title="Delete"
                        >
                            Delete
                        </button>

                    </div>
                )
            })}
        </Fragment>
    )
}
