import React from "react";
import MarvelHeader from "./MarvelHead";
import Images from './myJSON.json'
import './projectMarvel.css'



function MarvelHomePage(){
    return(
        <div>
            <MarvelHeader></MarvelHeader> 
        <div className="masterdiv">
        <h1 className="myheading"><u>Characters</u></h1>
            {
                Images && Images.map(item=>{
                    return(
                        <div>
                            <div className="box">
                                 <div className="myimg01" key={item.id}>
                                
                                     <img src={ item.img01 } alt=" Marvel Hero " /> <br/>
                                
                                 
                                 <div className="imgdata">
                                     <b > {item.charName}</b> <br/> <br/>
                                     <b> {item.description}</b><br/> <br/>
                                    <button  > Add to cart</button>
                                </div>
                                </div >
                            </div>
                        </div>
                    )
                } )
            }

        </div>
        </div>
    )
}
export default MarvelHomePage