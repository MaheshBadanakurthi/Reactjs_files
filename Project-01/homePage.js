import React from 'react'
import './Marvel.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartArrowDown } from '@fortawesome/free-solid-svg-icons'



function MarvelHome(){
    return(
        <div className='masterdiv'>
            <div className='headheight'>
                <img src='./Marvel_Img/MarveLogo.png' className='myimg'></img>
                <div className='headBar'>
                    <h3 > Characters </h3>
                    <h3> Comics </h3>
                    <h3> Stories </h3>
                </div>
            </div><br/><br/>

            <h2 className='heading2'><u> Characters</u></h2>
            
           {/* //1sr card */}
            <div className='mycard01'>
              <img src='./Marvel_Img/Dr strange.jpg' className='myimg01'></img>
              <h3 className='charName'>Dr.Strange</h3>
              <button className='forBtn' > <FontAwesomeIcon icon={faCartArrowDown} className=" fontCart" >  </FontAwesomeIcon> Add to Cart </button> 
                
            </div>

            {/*//2ndcard */}
            <div className='mycard02'>
               <img src='./Marvel_Img/Thor.jpeg' className='myimg01'></img>
               <h3 className='charName2'>Thor</h3>
               <button className='forBtn' > <FontAwesomeIcon icon={faCartArrowDown} className=" fontCart" >  </FontAwesomeIcon> Add to Cart </button> 

            </div>

            {/*//3rd card*/}
            <div className='mycard03'>
               <img src='./Marvel_Img/Wanda.jpg' className='myimg01'></img>
               <h3 className='charName2'>Wanda</h3>
               <button className='forBtn' > <FontAwesomeIcon icon={faCartArrowDown} className=" fontCart" >  </FontAwesomeIcon> Add to Cart </button> 

            </div>

            {/*4th card*/}
            <div className='mycard04'>
               <img src='./Marvel_Img/Venom.jpg' className='myimg01'></img>
               <h3 className='charName2'>Venom</h3>
               <button className='forBtn' > <FontAwesomeIcon icon={faCartArrowDown} className=" fontCart" >  </FontAwesomeIcon> Add to Cart </button> 

            </div>

            {/*//5th card*/}
            <div className='mycard05'>
               <img src='./Marvel_Img/Natasa.jpeg' className='myimg01'></img>
               <h3 className='charName1'>Black Widow</h3>
               <button className='forBtn2' > <FontAwesomeIcon icon={faCartArrowDown} className=" fontCart" >  </FontAwesomeIcon> Add to Cart </button> 

            </div>

            {/*//6th card*/}
            <div className='mycard06'>
               <img src='./Marvel_Img/Loki.jpeg' className='myimg01'></img>
               <h3 className='charName2'> Loki</h3>
               <button className='forBtn' > <FontAwesomeIcon icon={faCartArrowDown} className=" fontCart" >  </FontAwesomeIcon> Add to Cart </button> 

            </div>


            {/*//7th card*/}
            <div className='mycard07'>
                <img src='./Marvel_Img/IronMan.jpeg' className='myimg01'></img>
                <h3 className='charName1'>Iron Man</h3>
                <button className='forBtn2' > <FontAwesomeIcon icon={faCartArrowDown} className=" fontCart" >  </FontAwesomeIcon> Add to Cart </button> 

            </div>

            {/*8th card*/}
            <div className='mycard08'>
               <img src='./Marvel_Img/Hulk.jpg' className='myimg01'></img>
               <h3 className='charName2'>Hulk</h3>
               <button className='forBtn' > <FontAwesomeIcon icon={faCartArrowDown} className=" fontCart" >  </FontAwesomeIcon> Add to Cart </button> 

            </div>

            {/*//9th card*/}
            <div className='mycard09'>
               <img src='./Marvel_Img/BlackPanther.jpg' className='myimg01'></img>
              <h3 className='charName1'>Black Panther</h3>
              <button className='forBtn2' > <FontAwesomeIcon icon={faCartArrowDown} className=" fontCart" >  </FontAwesomeIcon> Add to Cart </button> 
 


            </div>

            {/*//10th card*/}
            <div className='mycard10'>
               <img src='./Marvel_Img/Famuan.jpeg' className='myimg01'></img>
               <h3 className='charName2'>Famuan</h3>
               <button className='forBtn' > <FontAwesomeIcon icon={faCartArrowDown} className=" fontCart" >  </FontAwesomeIcon> Add to Cart </button> 

            </div>


        </div>
    )
}
export default MarvelHome