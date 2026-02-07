import { useState } from "react";
import { useEffect } from "react";

const UseEffHooks =() =>{
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);
    const [calculation, setCalculation] = useState(0);
    useEffect(() => {
        setTimeout(() => {
            setCount((count) => count +1);
        }, 1000);
    })
    useEffect(()=>{
        setCalculation(()=> count1 * 2);
    }, [count1])
    return (
        <>
        <h1>I've Rendered {count} times!</h1>
        <p>Count: {count1}</p>
        <button onClick={()=> setCount1((c) => c+1)}>+</button>
        <p>Calculation: {calculation}</p>
        </>
    )
}
export default UseEffHooks;