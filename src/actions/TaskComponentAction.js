
export const remove = (payload)=>{
    return {
        type: "REMOVE",
        payload 
    }

}
export const save = (payload) =>{
    return{
        type: "SAVE",
        payload
    }
}
export const editDone = (payload) =>{
    return {
        type: "DONE",
        payload 
    }
}
