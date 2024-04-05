import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, reset, decrement } from '../redux/counterSlice'

const Counter = () => {
    // grabbing th state
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
  return (
    <div>
      <h1>Intro to redux</h1>
      <h2>Counter: {count}</h2>
      <button onClick={()=> dispatch(increment())}>Increment</button>
      <button onClick={()=> dispatch(reset())}>Reset</button>
      <button onClick={()=> dispatch(decrement())}>Decrement</button>
    </div>
  )
}

export default Counter
