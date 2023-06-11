import React, {useState, useReducer} from 'react'

import './Todo1.css'


function reducer1(state1, action1){
    switch(action1.type){
        case "increment":
        return state1 + 1;

        case "decrement":
            return state1-1;
        default:
            return state1;
    }

}

function reducer(state, action){
    switch(action.type){
        case "add-todo":
            return{
                todos:[...state.todos, {text:action.text, completed: false}]
               
               

            }
        case "task-completed":
            return{
                todos:state.todos.map((t, idx) => idx === action.idx ? {...t ,completed:!t.completed}:t)
                
                

            }
           
        case "delete-task":
           return{
                todos:state.todos.filter((t, idx) => idx !==action.idx)
                 
            } 

        case "decrement":
            return state-1;
        
        break;   
        default:{
            return state;
        }
    }

}



function Todo1() {

    //this code is for adding the no of task

    const [count, dispatch1] = useReducer(reducer1, 0)

    function Increment(){
        dispatch1({type: 'increment'})

    }
    function Decrement(){
        dispatch({type: 'decrement'})

    }
    const deletetask = (t, idx)=>{
        dispatch({type:'delete-task', idx})
        Decrement();
    }
   
  
   

    //this code is used to add the todo

    const [{todos , todocount}, dispatch]= useReducer(reducer,{
            todos: [],
            todocount: 0

    })

    const [text, setText]= useState();
    


  return (
    <div className='main-div'>
        <h1>You have {count} tasks to do.</h1>
    
        <div className='input-div'>

            
        <form className='myform' onSubmit={e=>{
            e.preventDefault();
            dispatch({type:"add-todo",text})
            setText(""); }}>
         <input  type='text' id='text' value= {text} onChange={ e => setText(e.target.value)}></input>
        <button  onClick={Increment}  className='btn btn-add'>Add Task</button>

        {/* {text} */}

        </form>

        
        </div>

        {/* \\this code is for showing the todo */}
       

        <div className='showing-todo'>

      
           
         {todos.map((t, idx) =>(
            <div className='mydiv' key={idx} >
       
                

       
                 
                <div className='my-info'
                    style= {{ textDecoration:t.completed ? "line-through" : " "}} >  {t.text} 
                    
                <div>
                  
                   
                
                    <button  onClick={()=> dispatch({type:'delete-task', idx}) }
                         className='btn btn-delete' >Delete Task</button>


                    <button className='btn btn-complete' onClick={()=>dispatch({type:'task-completed', idx})} >Completed</button>
                </div>
                    
                </div>
              
            </div>
         ))}
        
            {/* <pre>{JSON.stringify(todos, null ,2)}</pre> */}
            {/* onClick={()=>dispatch({type:'delete-task', idx}) }  */}

         </div>
    </div>
  )
}

export default Todo1
