import logo from './logo.svg';
import './App.css';
import TaskComponent from "./mycomponents/TaskComponent"
import {useState} from 'react'
import TaskList from "./mycomponents/TaskList.js"
import AddTask from './mycomponents/AddTask';

import Navigation from './mycomponents/Navigation'
import {useSelector} from 'react-redux'
import EditModal from './mycomponents/EditModal'

function App() {





 
  return (
    <>
      
      <Navigation></Navigation>
      <TaskList ></TaskList>
      
    </>
  );
}

export default App;
