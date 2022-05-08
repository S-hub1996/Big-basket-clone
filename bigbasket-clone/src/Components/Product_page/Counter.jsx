import React, { useState } from 'react'

export const Counter = () => {
  const [num, setNum] = useState(0);

const incNum = () =>{
setNum(num+1)
}
const decNum = () =>{
  if(num>0){
    setNum(num-1)
  }
  else{
    alert("Sorry Zero Limit Reach!!")
    setNum(0)
  }
 
}



  return (
      <>
    <div className='main_div'>
        <div className='center_div'>
           
            <div style={{display:"flex",flexDirection:"row",height:"30px"
          }} className='btn_div'>
                <button onClick={incNum}>+</button>
                <p>{num}</p>
                <button onClick={decNum}>-</button>
            </div>
        </div>

    </div>
    </>
  )
}
