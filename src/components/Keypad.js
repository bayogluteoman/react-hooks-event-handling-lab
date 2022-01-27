// Code Keypad Component Here
import React from 'react';

const Keypad = () => {
    return (
        <div>
            <input type="password" onChange={(e) => { console.log("Entering password..."); }} />
        </div>
    );
};

export default Keypad;
