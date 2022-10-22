import React,{useState} from 'react'

function Parent (){
    const [movie,setMovie] = useState('RRR')
    const [hero, setHero] = useState("NTR")
    const cinema="SVP"
    return(
        <div>
            <center>
                <h4>  this is parent Component </h4>

                {/*// below am passing props as values to Child1 function*/}
                <Child1   movie= {movie} hero={hero}></Child1>

               {/* // below am passing props as values to Child3 function*/}
                <Child3  cinema={cinema} hero="Mahesh"> </Child3>
            </center>
        </div>
    )
}

function Child1(props){
    const cinema1="KGF";
    const hero="YASH"

    return(
        <diV> 
            <center>
                <h3> this is Child1 Component </h3>
                {/*// below amm accessing the values of its parent function    Parent*/}
                <i>movie: {props.movie} hero: {props.hero} </i>


                <Child2  cinema={cinema1} hero={hero}  ></Child2>
            </center>
        </diV>
    )
}

function Child2(props){
    return(
        <diV> 
            <center>
                <h3> this is Child2 Component </h3>
                <i>  movie name is {props.cinema} and hro is {props.hero} </i>
               
            </center>
        </diV>
    )
}

function Child3(props){
    return(
        <diV> 
            <center>
                <h3>  this is Child3 Component</h3>
                <i>  movie name is { props.cinema}  and hero is {props.hero}</i>
            </center>
        </diV>
    )
}


export default Parent