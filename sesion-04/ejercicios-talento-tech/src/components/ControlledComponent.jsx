import { useState } from "react"

const ControlledComponent = () => {

    const [inputValue, setInputValue] = useState("")
    const [values, setValues] = useState("")

    const addElement = () => {
        setValues([...values, inputValue])
        setInputValue("")
    }

    return <div>
        <input type="text" value={inputValue} onChange={
            (e) => {
                setInputValue(e.target.value)
            }
        } />
        <p>{inputValue}</p>
        <button>Añadir elemento</button>
    </div>
}

export default ControlledComponent