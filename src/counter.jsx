import React,{useState} from 'react'

function Dprops(props){
    return <h2>The current count is {props.count}</h2>
}

export default function Counter(){
    const [count,setCount]=useState(0);
    const increment=()=>setCount(count+1)
    return(
        <div>
            <h1>Simple counter app</h1>
            <Dprops count={count} />
            <button onClick={increment}>Increase</button>
        </div>
    )
}

