
const initialState ={
    list :[{
        title: "prepare dinner",
        description: "get some eggs" , 
        isDone : false ,
        id: 0,
        color: "disabled"
    }] , 
    filteredList : [] ,
    filter : false  
    
}
const taskReducer = (state= initialState, action )=> {
    switch(action.type){
     
      
        case "REMOVE": 
        {
        return {...state,list:state.list.filter(el=> el.id != action.payload) , filteredList:state.filteredList.filter(el=>el.id != action.payload)}
        
        
        }
        case "SAVE": 
        { 
           return({...state , list: state.list.map(el=> el.id ===action.payload.id ? 
            {...el, title:action.payload.title , description: action.payload.description} :el)}) 
           
        }
        case "CREATE" : 
        
            
           // const newList = [...state.list , ...[action.payload]] ;
           // console.log(newList) 
           // state.list = newList; 
            return {...state,list:[...state.list , action.payload]}
      
        case "DONE": 
        // { console.log(action.payload)
        {
           
            return{...state , list: state.list.map((el)=> el.id === action.payload.id? {...el ,isDone : !el.isDone ,color:action.payload.color} : el) ,
        filteredList:state.list.map((el)=> el.id === action.payload.id? {...el ,isDone : !el.isDone ,color: action.payload.color} : el)}
        }
             
        case "FILTER_DONE":
            {
                return{...state, filteredList: state.list.filter((el)=>el.isDone === true ) , filter: true }
            }
         case "Filter_UNDONE": 
            {
                return{...state , filteredList : state.list.filter(el=>el.isDone === false) , filter: true }
            }
            case "FILTER" : 
            return {...state , filter : false }
        default : 
        return state ;
    }
}
export default taskReducer
