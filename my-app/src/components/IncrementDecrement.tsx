import React, { useState } from 'react'

const IncrementDecrement = () => {

    const [count, setCount]=useState<number>(10)


  return (
    <>
      <h1>Counter using state</h1>
      <h3>{count}</h3>

      <button onClick={()=>{setCount(count+1)}}>Increment</button>
      <button onClick={()=>{setCount(count-1)}}>Decrement</button>
    </>
  )
}

export default IncrementDecrement
