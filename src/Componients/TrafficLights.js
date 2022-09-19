import { useState } from "react";

export const TrafficLights =()=>{
    const [Value,setValue]= useState(0);

    return (
        <div>
            <button onClick={function(){setValue(Value === 2 ? 0 : Value+1)}}>
            Next
            </button>
            <div>
                <span>{Value === 0 ? 
                    <div style={{width: 30,height: 30,borderRadius: "50%", background: "red"}}></div> : 
                    <div style={{width: 30,height: 30,borderRadius: "50%", background: "white"}}></div>}</span>
                <span>{Value === 1 ? 
                    <div style={{width: 30,height: 30,borderRadius: "50%", background: "yellow"}}></div> : 
                    <div style={{width: 30,height: 30,borderRadius: "50%", background: "white"}}></div>}</span>
                <span>{Value === 2 ? 
                    <div style={{width: 30,height: 30,borderRadius: "50%", background: "green"}}></div> : 
                    <div style={{width: 30,height: 30,borderRadius: "50%", background: "white"}}></div>}</span>
            </div>
        </div>
    );
};
