import React, {useContext} from "react";

const Context = React.createContext();

function Child(props){
    return <GrandChild/>
}

function GrandChild(props){
    const context = useContext(Context);
    return<h1>{context}</h1>
}

export default function NewComponent3() {
    return (
        <Context.Provider value={1}>
            <div>
                <Child/>
            </div>
        </Context.Provider>
    )
}