
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
           return {...state , list:[ {title: action.payload.title , description: action.payload.description}]}
        }
        case "CREATE" : 
        
            
           // const newList = [...state.list , ...[action.payload]] ;
           // console.log(newList) 
           // state.list = newList; 
            return {...state,list:[...state.list , action.payload]}
    
        case "TOGGLE_EDIT": 
            {
             const a ={...state , toggleEditModal: !state.toggleEditModal , payload : action.payload}
             return  a
                 
            }
        case "TOGGLE_EDIT_NO":
                {
                    return {...state , toggleEditModal:!state.toggleEditModal}
                }
        case "DONE": 
        {
            return{...state , list: state.list.map((el)=> el.id === action.payload ? {...el ,isDone : !el.isDone} : el)}
        }
        default : 
        return state ;
    }
}
export default taskReducer
