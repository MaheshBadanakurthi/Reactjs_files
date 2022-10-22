import React,{useState} from "react";
import './MarvelStyle.css'
import './x.css'
import './projectMarvel.css'
import Images from './FinalMarvel.json'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartArrowDown} from  '@fortawesome/free-solid-svg-icons'

function MarvelWorld(){
    let [name,setName]=useState()
    let [data,setData]=useState(Marv1)

    let Characters=()=>{ setName(name="Characters");setData(data=Marv1)};
    let Comics=()=>{ setName(name="Comics");setData(data=Marv2) };
    let Stories=()=>{setName(name="Stories");setData(data=Marv3)}

    // below is for Marvel heros
function Marv1(){
    return(
        <div className='Masterdiv'>
            {
                Images.Marvel.Chars.map((item)=>{
                    return(
                    <div className="displayFlex">
                        <div className='forCARD'>
                        
                        <img src={item.icon} className="forImg"/>
                        <b className="forName">{item.name}</b><br/>
                            <i>{item.description}</i><br/>
                            <button className="forbtn" > <FontAwesomeIcon icon={faCartArrowDown}  className="cart"></FontAwesomeIcon>
                                     {item.button}</button><br/>
                        
                
                       </div>
                    </div>
                    )
                })
            }
           
        </div>
    )
}

//  below is for comics

function Marv2(){
    return(
        <div className='Masterdiv'>
            {
                Images.Marvel.Comics.map((Item)=>{
                    return(
                    <div className="displayFlex">
                        <div className='forCARD'>
                        
                        <img src={Item.image} className="forImg"/>
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
    )
}

//be low is for Stories
function Marv3(){
    return(
        <div className='Masterdiv'>
            {
                Images.Marvel.Stories.map((Item)=>{
                    return(
                    <div className="displayFlex">
                        <div className='forCARD'>
                        
                        <img src={Item.image} className="forImg"/>
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
    )
}




    return(
        <div className='headheight'>
                <img src='./Marvel_Img/MarveLogo.png' className='myimg'></img>
                <div className='headBar'>
                    <h3 onClick={Characters} > Characters </h3>
                    <h3 onClick={Comics}> Comics </h3>
                    <h3 onClick={Stories}> Stories </h3>
                </div>
                <div>
                <h4 className="forh4"><u>{name }</u></h4>
                {data}

                </div>
               
                
            </div>
    )
}
export default MarvelWorld





