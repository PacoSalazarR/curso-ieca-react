import { useRef, useState } from "react";

const FocusInput = () => {
    const ref1 = useRef(null)
    const ref2 = useRef(null)
    const [values, setValues] = useState([]);

    const focus = (ref) => {
        console.log(ref)
        ref.current.focus()
    }

    return (
        <div className="flex p-8 gap-4">
            <div>
                <input type="text" ref={ref1}/>
                <button onClick={()=>{
                    focus(ref1);
                }}>Focus</button>
            </div>

            <div>
                <input type="text" ref={ref2} />
                <button 
                    onClick={()=>{
                    focus(ref2);
                }}>Focus</button>
            </div>

            <button onClick={()=>{
                setValues([...values,
                    {value1: ref1.current.value, value2: ref2.current.value}])
            }}>Añadir valores</button>
            <div>
                <ul>
                    {values.map((obj)=>{
                        
                    })}
                </ul>
            </div>
        </div>
    );
};

export default FocusInput