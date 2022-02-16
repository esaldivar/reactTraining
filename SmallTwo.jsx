import React, {useState, useEffect} from 'react';

const SmallTwo = ({number}) => {

    const [newNumber, setNewNumber] = useState(number);

    useEffect(()=>{
        setNewNumber(newNumber + 10);
    }, [number])

    return (
        <div>
            <h1>This is the small Two component.</h1>
            <h1>{newNumber}</h1>
        </div>
    )
};

export default SmallTwo;