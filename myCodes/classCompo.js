import React,{Component} from "react";
import Vini from "../Vini";



class New extends Component{
    render(){
        return(
            <div>
                <center>
                    <h1> {this.props.name } </h1>
                </center>
                <Vini bookname={this.props.book}>'sdfghj' </Vini>

            </div>
        )
    }
}
export default New