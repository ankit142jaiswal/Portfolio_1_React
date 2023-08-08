// import React from 'react'

// export default function Task10() {
//   let x= 20
//   let y=10

   
//   return (
//     <div>
//         <h1>Evaluating Expression</h1>
//         <h3>{x} {">"} {y} : {x>  y ? "True":"False"} </h3>
//     </div>
//   )
// }

// import React from 'react'
//  function Task10(props) {
//   return (
//     <div>
//         <h1>Evaluating Expression</h1>
//         <h3>{props.x} {">"} {props.y} : {props.x>props.y?"True":"False"}</h3>
//     </div>
//   )
// }
// export default Task10


import React from 'react'
let val = [{x:5,y:7},{x:46,y:6},{x:56,y:56}]
export default function Task10() {
  return (
    <div>
        <h1>Evaluating Expression</h1>
        {
            val.map(
                (obj)=>{
                    return ( <h3>{obj.x} {">"} {obj.y} : {obj.x>obj.y?"True":"False"}</h3>)
                }
            )
        }
    </div>
  );
}
