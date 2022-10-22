import React,{useState} from 'react'

function Allhooks(){
    const[text,setText]=useState('text')

    return(

        <div>
            <header>
                Wel-Come tp Reaact Hooks Concept
            </header>
            
            <button onClick={()=>setText("Here we are using the useState Hook to keep track of the application state.State generally refers to application data or properties that need to be tracked.State generally refers to application data or properties that need to be tracked.State generally refers to application data or properties that need to be tracked.State generally refers to application data or properties that need to be tracked.to application data or properties that need to be tracke to application data or properties that need to be tracketo application data or properties that need to be tracketo application data or properties that need to be tracketo application data or properties that need to be tracke pplication data or properties that need to be tracke")} > useState</button>
            <button onClick={()=>setText("Here we are s to application data or properties or properties that need to be ")} > useEffect</button>

            {/* <button onClick={()=>setText("Mahesh ")}> useEffect </button> */}
            


            <button> useCallback </button>

            <button> useContext </button>
            <br></br>
            <h3  >  {text} </h3>
            <h4> Something is wrong</h4>

        </div>



    );
}
export default  Allhooks;