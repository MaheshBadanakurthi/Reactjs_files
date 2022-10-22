import React,{useState} from 'react'
// import './click.css'

function ParentComp (){
    const [movie,setMovie] = useState('RRR')
    const [hero, setHero] = useState("NTR")

    
    return(
        <div>
            <h1 className='txt'>  This is parent Component</h1>
            <Child1 movie={movie} hero={hero}/>
            <hr/>

        </div>
    )
}


function Child1({movie,hero}){
    return(
        <diV> 
            <h1 className='txt'>  This is Child1 Component</h1>

             <Child2 movie={movie} hero={hero}/>
             <hr/>
           
        </diV>
    )
}

function Child2(movie,hero){
    return(
        <diV> 
            <h1 className='txt'>  This is Child2 Component</h1>
             <Child3 movie={movie} hero={hero}/>
            
             <hr/>
        </diV>
    )
}

function Child3(props){
    return(
        <diV> 
            <i className='txt'> data came from Parent component </i>

            <h3> movie : {props.movie}  hero : {props.hero} </h3>
            <hr/>
           
        </diV>
    )
}





export default ParentComp 