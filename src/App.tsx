/* eslint-disable @typescript-eslint/no-explicit-any */
import './App.css'
import useAsyncGenerator from './useAsyncGenerator'
import { counter, handleRequests } from './utils/common-methods'

function App() {
  const state = useAsyncGenerator<{data1: any, data2: any}>(handleRequests)
  return (
    <div>
        <button onClick={state.refetch}>Refetch</button>
        <div>
          Requests Sent: {counter}
        </div>
        <pre>
          <code>
            {state.loading ? 'Loading...' : JSON.stringify(state.data, null, 2)}
          </code>
        </pre>

        {state.error && <div>{state.error.message}</div>}
      </div>
  )
}

export default App
