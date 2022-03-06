import React,{useState} from 'react';
import './form.css';
import Button from '../UI/Button.js'

const Form=(props)=>{
    const [message,setMessage]=useState('')
    const [isValid,setIsValid]=useState(true);
    const messageHandler=(event)=>{
        setMessage(event.target.value)
        setIsValid(true)

    }
   
    const submitHandler=(event)=>{
        event.preventDefault();
        const goalData={
            goalName:message,
            id:Math.random().toString(),
          
        }
        if(message.trim().length===0){
          setIsValid(false)
          return;
        }
        props.addgoal(goalData)
        setMessage('');

    }
    return(
        <div className="flex justify-center items-center mb-8 relative  py-3 ">
          <div className='absolute flex font-semibold lg:-top-20  p-2 lg:font-extrabold w-full lg:tracking-widest  -top-8 left-12 md:left-52 lg:text-8xl text-4xl  text-cyan-700 '><p>TO DO LIST</p>
          <div className='hidden  relative w-1/2 lg:flex justify-end '>
            <div className='shadow-lg border-2 border-red-600 shadow-rose-500  absolute rounded-full translate transform -bottom-48 right-40  opacity-50 bg-rose-500 h-24 w-24'></div>
            <div className='shadow-lg border-2 border-green-600 shadow-green-500 absolute rounded-full transform translate -bottom-24 right-60  opacity-50 bg-green-500 h-24 w-24'></div>
            <div className='shadow-lg border-2 border-amber-600 shadow-amber-500 absolute rounded-full bg-amber-500 opacity-50 right-40  h-24 w-24'></div>
          </div>
          </div>
          
          
          <div className=" relative border border-gray-200 bg-white p-4 lg:w-2/5 w-5/6 text-cyan-600 text-lg font-medium shadow-2xl rounded-lg">
          <div className="flex justify-center tracking-wide font-semibold  items-center lg:text-xl mb-4"> <p>Add the activities you want to add in below box </p>   </div>
          <form onSubmit={submitHandler} >
             
             <div className="pt-4">
               <label className="mr-2 flex-1 " >Add Goal :</label>
               <input type='text' id='message' value={message} className="w-5/6 outline-none  text-gray-600 text-lg px-2 h-10 rounded shadow-lg hover:border-cyan-600 border-b-4  border-gray-300" onChange={messageHandler}></input>
             
             </div>
             <div className="flex mt-8 justify-end items-center">

               <div>
                  <Button  type='submit'>
                     Add Message
               
                  </Button>
               </div>
             
             
             </div>
          
          
          
          
          
          </form></div>
        
        
        
        
        </div>

    )
}
export default Form;