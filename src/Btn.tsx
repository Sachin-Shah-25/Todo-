import React from "react";

interface BtnDet {
    text:string,
    check:boolean,
    }
const Btn:React.FC<{btns:BtnDet}> =({btns})=>{

    return <>
    <form action="" onSubmit={(e)=>{}}></form>
    <div>Yes</div>
    <button onClick={()=>{
    }} style={{
        backgroundColor:btns.check?"red":"white"
    }} >{btns.text} </button>
    </>
}

export default Btn