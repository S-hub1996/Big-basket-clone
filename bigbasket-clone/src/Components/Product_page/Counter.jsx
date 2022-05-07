import React from "react"


 export default function Counter() {
  const [counter,setCounter]=React.useState(0)
  const handleIncrement =(value) =>{
    
    
    
      setCounter(counter+value)
  
    
  }
  console.log('updated',counter)
  return (
    <>
    <div style={{display:"flex",flexDirection:"row",height:"30px"}}>
     <button onClick={() => handleIncrement(1)} > + </button>
               <p>{counter}</p>
     <button onClick={() => handleIncrement(-1)} > - </button>
     </div>
  </>
  );
}