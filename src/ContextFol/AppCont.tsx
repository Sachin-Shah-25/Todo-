import React, { useState } from "react";


interface PropsChildren {
    children: React.ReactNode
}
interface TodoData{
    todoTitle:string,
    todoContent:string,
    isCompleted:boolean,
    id:string
}


interface ReactHooksExp{
    getAllTodo:TodoData[]|null,
    getUpdateTodo:TodoData|null,
    setAllTodo:React.Dispatch<React.SetStateAction<TodoData[]|null>>
    setUdpateTodo:React.Dispatch<React.SetStateAction<TodoData|null>>
}
export const AppCont =React.createContext<ReactHooksExp | null>(null)
export const ContextProvider: React.FC<PropsChildren> = (props) => {
    const [getAllTodo,setAllTodo]=useState<TodoData[]|null>([{todoTitle:"one",todoContent:"two",isCompleted:false}])
    const [getUpdateTodo,setUdpateTodo]=useState<TodoData|null>(null)
    return (
        <AppCont.Provider value={{getAllTodo,setAllTodo,getUpdateTodo,setUdpateTodo}}>
            {props.children}
        </AppCont.Provider>
    )
}

