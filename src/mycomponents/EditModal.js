import React from 'react'
import Button from '@material-ui/core/Button'
import { TextField , Dialog, DialogContent, DialogTitle, DialogContentText,DialogActions } from '@material-ui/core'
import {useState} from 'react'
import {useDispatch ,useSelector} from 'react-redux'
import { save } from '../actions/TaskComponentAction'
import { toggleEdit} from "../actions/toggleModals"


const EditModal =(props) =>{
  
  const id = props.id 
   const [description , setDescription] = useState(""); 
   const [title, setTitle]= useState("")
    const dispatch = useDispatch() ; 
    
    
    
    return (
  
        <>
        <Dialog open={props.open} aria-labelledby="form-dialog-title">
            <DialogTitle>New Task</DialogTitle>
            <DialogContent>
            <DialogContentText>
                Fill in the new Task 
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Task Name"
                type="text"
                fullWidth
                onChange ={(e)=>
                  
                 setTitle(e.target.value)}
              />
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Task Description"
                type="text"
                
                fullWidth
                onChange ={(e)=> setDescription(e.target.value)}
                
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={props.handleModal} color="primary">
                Cancel
              </Button>
              <Button onClick={()=>{ return(props.handleModal() ,dispatch(save({description,title,id})))}} color="primary">
                save
              </Button>
            </DialogActions>
        </Dialog>
        </>)
}
export default EditModal ; 