import React, { useCallback, useEffect, useState } from 'react'
import Style from "../css/editor.module.css"
import { useDispatch, useSelector } from 'react-redux';
import { updateNote, addNote, setCurrentNote } from '../Features/notesSlice';
import { FaPlus } from "react-icons/fa6";

const Editor = () => {
  const dispatch = useDispatch();
  const current = useSelector(state=>state.currentNote);
  const notes = useSelector(state=>state.note);
  const [data, setData] = useState(current);

  useEffect(() => {
    setData(current);
  }, [current]);

  const handleChange = (name,e)=>{
    setData((prev)=>({...prev,[name]:e.target.value}));
    console.log(data);
    
  }

  useEffect(()=>{
    // if(notes.length === 0)
    // {
    //   dispatch(addNote(data));
    //   console.log(notes.length);
    // }
    dispatch(updateNote(data));
  },[data]);


  

  return (
    <div className={Style.editor}>
        <div className={Style.top}>
          <input
            type="text"
            className={Style.title}
            placeholder="Enter your Title"
            value={data.title}
            onChange={(e)=>handleChange("title",e)}
          />
          <button className={Style.button} onClick={()=>dispatch(addNote(data))}><FaPlus/></button>
        </div>
        <div className={Style.hr}></div>
        <textarea
          name="textarea"
          className={Style.textarea}
          placeholder="Enter your notes"
          value={data.description}
          onChange={(e)=>handleChange("description",e)}
        ></textarea>
      </div>
  )
}

export default Editor