import React from "react";
import './reacctDom'
import  ReactDOM  from "react-dom";


function Mine(x){
    return(
        <div>
        <h3> Mahesh you have {x.word} </h3>
        <p> any paragraph </p>
        </div>
    )
}
const element=ReactDOM.createRoot(document.getElementById("datadd"));
const root=<Mine word="to Improve"> </Mine>;
element.render(root);

export default Mine;