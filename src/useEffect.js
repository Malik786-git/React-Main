import React, { useEffect, useState } from 'react'
// const UseEffect = ()=> {
//     const [count, setCount] = useState(0);

//     const incrementFun = ()=>{
//         setCount(count + 1);
//     }
//     useEffect(()=>{
//         console.log('Use effect call');
//     })
//     return (
//         <>
//             <h1>Count up: {count}</h1>
//             <button type='button' onClick={incrementFun}>Increment</button>
//         </>
//     )

// }


//  also, kisi bh elemt me change huga ye call huga.
const UseEffect = ()=> {
    
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(50);

    const incrementFun = ()=>{
        setCount(count + 1);
    }
    const decrementFun = ()=>{
        setCount1(count1 - 1);
    }
    
    // useEffect(()=>{
    //     console.log('Use effect call');
    // })
    //  or
    // we see useEffect call on every chagne in dom, we we want only count up run so it call. so we use second argu of useEffect.

    useEffect(()=>{
        console.log('Use effect call');
    }, [count])
    return (
        <>
            <h1>Count up: {count}</h1>
            <button type='button' onClick={incrementFun}>Increment</button>
            <h1>Count Down: {count1}</h1>
            <button type='button' onClick={decrementFun}>Decrement</button>
        </>
    )

}

export default UseEffect;

