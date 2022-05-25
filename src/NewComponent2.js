import React, {useState} from "react";
const data =[];

for(let i=0; i < 10; i++){
    data.push({
        number: i,
        id: "id"+ i
    });
}

function Item(props){
    return <h1 onClick={()=> props.delete(props.id)}>{props.number}</h1>;
}
export default function NewComponent2() {
    const [state, setState] = useState(data);

    function deleteNumber(n) {
        const newdata = state.filter(num => num.id !== n);
        setState(newdata);
    }
    return (
        <div>
            {state.map((n, i)=>{
                return (
                    <Item delete={deleteNumber} key={n.id} id={n.id} number={n.number}/>
                );
            }

            )}
        
        </div>
    )
}