import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function ProgressBar() {

    const [filled, setFilled] = useState(0);
    const [loading, isLoading] = useState(false);

    const reset = ()=>{
        setFilled(0);
    }

    useEffect(()=>{
        if(filled < 100 && loading){
            setTimeout(()=>
                setFilled(prev => prev+=2), 100
            )
        }
    }, [filled, loading])

    const getColor = ()=>{
            return "green"
    }

    return(
        <body>
            <div className="progressBar">
            <div style={{
                height: "100%",
                width: `${filled}%`,
                backgroundColor : getColor(),
                transition:"width 0.1s"
            }}>
            </div>
            <span className="progressBarPercentage">
                {filled} %
            </span>
            </div>

            <div className="controls">
            <button className="start" onClick={()=>{isLoading(true)}}>Start</button>    
            <button className="stop" onClick={()=>{isLoading(false)}}>Stop</button>  
            <button className="reset" onClick={reset}>Reset</button>  
            </div>

        </body>
        )

    }