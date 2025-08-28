import React, { useContext } from "react"
import { AppCont } from "../ContextFol/AppCont"

interface TodoData {
    todoTitle: string,
    todoContent: string,
    isCompleted: boolean
}

type elem = TodoData

const TodoView: React.FC<elem> = ({ elem, id }) => {


    const getContext = useContext(AppCont)
    const changeFun = (e: React.ChangeEvent<HTMLSelectElement>) => {
        switch (e.target.value) {
            case "completed":
                getContext?.setAllTodo((prev) => {
                    const arr = prev ? prev.map((todo) => {
                        return todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
                    }) :
                        null
                    console.log(arr)
                    return arr

                })
                return
            case "remove":
                getContext?.setAllTodo((todos) => {
                    return todos ? todos.filter((todo) => {
                        return todo.id != id
                    }) : null
                })
                return
            case "edit":
                getContext?.setUdpateTodo(elem)
                return
            default:
                return
        }
    }

    return <>
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            border: '2px solid black',
            padding: '0px 20px',
            marginTop: "30px",
            pointerEvents: elem.isCompleted ? "none" : "auto",
            opacity: elem.isCompleted ? "0.6" : "1",
            borderRadius: "5px"
        }}  >
            <div>
                <h1 style={{
                    marginTop: '0px',
                    marginBottom: '5px'
                }}>{elem.todoTitle}</h1>
                <p style={{
                    marginTop: '0',
                    fontSize: '.9rem'
                }}>{elem.todoContent} Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quas unde temporibus perferendis nulla facilis recusandae dolorum neque. Modi at ab tempore veritatis quo, blanditiis numquam assumenda deleniti corporis distinctio? </p>

            </div>
            <select name="options" id="" defaultValue={"update"} onChange={(e) => changeFun(e)} >
                <option value="update">Update</option>
                <option value="edit">Edit</option>
                <option value="completed">Completed</option>
                <option value="remove">Remove</option>
            </select>
        </div>
    </>
}

export default TodoView