import React, { useState } from 'react';

const Main =()=> {
const [myName, setMyName]= useState("박유채")

    function ChangeName() {
    
        setMyName(myName === "박유채"? "12기 아기사자": "박유채");
    } 

    return (
        <div>
            <h1>안녕하세요. {myName} 입니다.</h1>
            <button onClick={ChangeName}>Change</button>
        </div>
    );
}

export default Main;