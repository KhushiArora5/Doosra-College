import React, {useState} from "react";
import './counter.css';

function Counter() {

    const[count,setCount]= useState(0);
    // const[timer,setTimer]= useState(0);

    // useEffect(()=>{
    //     setTimeout(()=>{
    //         setTimer(timer+1);
    //     },1000)
    // })

    return(
        <div className="c">
            <h1>counter</h1>
            <h2>{count}</h2>
            <button onClick={()=>{
                setCount(count+1);
            }}>Increase</button>
            <button onClick={()=>{
                setCount(count-1);
            }}>Decrease</button>
        </div>
    );
}

export default Counter;