import React from 'react'
import './App.css';

function Card({children}) {
    return (
    <div className='card'>
        {children}
    </div>
)
}
export default function Second() {
    return (
        <Card children="abcd"  />
    )
}
