import React from 'react'
import TaskComponent from './TaskComponent';
import {useSelector} from 'react-redux'



const TaskList = () => {
    const list = useSelector(state => state.taskReducer.list)

return (
    <>
    <div>
   {   list !=null && 
       list.map((el)=> 
          
         
               <div key = {el.id}>
                   <TaskComponent title={el.title} 
                   description={el.description} 
                   id ={el.id} 
                   isDone = {el.isDone}
              

                   />
                     </div> 
            
                   

              
           
       )
 }
    </div>
    </>
)
}
export default TaskList ; 
