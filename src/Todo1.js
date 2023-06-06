import React, {useState, useReducer} from 'react'
import Todo from './Todo';
import './Todo1.css'


// function reducer(state, action){
//     switch(action.type){
//         case "increment":
//         return state+1;

//         case "decrement":
//             return state-1;
//         default:
//             return state;
//     }

// }

function reducer(state, action){
    switch(action.type){
        case "add-todo":
            return{
                todos:[...state.todos, {text:action.text, completed: false}]

            }
        default:{
            return state;
        }
    }

}



function Todo1() {

    // const [count, dispatch] = useReducer(reducer, 0)

    // function addtask(){


    // }
    // function Increment(){
    //     dispatch({type: 'increment'})

    // }
    // function Decrement(){
    //     dispatch({type: 'decrement'})

    // }

    const [{todos , todocount}, dispatch]= useReducer(reducer,{
            todos: [],
            todocount: 0

    })

    const [text, setText]= useState();


  return (
    <div className='main-div'>
        <h1>You have {todocount} tasks to do.</h1>
        {/* <button onClick={Increment}>increment</button>
        <button onClick={Decrement}>decrement</button> */}
        <div className='input-div'>

            
        <form className='myform' onSubmit={e=>{
            e.preventDefault();
            dispatch({type:"add-todo",text})
            setText("");

        }}>
            <input  type='text' id='text' value= {text} onChange={ e => setText(e.target.value)}></input>
            <button   className='btn btn-add'>Add Task</button>

            {text}

         </form>

        
        


         
        </div>
       

        <div>
           
       

            
            
            
             {todos.map((t, idx) =>(
            <div key={idx}>
                <ul>
                    <li>  {t.text}</li>
                    <button className='btn btn-delete'>Delete Task</button>
                    <button  className='btn btn-complete'>Toggle</button>
                </ul>
              
                 </div>
         ))}
        
            <pre>{JSON.stringify(todos, null ,2)}</pre>

         </div>
    </div>
  )
}

export default Todo1