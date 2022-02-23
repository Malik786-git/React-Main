import {useState} from 'react';

export default function useCustomCounter(params) {
    const [count, setCount] = useState(0);

    const increment = ()=>{
             setCount(count+1);
    }

    return {
       count, 
       increment
    };
}
// here useCustomCounter is a Hook, return object count and func increment...