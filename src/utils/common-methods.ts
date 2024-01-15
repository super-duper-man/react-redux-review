/* eslint-disable @typescript-eslint/no-explicit-any */
export let counter = 0;
export async function* handleRequests(): any {
    counter++;
    console.log("Making Request: ", counter);

    const response1: any = await fetch('https://api.publicapis.org/entries');
    const data1 = await response1.json();

    yield { data1, data2: null }

    const response2: any = await fetch('https://catfact.ninja/fact');
    const data2 = await response2.json();

    return  { data1, data2 }
  }