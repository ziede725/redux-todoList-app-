import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import SortRoundedIcon from '@material-ui/icons/SortRounded';
import { IconButton } from '@material-ui/core';
import { FilterByDone, FilterByUnDone ,FilterAction} from '../actions/filterAction';
import { useDispatch } from 'react-redux';


export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const dispatch= useDispatch() ; 
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
     <IconButton onClick ={handleClick}>
      <SortRoundedIcon></SortRoundedIcon>
     </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={()=>
        {
          return ( handleClose() ,
          dispatch(FilterByDone()))
        }}>Tasks completed</MenuItem>
        

        <MenuItem onClick={()=>
        {
          return ( handleClose() ,
          dispatch(FilterByUnDone()))
        }}>Tasks not completed</MenuItem>
      
      <MenuItem onClick={()=>
        {
          return ( handleClose() ,
          dispatch(FilterAction()))
        }}>Disable sort</MenuItem>
      </Menu>

    </div>
  );
}