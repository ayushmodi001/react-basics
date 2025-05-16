import React,{useState} from 'react'
import './app.css';
import './calculator.css'
export default function Calculator() {
    const [input,setInput]=useState("")
    const [result,setResult]=useState("")

    const handleClick=(value)=>{
        if(value==="="){
            try{
                setResult(eval(input).toString())
            }
            catch{
                setResult("error");
            }
        }
        else if(value ==="C"){
            setInput("");
            setResult("");
        }
        else{
            setInput(input+value);
        }
    }
    const buttons=[
        "7","8","9","/",
        "4","5","6","*",
        "1","2","3","-",
        "0",".","=","+",
        "C"
    ]

  return (
    <div className='calculator'>
        <div className='display'>
            <div>{input || 0}</div>
            <div>{result}</div>
        </div>
        <div className='keypad'>
            {buttons.map((btn)=>(
                <button
                key={btn}
                onClick={()=>handleClick(btn)}
                className={btn === "C"? "clear":""}>{btn}</button>
            ))}
        </div>
    </div>
  );
}
