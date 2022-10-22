import { render } from '@testing-library/react';
import React,{Component} from 'react'

class Name extends Component{
    // constractor(props)
    // super(props){
    // this.state={
    //     name:"Roman",
    //     field:"Wrestling",
    //     performance:"Next level"
    // }
// }
    
 render(){
    return(
        <div>
            <center>
                <h1> {this.props.name}</h1>
            </center>
        </div>
    )
 }
}

export default Name 