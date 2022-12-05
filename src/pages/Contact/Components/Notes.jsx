import React, { useState, useEffect } from "react";
import Logo from "../../../assets/images/logo.svg";

import "../index.css";

export const Notes = (props) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const notes = props.selectedContact.notes;
    console.log("!!!!!!!", notes);
    setNotes(notes);
  }, [props.selectedContact]);

  const handleGetTime = () => {
    var today = new Date();
    var date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    var time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + " " + time;
    return dateTime;
  };

  const handleAddNote = (e) => {
    if (e.key === "Enter") {
      // var currentTime = handleGetTime();
      // const newNote = {
      //   content: e.target.value,
      //   time: currentTime,
      // };
      // let tempNotes = [...notes];
      // tempNotes.push(newNote);

      const contact_id = props.selectedContact.id;
      const address_book_id = props.selectedContact.address_book_id;
      const newNote = e.target.value;

      props.handleNewNote(address_book_id, contact_id, "notes", newNote);
    }
  };

  useEffect(() => {
    setNotes(props.selectedContact.notes);
  });

  return (
    <div>
      <div className="px-[26px] pt-[2rem] mb-[8px]">
        <p className="text-darkGrayText text-[13px]">
          Notes <span>{notes.length}</span>
        </p>
      </div>
      {notes.map((item, key) => {
        return (
          <div className="flex pl-[16px] pr-[12px] py-[8px]">
            <div className={`flex gap-x-4 items-center`}>
              <img src={Logo} alt="" className="pl-2" />
            </div>
            <div className="ml-[12px]">
              <div id="header" className="flex">
                <div id="author" className="text-[14px]">
                  {item.author ? item.author : "Eric Turner"}
                </div>
                <div
                  id="time"
                  className="text-darkGrayText text-[13px] ml-[5px] font-[450] font-sans"
                >
                  {item.human_created_at_date}
                </div>
              </div>
              <div id="note" className="text-[13px]">
                {item.note ? item.note : "aaaaaaaaaffffffff"}
              </div>
            </div>
          </div>
        );
      })}
      <div className="flex flex-col pt-6 pl-5 pr-1">
        <textarea
          id="notes"
          rows="4"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write a note..."
          onKeyDown={handleAddNote}
        ></textarea>
      </div>
    </div>
  );
};
