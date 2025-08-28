// import React, { useReducer } from "react"
// import Btn from "./Btn"

// type State={count:number}
// type Action={type:"Increment"} | {type:"Decrement"}
// let initialSate:State={count:0}
// function reducer(count:State,action:Action):State{
// switch (action.type) {
//     case "Increment":
//         return {count:count.count+1}

//     case "Decrement":
//         return {count:count.count-1}
//     default:
//         return count;
// }
// }
// const Home: React.FC = () => {
//     const [state,dispatch]=useReducer(reducer,initialSate)
//     return <>
//         <h1>Home</h1>
//         <Btn  text={"First"} check={false} />
//         <button onClick={()=> dispatch({type:"Increment"})} >Add</button>
//         <button onClick={()=> dispatch({type:"Decrement"})} >Minus</button>
//         <span>{state.count}</span>
//     </>
// }

// export default Home



import React, { useReducer } from "react"
import Btn from "./Btn"

type btnState={text:string,check:boolean}

type actionType={type:"true",index:number} | {type:"false",index:number}
let initialState:btnState[]=[
   { text: "One", check: false },
    { text: "Two", check: true },
    { text: "Three", check: false },
    { text: "Four", check: true },
    { text: "Five", check: false },
    { text: "Six", check: true },
    { text: "Seven", check: false },
    { text: "Eight", check: true },
    { text: "Nine", check: false },
    { text: "Ten", check: true }
]

function reducerFun(state:btnState[],action:actionType):btnState[]{
switch (action.type) {
    case "true":
        return state.map((elem,i)=>i==action.index? {...elem,check:true} : elem)
    case "false":
        return state.map((elem,i)=>i==action.index? {...elem,check:false} : elem)
    default:
        return state
}
}

const Home: React.FC = async() => {
    const [state,dispatch]=useReducer(reducerFun,initialState)
    try {
       const res=await fetch(("http://www.google.com"))
       if(res.status!=200 && res.status!=201){
        throw new Error("No Found")
       }
       const data=await res.json()
       console.log(data)

    } catch (error) {
        
    }
    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{

    }
    return <>
    <input type="text" onChange={(e)=> handleChange(e)} />
        <h1>Home</h1>
        {
            state && state.map((elem,id)=>{
                return   <Btn btns={elem} key={id} ></Btn>
            })
        }
      

    </>
}

export default Home