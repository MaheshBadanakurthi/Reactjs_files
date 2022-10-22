import React from 'react'
import './dataDynamic.css'

function Dynamic(){
    // below we are taking arrow with object to iterate
    const DynArr= [
        {
            id:1,
            item:`shoe01`,
            offer:`flat 25% off 1200`,
            price:900
        },
        {
            id:2,
            item:'Shoe02',
            offer:`flat 15% off 700`,
            price:600
        },
        {
            id:3,
            item:'Shoe03',
            offer:`flat 50% off 2200`,
            price:1100
        },
        {
            id:4,
            item:'Shoe04',
            offer:`flat 75% off 2500`,
            price:700
        },
        {
            id:5,
            item:'Shoe05',
            offer:`flat 25% off 1200`,
            price:900
        },
        {
            id:6,
            item:'Shoe02',
            offer:`flat 15% off 700`,
            price:600
        },
        {
            id:7,
            item:'Shoe03',
            offer:`flat 50% off 2200`,
            price:1100
        },
        {
            id:8,
            item:'Shoe02',
            offer:`flat 15% off 700`,
            price:600
        },
        {
            id:9,
            item:'Shoe03',
            offer:`flat 50% off 2200`,
            price:1100
        },
    ]
    // here are going to use map to iterate with all tha items one by one
    const Card = DynArr.map( (x,pos)=>{
        //Map takes a callback function.  above  i took  x  inplace of it  we can take any name
        return(
            <div className='container' key={x.id}>
               
                <h3> {x.item} </h3>
                <h4>{x.offer}</h4>
                <h2>{x.price}</h2>
            </div>
           
        )
    } );

    return(
        <div className="row">
            {Card}
        </div>
    )
}
export default Dynamic