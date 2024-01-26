import React, { useState, useEffect } from 'react';
var moment = require('moment-timezone');

const textSize = {
    color: "white",
    fontSize: "xxx-large",
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "sans-serif",
}

export function QcTime() {
    const [time, setTime] = useState(moment().tz('America/Toronto').format('HH:mm'));

    useEffect(() => {
        const interval = setInterval(() => {
            console.log("tick");
            setTime(moment().tz('America/Toronto').format('HH:mm'));
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <p style={textSize}>🇨🇦</p>
            <p style={textSize}>{time}</p>
        </div>
    );
}