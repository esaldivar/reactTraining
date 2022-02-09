import React, {useState} from 'react';
import Small from './Small.jsx'



let number = 1;



const App = (props) => {
    const newNumber = number + 3;
    const [numberState, setNumberState] = useState(number + 3)
    const subtractNum = (num) => {
       if(num == 0 ){
           return num;
       };
       return num - 1;
    }

    return (
        <div>
            <button onClick={()=>{setNumberState(numberState + 1)}}>Increase number</button>
            <button onClick={()=>{setNumberState(subtractNum(numberState))}}>Decrease number</button>
            <Small number={numberState}/>
        </div>
    )

};

export default App;