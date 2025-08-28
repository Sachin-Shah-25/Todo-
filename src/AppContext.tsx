import React, { createContext, useState } from "react"




interface userType{
    name:string,
    age:number,
    gender:string,
    isAvailable:boolean
}
type check=boolean
interface PropsChildren{
    children:React.ReactNode
}

interface AppContextType{
    getCount:number,
    setUser:React.Dispatch<React.SetStateAction<userType[]|null >>
    getUser:userType[] | null,
    setCount:React.Dispatch<React.SetStateAction<number>>
}


const AppContext=React.createContext<AppContextType | null>(null)


const ContextProvider:React.FC<PropsChildren>=(props)=>{
    const [getCount,setCount]=useState<number>(0)
    const [getUser,setUser]=useState<userType[]|null>(null)
    
    const [IsValid,setIsValid]=useState<check>(false)
    return (
        <AppContext.Provider value={{getUser,getCount,setUser,setCount}}>
            {props.children}
        </AppContext.Provider>
    )
}

export default ContextProvider