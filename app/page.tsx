'use client'
import { useState } from "react";


export default function Home() {
const [number, setnumber] = useState(0)  
function setincrement(){
  setnumber(number+1)
}
function setdecrement(){
  if(number > 0){
    setnumber(number-1)
  }
}

function enter(){
  console.log('enter');
}
function outer(){
  console.log('outer');
}




  return (
   <>
   {/* work 1 */}
      <div className="flex items-center gap-x-5 text-xl mt-6 ml-3">
          <button className="px-12 py-3 text-white bg-green-600 rounded-2xl" onClick={setincrement} onMouseEnter={enter} onMouseLeave={outer}>+</button>
           <p>{number}</p> 
          <button className="px-12 py-3 text-white bg-red-500 rounded-2xl" onClick={setdecrement}>-</button>
      </div>

  {/* input work 2 */}
    <div className="mt-12 ml-3">
      <input type="text" name="name" id="name" placeholder="Enter Your Name" 
      className="outline-none rounded-xl px-4 py-2 border-[1px] border-green-400"
      onChange={(e)=>{
       console.log(e.target.value);

       console.log('ak');
       
       
        
      }}
      />
    </div>


   </>
  );
}
