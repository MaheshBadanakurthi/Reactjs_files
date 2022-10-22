import React,{useState} from "react";

function Counts(){
    const[count,setCount]=useState(0);
    return(
        <div>
            <b> count is {count}</b>
            <button  onClick={()=> setCount(count+1)}> Click to Add</button>
            <button  onClick={()=> setCount(count-1)}> Click to subtract</button>

         
         </div>
    );
}
export  default Counts;