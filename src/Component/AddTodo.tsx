import React, { useContext, useEffect, useRef, useState } from 'react'
import { AppCont } from '../ContextFol/AppCont'
import TodoView from './TodoView'
import { v4 as uuidv4 } from "uuid";


let col=30
let row=10
const AddTodo: React.FC = () => {

    const context = useContext(AppCont);

    if (!context) {
        throw new Error("AppCont must be used inside ConextProvider");
    }
    const { getAllTodo, setAllTodo, getUpdateTodo, setUdpateTodo } = context
    const messageRef = useRef<HTMLDivElement>(null)
    const [getTodoTitle, setTodoTitle] = useState<string|undefined>(undefined)
    const [getTodoContent, setTodoContent] = useState<string|undefined>(undefined)

        const AddTodoFun = (e: React.MouseEvent<HTMLButtonElement>) => {
            const button = e.target as HTMLButtonElement;
            if (button.innerHTML.trim() === "Edit") {
            setAllTodo(todos => {
                return todos
                    ? todos.map((todo) => {
                        if (String(todo.id) === String(getUpdateTodo?.id)) {
                            return { ...todo, todoTitle: getTodoTitle, todoContent: getTodoContent }
                        }
                        return todo
                    }) : null

            })
            setUdpateTodo(null)
        }
        else {
            setAllTodo((prev) => {
                return prev
                    ? [...prev, { todoTitle: getTodoTitle, todoContent: getTodoContent, isCompleted: false, id: uuidv4() }]
                    : [{ todoTitle: getTodoTitle, todoContent: getTodoContent, isCompleted: false, id: uuidv4() }]
            })

        }
        setTodoTitle("")
        setTodoContent("")
    }



    useEffect(() => {
        console.log(messageRef.current)
        messageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [getAllTodo])

    useEffect(() => {
        setTodoTitle(getUpdateTodo?.todoTitle)
        setTodoContent(getUpdateTodo?.todoContent)
    }, [getUpdateTodo])
    return <>
        <div style={{
            width: "60%",
            margin: '0 auto'
        }}>
            <div style={{
                width: "40%",
                display: 'flex',
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                gap: "20px",
                margin: "0 auto"
            }}>
                <input style={{
                    width: "100%",
                    padding: "6px 9px"
                }} type="text" name="" id="" onChange={(e) => setTodoTitle(e.target.value)} value={getTodoTitle} placeholder='Title' />
                <textarea name="" id="" placeholder='Discription....' onChange={(e) => setTodoContent(e.target.value)} value={getTodoContent} cols={col} rows={row}
                    style={{ resize: 'none', width: "100%", padding: "6px 9px", fontFamily: "sans-serif" }} ></textarea>
                <button style={{
                    padding: "5px 10px",
                    fontWeight: "bold",
                    cursor: "pointer"
                }} onClick={(e) => AddTodoFun(e)} > {getUpdateTodo ? "Edit" : "Add Todo"} </button>
            </div>
            <div style={{ width: "100%", marginTop: '20px' }}>
                {
                    getAllTodo && getAllTodo.map((elem) => {
                        return <TodoView key={elem.id} elem={elem} id={elem.id} ></TodoView>
                    })
                }
            </div>
        </div>
        <div ref={messageRef}></div>
    </>
}

export default AddTodo