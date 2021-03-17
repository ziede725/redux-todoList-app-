
const initialState ={
    list :[{
        title: "prepare dinner",
        description: "get some eggs" , 
        isDone : false ,
        id: 0
    }],
    toggleEditModal : false 
    
}
const taskReducer = (state= initialState, action )=> {
    switch(action.type){
     
      
        case "REMOVE": 
        {
        return {...state,list:state.list.filter(el=> el.id != action.payload)}
        
        
        }
        case "SAVE": 
        { 
            const index = state.list.findIndex(el=> el.id == action.payload.id)
            
          
            state.list[index].title = action.payload.title  ; 
            state.list[index].description = action.payload.description ; 
            return state ;  
        }
        case "CREATE" : 
        
            
           // const newList = [...state.list , ...[action.payload]] ;
           // console.log(newList) 
           // state.list = newList; 
            return {...state,list:[...state.list , action.payload]}
        case "TOGGLE_ADD": 
            {
                console.log({...state})
                return state ; 
            }
    
        case "TOGGLE_EDIT": 
            {
             const a ={...state , toggleEditModal: !state.toggleEditModal , payload : action.payload}
             return  a
                 
            }
        case "TOGGLE_EDIT_NO":
                {
                    return {...state , toggleEditModal:!state.toggleEditModal}
                }
        default : 
        return state ;
    }
}
export default taskReducer
