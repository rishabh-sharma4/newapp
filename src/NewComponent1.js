import React, { useState, useRef } from "react";

export default function NewComponent1() {
    const [state, setState] = useState("");

    function handleChange(e) {
        setState(e.target.value);
    }

    return (
        <div>
            <input type="text" value={state} onChange={handleChange}/>
            <Uncontrolled/>
        </div>
    );
}
function Uncontrolled(){
    const inputRef = useRef();
    function alertValue(){
        alert(inputRef.current.value);
    }
    return(
        <div>
            <input type="text" ref={inputRef} />
            <button onClick={alertValue}>Click me</button>
        </div>
    )
}