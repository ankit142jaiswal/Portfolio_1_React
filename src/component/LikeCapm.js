import React, { useState } from 'react'
import { faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function LikeCapm(props) {
    const [color1,setColor1]=useState("black")
    const[color2,setColor2]=useState("black")
    const [like,setLikes]=useState(parseInt(props.count1))
    const [dislike,setDislikes]=useState(parseInt(props.count2))

    const onclick1=()=>{
        if (color1=="black"){
            setColor1("green");
            setLikes(like+1);
        }
        else{
            setColor1("black");
            setLikes(like-1);
        }
    }
    const onclick2=()=>{
        if (color2=="black"){

            setColor2("red");
            setDislikes(dislike+1);
        }
        else{
            setColor2("black");
            setDislikes(dislike-1);
        }
    }
  return (
    <div className=''>
        <span className="m-1">{like}</span>
        <FontAwesomeIcon icon={faThumbsUp} size='2xl' color={color1} onClick={onclick1}/>
        <span className='m-1'>{dislike}</span>

        <FontAwesomeIcon icon={faThumbsDown} size='2xl' color={color2} onClick={onclick2}/>

    </div>
  )
}
