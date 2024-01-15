
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment } from './features/counter.slice';

function App() {
  const counter = useSelector(state => state?.counter);
  const dispatch = useDispatch();
  return (
    <>
      <h1>{counter}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </>
  )
}

export default App
