import React, {useState} from 'react'

// export default function UseState() {

//     const nameState = useState('malik');
//     // nameState[1]('jahangir'); // it is not work it is in infinite loop so the react render limit out.
//      const updateName = ()=>{
//          nameState[1]('jahangir')
//      }  
 
//     return <React.Fragment>
//                     <h1>Hello {nameState[0]}</h1>
//                     <button type='button' onClick={updateName}>update</button>
//            </React.Fragment>
// }

// through destructing
export default function UseState() {

    const [name, updateFun] = useState('malik');
     const updateName = ()=>{
         updateFun('jahangir');
     }  
 
    return <React.Fragment>
                    <h1>Hello {name}</h1>
                    <button type='button' onClick={updateName}>update</button>
           </React.Fragment>
}




 



