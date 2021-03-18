import React, { useCallback, useEffect } from 'react'
import { makeStyles  } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import { CardActionArea, CardActions, CardContent, CardHeader, Icon, Typography, useFormControl } from '@material-ui/core'
import {useDispatch, useSelector} from 'react-redux'
import {editDone, remove} from '../actions/TaskComponentAction'
import EditModal from './EditModal'
import CheckCircleOutlineTwoToneIcon from '@material-ui/icons/CheckCircleOutlineTwoTone';
import { IconButton } from '@material-ui/core';
import {useState} from 'react'

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
    const [openModal, setOpenModal] = useState(false) ; 
    const dispatch = useDispatch() ;
    const [color , setColor] =useState(props.iconColor)
    console.log(props.isDone)
  
    const handleModal= () =>{
        setOpenModal(!openModal) ;
   
    }
    // const renderColor = useCallback(() =>{
    //     props.isDone? setColor("primary") : setColor("secondary")
    // }
    // )
    const handleColor= () =>{
        if (props.isDone === true) {
                setColor("secondary")
                dispatch(editDone({id: props.id , color:color}))
        }
        else {
            setColor("primary")
            dispatch(editDone({id: props.id , color: color}))
        }
    }
   

  
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
                <Button onClick={handleModal}>Edit</Button>
                
                <Button onClick={()=> {dispatch(remove(props.id))
                }
                    }>Remove</Button>
                    <IconButton onClick={handleColor}>
                       
                    <CheckCircleOutlineTwoToneIcon color={color}/>
                    </IconButton>
                    
            </CardActions>
         <EditModal id={props.id} open={openModal} handleModal={handleModal}/>
        </Card>
        
       
        </div>
        </>
    )

}
export default TaskComponent ; 