import React, { useCallback } from "react";
import Style from "../../css/notes.module.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { deleteNote, setCurrentNote } from "../../Features/notesSlice";
const Notes = ({ title, id }) => {

  const dispatch = useDispatch();

  const updateTitle = useCallback((value)=>title.length>=value?`${title.slice(0,value)}...`:title,[title])

  return (
    <div className={Style.wrapper}>
      <div
        onClick={() => dispatch(setCurrentNote(id))}
      >
        <div className={Style.notes}>
          <div
            type="text"
            className={Style.notesTitle}
            disabled
            placeholder="Title.."
          >
            {
              updateTitle(18)
            }
          </div>
          {/* <input type="text" className={Style.notesTitle} disabled value={title} onClick={() => dispatch(setCurrentNote(id))}/> */}
        </div>
      </div>
      <div
        className={Style.dropdownButton}
        onClick={() => dispatch(deleteNote(id))}
      >
        <RiDeleteBin6Line className={Style.dropdown} />
      </div>
    </div>
  );
};

export default Notes;
