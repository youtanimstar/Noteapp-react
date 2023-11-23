import React, { useState } from 'react'
import { FaPlus} from "react-icons/fa";
import Style from "../../css/sidebar.module.css";
import {Notes} from "../index"
import { useDispatch, useSelector } from 'react-redux';
import { addNote } from '../../Features/notesSlice';

const Sidebar = () => {
  const [input, setInput] = useState("");
  const note = useSelector(state => state.note);
  const dispatch = useDispatch();
  const handleInput = (e)=>{
    e.preventDefault();
    const data = {
      id: Date.now(),
      title: input,
      description: "",
    }
    // console.log(data);
    // setInput("");
    dispatch(addNote(data));
    setInput("");
  }
  return (
    <div className={Style.sidebar}>
        <form onSubmit={handleInput}className={Style.searchSection}>
          <input
            type="text"
            className={Style.searchInput}
            placeholder="Create a new note..."
            value={input}
            onChange={(e)=>setInput(e.target.value)}
          />
          <div className={Style.plusBox} onClick={handleInput}>
            <FaPlus className={Style.plus} />
          </div>
        </form>
        <div className={Style.notesSection}>
          {
            note.map((item,index)=><Notes key={item.id} title={item.title} id={item.id}/>)
          }
            
        </div>
      </div>
  )
}

export default Sidebar