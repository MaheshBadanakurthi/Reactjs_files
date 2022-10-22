import React  from 'react'
// import './jsxexam.css'
let stylingss = {
h2:{
        color:"red",
        marginLeft:"200px",

        
    },
    mahesh:{
        border:"2px dotted yellow",
        color:"green"
    }
}

class Jsxdemo extends React.Component{
    render(){
        return(
            <div>
                <h2 style={stylingss.h2}> JSX intro</h2>
                <h2 style={stylingss.mahesh}> secound heading 2</h2>
                <p style={{"color":"red","border":"2px ridge green"}}>
                This is simple JSX code in React. But the browser does not understand this JSX because it's not valid JavaScript code. This is because we're assigning an HTML tag to a variable that is not a string but just HTML code.
                </p>
                <b> JSX end</b>
            </div>
        )
    }
}

export default Jsxdemo