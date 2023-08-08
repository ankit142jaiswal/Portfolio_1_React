import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

export default function Rating(props) {
    let rating = props.rating;
    const arr=[];
    if (props.rating==5 ){
        for (let i=1; i<=5;i++)
        {
            if (i<=rating )arr.push(<FontAwesomeIcon icon ={faStar} color='green'/>)
            else{
                arr.push(<FontAwesomeIcon icon ={faStar}/>)
            }
        }
        return (
        <div>
            {arr}
        </div>
      )

    }
    if (props.rating==4 ){
        for (let i=1; i<=5;i++)
        {
            if (i<=rating )arr.push(<FontAwesomeIcon icon ={faStar} color='green'/>)
            else{
                arr.push(<FontAwesomeIcon icon ={faStar}/>)
            }
        }
        return (
        <div>
            {arr}
        </div>
      )

    }
    if (props.rating==3){
        for (let i=1; i<=5;i++)
        {
            if (i<=rating )arr.push(<FontAwesomeIcon icon ={faStar} color='yellow'/>)
            else{
                arr.push(<FontAwesomeIcon icon ={faStar}/>)
            }
        }
        return (
        <div>
            {arr}
        </div>
      )

    }
    if (props.rating==2){
        for (let i=1; i<=5;i++)
        {
            if (i<=rating )arr.push(<FontAwesomeIcon icon ={faStar} color='orange'/>)
            else{
                arr.push(<FontAwesomeIcon icon ={faStar}/>)
            }
        }
        return (
        <div>
            {arr}
        </div>
      )

    }
    if (props.rating==1){
        for (let i=1; i<=5;i++)
        {
            if (i<=rating )arr.push(<FontAwesomeIcon icon ={faStar} color='red'/>)
            else{
                arr.push(<FontAwesomeIcon icon ={faStar}/>)
            }
        }
        return (
        <div>
            {arr}
        </div>
      )

    }
   
}
