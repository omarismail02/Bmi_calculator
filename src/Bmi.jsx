import React, { useEffect,useState } from "react";
import './New.css'


function Bmi(){
    const [height, setHeight] = useState(0)
    const [weight, setWeight] = useState(0)
    const [status, setStatus ] = useState("")
    useEffect(() =>{
        document.title = 'Bmi-Calculator'
    })
    
    const handleheight = (event) =>{
       setHeight(event.target.value)
    }
    const handleweight = (event) =>{
        setWeight(event.target.value)
     }
    const bmi = weight/ (height*height)
    const calculate = ( () =>{
        
        if(bmi < 18.5){
            setStatus("Underweight")
        } else if (bmi < 25) {
            setStatus("Normal Weight");
        } else if (bmi < 30) {
            setStatus("Overweight");
        } else if (bmi < 35) {
            setStatus("Obese Class I");
        } else if (bmi < 40) {
            setStatus("Obese Class II");
        } else {
            setStatus("Obese Class III (Severe Obesity)");
        }
       console.log('Successed')
    }
    )
    return(<>
    <div className="bmi-calculator">
        <h1>The Bmi Calculator</h1>
        <h2 className="your-bmi">{status}</h2>
        <div className="text-input">
             <input type="text"  placeholder="Height(m)" onChange={(event) => handleheight(event)}/>
        </div>
        <div className="text-input">
             <input type="text"  placeholder="Weight(kg)" onChange={(event) => handleweight(event)}/>
        </div>
        <button onClick={calculate} className="button">Calculate</button>
    </div></>)
}

export default Bmi