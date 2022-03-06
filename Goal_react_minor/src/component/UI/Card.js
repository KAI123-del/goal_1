import './card.css';
const Card=(props)=>{
    const deleteHandler=()=>{
        props.onDelete(props.id)
    }
    return(
        <div className='flex justify-center items-center p-2'>
           <div className="bg-cyan-600 rounded-lg text-cyan-200 hover:bg-gray-300 hover:text-cyan-600 transition duration-500 w-full  lg:w-1/2 py-6  shadow-lg font-semibold text-xl text-center " onClick={deleteHandler}>{props.children}</div>
        
        </div>
    )
}
export default Card;