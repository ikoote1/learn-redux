import { useState } from "react"
const Counter = () => {
    const [Counter, newCounter] = useState(0);
    const Increament = () => {
        newCounter(prevCounter => prevCounter+1);
    }
    return(
        <div>
            Value: {Counter}
            <button onClick={Increament}>increament</button>
        </div>
    )
}

export default Counter