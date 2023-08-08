// import React from 'react'

// export default function CounterCamp(props) {
//     // console.log(props.count++);
//   return (
//     <div>
//         <h1>{props.count },{ props.name}</h1>

//     </div>
//   )
// }

import { counter } from '@fortawesome/fontawesome-svg-core'
import React, { useState } from 'react'

export default function CounterCamp(props) {
    const [counter,setCounter]=useState(1);
    
    const Increament = ()=>{
        setCounter(counter+1)
    };
    const Decreament=()=>{
        if (counter == 0){
            
        }
        setCounter(counter-1)
    }
  return (
    <div>
         <h1>Counter : {counter}</h1>

         <button onClick={Increament}>Increament</button>
         
         <button onClick={Decreament}>Decreament</button>

    </div>
  )
}

