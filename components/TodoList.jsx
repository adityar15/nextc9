"use client"
import { createTodo, getTodos } from '@/actions/todo'
import React, { useEffect, useState } from 'react'

export default function TodoList() {

    const [todos, setTodos] = useState([])

    const [todoTitle, setTodoTitle] = useState('')

    function addTodo(e) {
        e.preventDefault()
        setTodos([
            ...todos,
            {
                title: todoTitle
            }
        ])

        createTodo(todoTitle).then(data => console.log("data", data))
    }

    useEffect(() => {
        getTodos().then(data => setTodos(data))
    }, [])
   

    return (
        <div>
            <form onSubmit={addTodo} className="flex gap-2 items-center">
                <input type="text" value={todoTitle} onInput={
                    (e) => setTodoTitle(e.target.value)
                } placeholder='Add todo' className="px-4 py-2 border border-gray-700 rounded" />

                <button className="bg-red-500 text-white rounded px-4 py-2">Add Todo</button>
            </form>

            <ul>
                {
                    todos.map((t, i) => (
                        <li key={i}>
                            {t.title}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
