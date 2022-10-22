import React,{useState} from "react";
import './jsxexam.css'

function LikeBut(){
    const[count,setCount]= useState(0);
    return(
        <div>
            <h2>you clicked {this.state.count} times</h2>
            <button onclick={() => setCount(count+1)} > add </button>
            

        </div>
    );
}
export default LikeBut;