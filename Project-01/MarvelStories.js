import React from "react";
import MarvelHeader from "./MarvelHead";
import './MarvelStories.css'
import Images from './MarvelStories.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartArrowDown} from '@fortawesome/free-solid-svg-icons'

function MarvelStories(){
    return(
        <div>
            <div className="masterDiv">
            <MarvelHeader></MarvelHeader>
            <h1><u>Stories</u></h1>
            
            {
                Images && Images.map((Item)=>{
                    return(
                      <div className="displayFlex">
                        <div  className="forCARD">
                            <img src={Item.image} className="forImg" ></img><br></br>
                            <b className="forName">{Item.name}</b><br/>
                            <i>{Item.description}</i><br/>
                            <button className="forbtn" > <FontAwesomeIcon icon={faCartArrowDown}  className="cart"></FontAwesomeIcon>
                                     {Item.button}</button><br/>
                        </div>
                      </div>
                    )
                })
            }

            </div>
        </div>
    )
}
export default MarvelStories







