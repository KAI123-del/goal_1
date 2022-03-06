import Card from '../UI/Card.js'
import './goal.css';


const GoalList =(props)=>{
    
    return(
        <div className='px-4 lg:px-0' >
            
            {props.items.map((goal)=>(<Card onDelete={props.onDeleteItem}   id={goal.id} key={goal.id} >{goal.goalName}</Card>))}
            
        </div>

    )
}
export default GoalList;