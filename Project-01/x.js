import React from 'react';
import Images from './FinalMarvel.json' 
import './x.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartArrowDown} from '@fortawesome/free-solid-svg-icons'



function Marv2(){
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

export default Marv2





