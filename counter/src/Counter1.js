import React,{useReducer} from 'react'
import './Counter1.css'

function reducer(state, action){
  switch(action.type){
    case 'increment':
      return state+1;
     
    case 'decrement':
      return state-1;
     
    default:
      return state;
     
  }

}

function Counter1() {
  const [count, dispatch] = useReducer(reducer, 0);

  function Increment(){
    dispatch({type:'increment'})

  }
  function Decrement(){
    dispatch({type: 'decrement'})
  }


  return (
    <div className='counter'><h1>Welcome in Simple Counter Web Page using React</h1>
    <div className='counter-show'> {count}</div>
    
    <div className='btndiv'><button onClick={Increment} className=' btn btn1'>Increment</button>
    <button onClick={Decrement} className='btn btn2'>Decrement</button></div></div>
    
  )
}

export default Counter1