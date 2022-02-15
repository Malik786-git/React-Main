import React from "react";
import "./index.css";
// 1.

// const el = <h1>HelloWorld!</h1>

// 2. 
// const name = "malik";
// const el = <h1>Hello {name} {1+1}</h1>


// 3.
function sum(a, b) {
    return a+b;
}

const el = <h1 className="bg">Sum {sum(5,5)}</h1>

export default el;






