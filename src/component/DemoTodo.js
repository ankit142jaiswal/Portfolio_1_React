import React, { useState } from 'react'

export default function DemoTodo() {
  const [todoitem, setTodoitem]=useState("")
  const [todoitems,setTodoitems]=useState([])

  const onclick1= (e)=>{
    setTodoitem(e.target.value)
    console.log(todoitem)
  }
  const onclick2=(e)=>{
    e.preventDefault();
    // let temp = todoitems
    // temp.push(todoitem)
    // setTodoitems(temp)
    setTodoitems([...todoitems,todoitem]);
    setTodoitem("")

    console.log(todoitems)

  }
  const onclick3=()=>{
    setTodoitems([])
    

  }
  return (
    <div className="conatiner text-center">
        <h1>My Todo List <hr/></h1>
        <form  onSubmit={onclick2}>
          <input class="" type="text" name="" value={todoitem} onChange={onclick1}/>
          <button type="submit" className='btn btn-outline-success m-2' >ADD</button>
          <button type="reset" className='btn btn-outline-success' onClick={onclick3}>RESET</button>

        </form>

        {
          todoitems.map((item)=>{
            return <h1>{item} <hr/></h1>

          })
        }
    </div>
  )
}
