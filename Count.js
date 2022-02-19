import react from 'react';
import React from 'react';
import "./style.css";

const Count =() => {
    const[myNum, setmyNum]=react.useState(0);
    
  return (
  <>
  <p>{myNum}</p>
 
  <div class="but1" onClick={()=> setmyNum(myNum+1)}>INCR</div>
  <br></br>
  <div class="but2" onClick={()=> myNum>0 ? setmyNum(myNum-1): setmyNum(0)}>DECR</div>
  
  </>
  )
}

export default Count