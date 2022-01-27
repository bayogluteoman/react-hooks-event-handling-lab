// Code EyesOnMe Component Here
import React from 'react';

const EyesOnMe = () => {
    return (
        <div>
            <button
                onFocus={(e) => {
                    console.log("Good!");
                }}
                onBlur={(e) => {
                    console.log("Hey! Eyes on me!");
                }} >
                Eyes on me
            </button>
        </div>
    );
};

export default EyesOnMe;
