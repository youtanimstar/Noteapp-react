import React, { useEffect } from "react"
import {Sidebar,Editor} from "./Components/index"
import Style from "./css/index.module.css"
import { useDispatch, useSelector } from "react-redux"
import { setAllData, getAllData } from './Features/notesSlice';

let list = JSON.parse(localStorage.getItem("note"));

function App() {
  useEffect(()=>{
    window.onload = function(){
      dispatch(getAllData(list));
      
    }
  })
  const note = useSelector(state=>state.note);
  const dispatch = useDispatch();
  useEffect(()=>{
    localStorage.setItem("note",JSON.stringify(note));
  },[note]);
  

  return (
    <>
      <div className={Style.container}>
          <div className={Style.left}>
            <Sidebar/>
          </div>
          <div className={Style.right}>
            <Editor/>
          </div>
      </div>
    </>
  )
}

export default App
