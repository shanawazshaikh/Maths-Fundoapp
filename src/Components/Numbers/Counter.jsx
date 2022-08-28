// import React, { useState } from "react";
// import{Button}from "@mui/material"

// export const Counter=()=>{
//     const [num, setNum]=useState(0);
//     return(
//         <React.Fragment>
//             <Button variant="contained" onClick={()=>setNum(num-1)}>-</Button>
//             <b color="white"> { num } </b>
//             <Button variant="contained" onClick={()=>setNum(num+1)}>+</Button>
//         </React.Fragment>
//     )
// }






import React, { useEffect, useState } from "react";
import{Button}from "@mui/material"

export const Counter=()=>{
    const [num, setNum]=useState(0);
    const [data, setData]=useState();
    const HandleRESET=()=>{
        setNum(0)
    }
    useEffect(()=>{
        if(num<6){
            setData("red")
        }else if (num>5){setData("blue")}
    }, [num]);
    return(
        <React.Fragment>
            <Button variant="contained" onClick={()=>setNum(num-1)}>-</Button>
            <b style={{color:data}}> { num } </b>
            <Button variant="contained" onClick={()=>setNum(num+1)}>+</Button>
            <button onClick={HandleRESET}>Reset</button>
        </React.Fragment>
    )
}