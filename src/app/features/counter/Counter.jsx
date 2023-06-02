import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { counterActions } from "./counterSlice"

const Counter = () => {
  const value = useSelector(state => state.counter.value)
  const [valueToAdd, setValueToAdd] = useState(0)
  const dispatch = useDispatch()

  const increment = () => {
    dispatch(counterActions.increment())
  }

  const decrement = () => {
    dispatch(counterActions.decrement())
  }

  const incrementByAmount = () => {
    dispatch(counterActions.incrementByAmount(valueToAdd))
  }

  return (
    <div>
      <h1>{value}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <p>
        <input value={valueToAdd} onChange={(e) => setValueToAdd(e.target.value)} />
        <button onClick={incrementByAmount}>incrementByAmount</button>
      </p>
    </div>
  )
}

export default Counter