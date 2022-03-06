import React,{useState} from 'react';
import Form from './component/Form/Form.js';
import './index.css';
import GoalList from './component/goal/GoalList.js';





function App() {
  const [goalItems,setGoal]=useState([
    { goalName: 'Do all exercises!', id: 'g1' },
    { goalName: 'Finish the course!', id: 'g2' }
  ])

  
  

  
  const appGoal=(newGoal)=>{
    setGoal((prevGoal)=>{
      const updatedGoals=[newGoal,...prevGoal];
     
      return updatedGoals;
      
      
    })
  }
  const deleteGoalHandler=(goalId)=>{
    setGoal((prevGoal)=>{
      const updatedGoals=prevGoal.filter((goal)=>goal.id !== goalId);
      return updatedGoals;
      

    })


  }
  let content =( <div className='flex justify-center items-center px-4 lg:px-0 '><p className='bg-cyan-600  rounded-lg text-cyan-200 hover:bg-gray-300 hover:text-cyan-600 transition duration-500 lg:w-1/2 py-6  shadow-lg font-semibold text-xl text-center'>There is no message right now . want to add some?</p></div>);
  if(goalItems.length > 0){
    content=(
      <GoalList items={goalItems}  onDeleteItem={deleteGoalHandler}/>

    )
  }
  return (
    <div className="">
      
    
     
     <div className=" pt-24 relative  min-h-screen ">
     <div className='absolute min-h-screen w-full  opacity-50 bg-gradient-to-b from-white to-rose-600 via-rose-400'>

</div>
     
    <Form className="relative" addgoal={appGoal}/>
    
   
    <div className='absolute hidden lg:flex  translate-x-24  translate-y-20  w-1/2  justify-start '>
            <div className='shadow-lg border-2 border-red-600 shadow-rose-500  absolute rounded-full -top-48    opacity-50 bg-rose-500 h-24 w-24'></div>
            <div className='shadow-lg border-2 border-green-600 -top-24 shadow-green-500 absolute rounded-full left-24  opacity-50 bg-green-500 h-24 w-24'></div>
            <div className='shadow-lg border-2 border-amber-600 shadow-amber-500  absolute  rounded-full bg-amber-500  opacity-50  h-24 w-24'></div>
          </div>
    <div className='relative opacity-115 '>{content}</div>
    
    
     
    </div>
     </div>
   
  );
}

export default App;
