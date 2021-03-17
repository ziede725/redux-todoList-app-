
export const descriptionChange = (description) =>{
    return {
        type: "DESCRIPTION" ,
        payload : description
    }
}
export const titleChange = (title) =>{
    return{
        type: "TITLE" ,
        payload : title
    }
}
export const taskCreate = (payload) =>{
    return {
        type : "CREATE" , 
        payload 
        }
}