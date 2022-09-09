import React, {useState,useEffect} from "react";
import './counter.css';

function Timer() {

    const[timer,setTimer]= useState(0);

    useEffect(()=>{
        setTimeout(()=>{
            setTimer(timer+1);
        },1000)
    })

    return(
        <div className="c">
            <h1>timer</h1>
            <h2>{timer}</h2>

        </div>
    );
}

export default Timer;