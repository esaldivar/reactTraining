import React from 'react';
import ReactDOM from 'react-dom';



let number = 1;



const App = (props) => {
    const newNumber = number + 3;

    return (
        <div>
            <h1>{newNumber}</h1>
        </div>
    )

};

export default App;