// 1st we use class component
import React from 'react'

class Message extends React.Component{
    constructor(props){
        super(props);
        this.state={
            msg:"You are displaying Message",
            Mobile:'You wants my mobile number',
            place:'Madhapoor'
        };
    }
        msgChange = () => {
            this.setState({
                msg:"you have clicked"
            });
        }

    
        
    render(){
        return(
            <div>.
                <h1>{this.state.msg} </h1>
                <button onClick={this.msgChange}> Click  Me </button>
            </div>
        )
    }
}

export default Message





// import React from 'react'

// class Car extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         brand: "Ford",
//         model: "Mustang",
//         color: "red",
//         year: 1964
//       };
//     }
//     changeColor = () => {
//       this.setState({color: "blue"});
//     }
//     render() {
//       return (
//         <div>
//           <h1>My {this.state.brand}</h1>
//           <p>
//             It is a {this.state.color}
//             {this.state.model}
//             from {this.state.year}.
//           </p>
//           <button
//             type="button"
//             onClick={this.changeColor}
//           >Change color</button>
//         </div>
//       );
//     }
//   }
//   export default Car





