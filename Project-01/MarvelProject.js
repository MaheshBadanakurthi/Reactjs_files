import React from 'react';
import Images from './MarvelInfo.json'
// import MarvelHeader from './MarvelHead'
import './projectMarvel.css'
import './MarvelStyle.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartArrowDown} from  '@fortawesome/free-solid-svg-icons'



function MarvelHero(){
    // const Comicfun=()=>{
    //         return (
    //             <div>
    //                 <MarvelComics></MarvelComics>
    //             </div>
    //         )
    // }
    return(
       
        <div className='Masterdiv' >
            
            <div className='imgMain'>
                <h1><u>Characters</u></h1>
                
                {
                    Images && Images.map((item)=>{
                        return(
                          <div className='displayFlex'>
                            <div className='cards' key={item.id}>
                                
                                <img src={item.icon} alt="" className='myimg001'></img><br/>
                                <b className='txtcolor'> {item.name} </b><br/>
                                <button className='btn'> <FontAwesomeIcon  icon={faCartArrowDown}  /> {item.button} </button>
                            </div>
                          </div>
                        )
                    })
                }
                
            
            </div>


        </div>
    )
}
export default MarvelHero;