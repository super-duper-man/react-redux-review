/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";

type ReturnType<T> = {
  data?: T;
  loading: boolean;
  error?: any
  refetch: () => void;
};
function useAsyncGenerator<T>(
  generatorFn: () => IterableIterator<Promise<T>>
): ReturnType<T> {
  const [state, setState] = useState<ReturnType<T>>({
    loading: true,
    refetch: () => {},
  });

  useEffect(() => {
    async function executeRequest(gen: IterableIterator<Promise<T>>) {
      try {
        const { value, done } = await gen.next();
        if (!done) {
            setState((prevState) => ({ ...prevState, loading: false, data: value as any }));
            executeRequest(gen);
        }else{
            setState(prevState => ({...prevState, loading: false, data: value}))
        }
      } catch (error) {
        setState((prevState) => ({ ...prevState, loading: false, error }));
      }
    }

    function refetch() {
      setState((prevState) => ({ ...prevState, loading: true }));
      executeRequest(generatorFn());
    }

    executeRequest(generatorFn());
    setState((prevState) => ({ ...prevState, refetch }));
  }, [generatorFn]);

  return state
}

export default useAsyncGenerator;
