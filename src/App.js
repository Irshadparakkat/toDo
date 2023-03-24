
import React, { useState } from 'react';

import './App.css';

function App() {

  const [toDos,setTodos] = useState([])
  const [toDo,setTodo] = useState('')
  return (
    <div className="app">

      <div className='addingtodo' >
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Let's Plan today 🌝 ☕ </h2>
      </div>
      <div className="input">
  <input 
    value={toDo} 
    onChange={(e) => setTodo(e.target.value)}  
    type="text" 
    placeholder="🖊️ Add item..." 
  />
  {toDo ? (
    <i 
      onClick={() => setTodos([...toDos, {id: Date.now(), text: toDo, status: false}] ,setTodo(''))} 
      className="fas fa-plus"
    ></i>
  ) : null}
</div>

      <div className="todos">
       { 
       toDos.map((value)=>{

        return (
       
       <div className="todo">
          <div className="left">
            <input   onChange={(e)=>{
              setTodos(toDos.filter(value2=>{

                if(value.id ===value2.id){
                  value.status = e.target.checked

                }
                return value2

              }
              ))
            }} value={value.status} type="checkbox" name="" id="" />
            <p key={value.id} >{value.text}</p>
          </div>
          <div className="right">
              <i onClick={(e)=>{
                setTodos(toDos.filter(value3 => {
                  let temp;
                  if (value.id !== value3.id){
                   
                    temp =  value3
                  }
                  return temp;
                }));
              }} className="fas fa-times"></i>
          </div>
        </div> )
         }) }
      </div>
      </div>
      <div className='completed' >
      <h1 style={{color:'yellow',padding:2}} >Completed tasks </h1>

      {toDos.map((obj)=>{
  if(obj.status){
    return(
      <div className="todo">
      
      <div className="left">
      
      <p className='activetodo' key={obj.id}>{obj.text}</p>
    
    </div>
    
    </div>)
    
  }
  return null
}) }
      </div>
 
    </div>
  );
}

export default App;