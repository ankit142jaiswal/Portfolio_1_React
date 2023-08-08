import React from 'react'
import App from "../App";

let arr =[{Name : "Ankit",Branch : "CSE",RollNO : "018" },{Name : "Aman",Branch : "IOT",RollNO : "012" },{Name : "Gaurav",Branch : "IT",RollNO : "060" },
{Name : "Anmol",Branch : "AI",RollNO : "021" },{Name : "Akash",Branch : "DS",RollNO : "08" }];


export default function Demo_22() {
  return (
    <div>
        {
            arr.map(

                (obj)=>{
                    return ( <p>Name : {obj.Name}. and Branch : {obj.Branch}</p>)
                }
                )
            }

    </div>

  )
}
