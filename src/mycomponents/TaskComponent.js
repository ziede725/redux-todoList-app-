import React from 'react'
import { makeStyles  } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import { CardActionArea, CardActions, CardContent, CardHeader, Typography } from '@material-ui/core'
import { v4 as uuidv4 } from 'uuid';
import {useDispatch, useSelector} from 'react-redux'
import {toggleEdit } from '../actions/toggleModals'
import {remove} from '../actions/TaskComponentAction'
import EditModal from './EditModal'

const useStyles = makeStyles({
    ListStyle : {
        height: "150px" ,
        color : "black"  , 
        
   
    } , 
    CardContainer: {
        display : "flex" , 
        justifyContent : "center" , 
        margin: "4px"
    } , 
    CardStyle : {
        width : "80%", 
        color : "blue"  , 
        backgroundColor : "none"
    }
}) 

const TaskComponent =(props) =>{
    const classes = useStyles() ; 
  
    const dispatch = useDispatch() ;

    
    return (
        <>
       
        <div className = {classes.CardContainer}>
        <Card className = {classes.CardStyle} elevation={4}>
        <CardContent>
        <Typography color="textSecondary" gutterBottom>
         Task Name: {props.title}
        </Typography>
        <Typography color = "textSecondary" gutterBottom>
          Description : {props.description}
        </Typography>
       
        </CardContent>
        
            <CardActions>
                <Button onClick={()=>dispatch(toggleEdit(props))}>Edit</Button>
                <EditModal/>
                <Button onClick={()=> {dispatch(remove(props.id))
                }
                    }>Remove</Button>
            </CardActions>
        
        </Card>
       
        </div>
        </>
    )

}
export default TaskComponent ; 