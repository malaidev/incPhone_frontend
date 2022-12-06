import React, { useState, useEffect } from "react";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

import { Avatars } from "../../../assets";
import Logo from "../../../assets/images/logo.svg";
import "../index.css";

export const Notes = (props) => {
  const [notes, setNotes] = useState([]);
  const [noteContent, setNoteContent] = useState("");
  const [showEmojis, setShowEmojis] = useState(false);

  const addEmoji = (e) => {
    let sym = e.unified.split("-");
    let codesArray = [];
    sym.forEach((el) => codesArray.push("0x" + el));
    let emoji = String.fromCodePoint(...codesArray);
    setNoteContent(noteContent + emoji);
  };

  useEffect(() => {
    const notes = props.selectedContact.notes;
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
          <div className="flex pl-[16px] pr-[12px] py-[8px]" key={key}>
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
        <div className="">
          <textarea
            id="notes"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 
            bg-gray-50 dark:bg-darkBack
            rounded-lg border border-gray-300 focus:border-[rgb(245 168 0 / 80%) 0px 0px 0px 1.5px inset, rgb(245 168 0 / 14%) 0px 0px 0px 4px]  
            dark:border-gray-600 dark:placeholder-gray-600 dark:text-white 
            shadow-[rgb(238 238 240 / 12%) 0px 0px 0px 1.5px inset] 
            focus:box-shadow-[rgb(245 168 0 / 80%) 0px 0px 0px 1.5px inset, rgb(245 168 0 / 14%) 0px 0px 0px 4px] 
            focus-visible:box-shadow-[rgb(245 168 0 / 80%) 0px 0px 0px 1.5px inset, rgb(245 168 0 / 14%) 0px 0px 0px 4px]
            outline-none"
            defaultValue={noteContent}
            placeholder="Write a note..."
            onChange={(e) => setNoteContent(e.target.value)}
            onKeyDown={handleAddNote}
          ></textarea>
          <div
            id="emojiIcon"
            className="relative left-[10px] bottom-[25px] w-[max-content]"
          >
            <div className="dropup relative">
              <button onClick={() => setShowEmojis(!showEmojis)}>
                <img
                  className="relativetext-black dark:text-darkGrayText "
                  alt="Avatar"
                  src={Avatars.emojiSmile}
                  width="16"
                  height="16"
                />
              </button>
            </div>
          </div>
        </div>

        <div className="EmojiDiv">
          {showEmojis && (
            <div className="absolute right-[100px] bottom-[60px]">
              {/* <Picker onSelect={addEmoji} /> */}
              <Picker id="emojiPicker" data={data} onEmojiSelect={addEmoji} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
