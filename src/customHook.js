import React from 'react'
import useCustomCounter from './customHook2';

export default function Cutom(params) {
    const data = useCustomCounter();
    const data1 = useCustomCounter();

    return(
        <>
            <h1> COunt up : {data.count}</h1>
            <button  type='button' onClick={data.increment}>update</button>
            <h1> COunt up : {data1.count}</h1>
            <button  type='button' onClick={data1.increment}>update</button>
        </>
    )
}
