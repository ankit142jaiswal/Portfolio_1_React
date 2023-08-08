import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Rating from './Rating';
import LikeCapm from './LikeCapm';

let product=[
  {
    img : "img/img3.jpeg",
    Name : "LOgi-tech Mouse",
    Price : 550,
    discription : "A Good Quality logitech Wire-Mouse.",
    rating: 3
  },
  {
    img : "img/img2.jpeg",

    Name : "Hp Pavallion Gaming Laptop",
    Price : 63000,
    discription : "An Excellent choice for an gaming experience.",

    rating: 4
  },
  {
    img : "img/img4.jpeg",

    Name : "EXcitel Router",
    Price : 3000,
    discription : "An excellent router for multiple connectivity.",
    rating: 2
  },
  {
    img : "img/img5.jpeg",

    Name : "Gaming Keyboard",
    Price : 600,
    discription : "An excellent gaming keyboard for router",
    rating: 1
  },
]




export default function Menu() {
  return (
    <div className='row'>
      
        {
          product.map(
            (obj)=>{
              return(
                <div class="col-md-3 card mx-5 mt-5 border-2 border-dark " style={{width:"18rem"}} >
  <img src={obj.img} class="card-img-top p-2" style={{
    height:"230px"
  }} alt="..."/><hr/>
  <div class="card-body">
    <h5 class="card-title">{obj.Name}</h5>
    <h3 class="card-title">Rs {obj.Price}</h3>


    <p class="card-text">{obj.discription}</p>
    
    <Rating rating = {obj.rating}/>
    <a href="#" class="btn btn-outline-success float-end ">Buy Now</a>
    <LikeCapm count1="300" count2="50"/>
    

    
  </div>
</div>



              );
            }
          )
        }
        
      </div>
   
  )
}


// export default function Menu() {
//   return (
//     <div className='container'>

//     <div className="row ">
//       <div className='col-md-4'>

//       </div>

//       <div className="col-md-4 bg-light mx-4 p-2 border-2 border-dark card" style={{ width: "18rem" }}>
//         <img src="img/img2.jpeg" className="card-img-top" alt="..." />
//         <div className="card-body">
//           <h3 className="card-title">Hp Pavallion Gaming Laptop</h3>
//           <h5 className="card-title">Rs. 63000</h5>


//           <p className="card-text">An excellent choice for an gaming experience</p>
//           <Rating rating={4
//           }/>

//           <a href="#" className="btn btn-outline-success">Buy Now</a>
//         </div>
//       </div>
//       <div className='col-md-4'>
//       </div>
//     </div>
//     </div>
//   )
// }
