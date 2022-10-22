import React  from "react";
import MarvelHeader from "./MarvelHead";
import Images  from './MarvelComics.json'
import './Comics.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartArrowDown} from  '@fortawesome/free-solid-svg-icons'


function MarvelComics(){
    return(
        <div>
            
            <div className="masterDiv">
            <MarvelHeader> </MarvelHeader>
            <h1 ><u>Comics</u></h1>
              
                {
                    Images && Images.map((item)=>{
                        return(
                       
                            <div className="displayFlex">
                                 {/* above displayFlex is Bootstrap command  */}
                               <div className="myCard">
                                <img src={item.image} className="myimages" ></img><br/>
                                <div>
                                <b className="txtFont" > {item.name}</b> <br/>
                               <i>{item.description}</i>
                                <button className="btnComics"> <FontAwesomeIcon  icon={faCartArrowDown} className="forCart "/> {item.button} </button>
                                </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>

        </div>
    )
}
export default MarvelComics