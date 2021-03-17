import React from 'react'
import {useState } from 'react'
import Button from '@material-ui/core/Button'
import { TextField , Dialog, DialogContent, DialogTitle, DialogContentText,DialogActions } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import {useDispatch ,useSelector} from 'react-redux'
import { v4 as uuidv4 } from 'uuid';
import { descriptionChange, titleChange,taskCreate } from '../actions/AddTaskActions'

const AddTask = () => {
    const useStyles = makeStyles((theme)=>({
        modal : {
            display : 'flex', 
            justifyContent : "center" , 
            alignItems: "center"
        },
        paper: {
            color : "white" , 
            backgroundColor: "black"
          },
          form :{
            
            
          }
    })) 
const [open , setOpen ] = useState(false) ; 
const [title,setTitle]= useState("") ;
const [description , setDescription]= useState("") ; 

const handleClick = ()=> {
    setOpen(true) ; 
}
const handleClose = () =>{
    setOpen(false);
}


  
const classes = useStyles(); 
const buttonText = "New Task" 
const dispatch = useDispatch() ; 
const taskState = useSelector(state => state)
return (
  
    <>
    <Button onClick={handleClick}>{buttonText} </Button>
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
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
            onChange ={ (e) => setTitle(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Task Description"
            type="text"
            fullWidth
            onChange ={(e)=> setDescription(e.target.value) }
            
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={()=>{
            dispatch(taskCreate({title , description ,isDone: false,id:uuidv4()}));
            handleClose() ; 
            
          }} color="primary">
            create
          </Button>
        </DialogActions>
    </Dialog>
    </>
)
}
export default AddTask ; 