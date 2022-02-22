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

    const [name, updateUserName] = useState('malik');
    const [rollNo, updateRoll] = useState(101);

    
     const updateFun = ()=>{
         updateUserName('jahangir');
         updateRoll(102);
     }  
 
    return <React.Fragment>
                    <h1>Hello {name}, your roll No is {rollNo}</h1>
                    <button type='button' onClick={updateFun}>update</button>
           </React.Fragment>
}




 



