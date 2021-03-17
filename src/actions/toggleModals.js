

export const toggleAdd = () =>{
    return {
        type : "TOGGLE_ADD"
    }
}
export const toggleEdit = (payload) =>{
    return {
        type : "TOGGLE_EDIT",
        payload
       
    }
}
export const toggleEditNoPayload =()=>{
    return{
        type: "TOGGLE_EDIT_NO"
    }
}