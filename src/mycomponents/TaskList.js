import React, { useEffect } from 'react'
import TaskComponent from './TaskComponent';
import {useSelector} from 'react-redux'




const TaskList = () => {
    const list = useSelector(state => state.taskReducer.list)
    const filteredList = useSelector(state=>state.taskReducer.filteredList)
    const filter = useSelector(state=> state.taskReducer.filter)
    

return (
    <>
    <div>
   {   !filter ? (list !=null && 
       list.map((el)=> 

            
               <div key = {el.id}>
                   <TaskComponent title={el.title} 
                   description={el.description} 
                   id ={el.id} 
                   isDone = {el.isDone}
                   iconColor = {el.color}
              

                   />
                     </div>      
           
       )) : (filteredList != null && 
                    filteredList.map ((el)=> 

               <div key = {el.id}>
               <TaskComponent title={el.title} 
               description={el.description} 
               id ={el.id} 
               isDone = {el.isDone}
          

               />
                 </div>  
                    ))
 }
    </div>
    </>
)
}
export default TaskList ; 
