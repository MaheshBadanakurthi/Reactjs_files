import React from "react";
import './projectMarvel.css'

function MarvelHeader(){
    return(
        <div> 
            <div className='headheight'>
                <img src='./Marvel_Img/MarveLogo.png' className='myimg'></img>
                <div className='headBar'>
                    <h3> Characters </h3>
                    <h3> Comics </h3>
                    <h3> Stories </h3>
                </div>
            </div>
        </div>
    )
}

export default MarvelHeader