import React, {useState} from 'react';

const Small = ({number}) => {

    return (
        <div>
            <h1>This is the small component.</h1>
            <h1>{number}</h1>
        </div>
    )
};

export default Small;