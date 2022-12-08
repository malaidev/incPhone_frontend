import React, { useState, useEffect } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

import { Avatars } from "../../../../assets";
import Logo from "../../../../assets/images/logo.svg";
import ToastAlert from "../../../../components/ToastAlert";
import "../../index.css";

export const Notes = (props) => {
  const [notes, setNotes] = useState([]);
  const [noteContent, setNoteContent] = useState("");
  const [updateNoteContent, setUpdateNoteContent] = useState("");
  const [showEmojis, setShowEmojis] = useState(false);
  const [showUpdateEmojis, setShowUpdateEmojis] = useState(false);
  const [toastCopyStatus, setCopyToast] = useState(false);
  const [editNoteId, setEditNoteId] = useState();

  const handleSetNoteContent = (e, type) => {
    if (type === "Update") {
      setUpdateNoteContent(e.target.value);
    } else {
      setNoteContent(e.target.value);
    }
  };

  const addEmoji = (e) => {
    let sym = e.unified.split("-");
    let codesArray = [];
    sym.forEach((el) => codesArray.push("0x" + el));
    let emoji = String.fromCodePoint(...codesArray);
    setNoteContent(noteContent + emoji);
    setShowEmojis(!showEmojis);
  };

  const updateEmoji = (e) => {
    let sym = e.unified.split("-");
    let codesArray = [];
    sym.forEach((el) => codesArray.push("0x" + el));
    let emoji = String.fromCodePoint(...codesArray);
    setUpdateNoteContent(updateNoteContent + emoji);
    setShowUpdateEmojis(!showUpdateEmojis);
  };

  useEffect(() => {
    const notes = props.selectedContact.notes;
    setNotes(notes);
  }, [props.selectedContact]);

  const handleAddNote = (e) => {
    if (e.key === "Enter") {
      const contact_id = props.selectedContact.id;
      const address_book_id = props.selectedContact.address_book_id;
      const newNote = {
        note: e.target.value,
      };

      props.handleNewNote(address_book_id, contact_id, "notes", newNote);
      setNoteContent("");
    }
  };

  const handleUpdateKeyDown = (e) => {
    if (e.key === "Enter") {
      handleUpdateNote();
    }
  };
  const handleUpdateNote = () => {
    const contact_id = props.selectedContact.id;
    const address_book_id = props.selectedContact.address_book_id;
    const newNote = {
      note: updateNoteContent,
    };

    props.handleUpdateProperty(
      address_book_id,
      contact_id,
      editNoteId,
      "notes",
      newNote
    );
    setNoteContent("");
    setEditNoteId();
  };

  const handleRemoveNote = (noteId) => {
    const contact_id = props.selectedContact.id;
    const address_book_id = props.selectedContact.address_book_id;
    props.handleDeleteProperty(address_book_id, contact_id, "notes", noteId);
  };

  useEffect(() => {
    setNotes(props.selectedContact.notes);
  });

  const toastCopyAlert = () => {
    setCopyToast(!toastCopyStatus);

    setTimeout(() => {
      setCopyToast(false);
    }, 1500);
  };

  return (
    <div>
      <div className="px-[26px] pt-[2rem] mb-[8px]">
        <p className="text-darkGrayText text-[13px]">
          Notes <span>{notes.length}</span>
        </p>
      </div>
      {notes.map((item, key) => {
        return (
          <div className="flex relative pl-[16px] pr-[12px] py-[8px]" key={key}>
            <div className={`flex gap-x-4 items-center`}>
              <img src={Logo} alt="" className="pl-2" />
            </div>

            {editNoteId === item.id ? (
              <div className="block w-full bg-gray-50 dark:bg-darkBack rounded-lg border border-gray-300 dark:border-gray-600 dark:placeholder-gray-600 dark:text-white px-2 py-1 ml-[10px]">
                <textarea
                  id="notes"
                  rows="1"
                  className="block p-1 w-full text-sm text-gray-900 bg-gray-50 dark:bg-darkBack dark:placeholder-gray-600 dark:text-white outline-none"
                  value={updateNoteContent}
                  placeholder="Write a note..."
                  onChange={(e) => handleSetNoteContent(e, "Update")}
                  onKeyDown={handleUpdateKeyDown}
                ></textarea>
                <div className="flex justify-between">
                  <div id="emojiIcon" className="relative w-[max-content]">
                    <div className="dropup relative">
                      <button
                        onClick={() => setShowUpdateEmojis(!showUpdateEmojis)}
                      >
                        <img
                          className="relativetext-black dark:text-darkGrayText "
                          alt="Avatar"
                          src={Avatars.emojiSmile}
                          width="16"
                          height="15"
                        />
                      </button>
                    </div>
                  </div>
                  <div id="save-cancel-btn">
                    <button
                      className="rounded-sm text-[12px] px-[8px] py-[5px] text-darkGrayText mr-[5px] h-[24px] hover:bg-[#252434] leading-none"
                      onClick={() => setEditNoteId()}
                    >
                      Cancel
                    </button>
                    <button
                      className="rounded-sm text-[12px] px-[8px] py-[5px] h-[24px] bg-[#FCB200] hover:bg-[#cd940b] leading-none"
                      onClick={() => handleUpdateNote()}
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex  ml-[12px]">
                <div>
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
                    {item.note ? item.note : ""}
                  </div>
                </div>
                <div className="absolute right-[10px]">
                  <button
                    value={item.note ? item.note : ""}
                    onClick={(e) => {
                      toastCopyAlert();
                      navigator.clipboard.writeText(item.note ? item.note : "");
                    }}
                  >
                    <img
                      className="text-black dark:text-darkGrayText"
                      alt="Avatar"
                      src={Avatars.copy}
                      width="12"
                      height="12"
                    />
                  </button>
                  <button
                    className="mx-[10px]"
                    value={item.note}
                    onClick={() => {
                      setEditNoteId(item.id);
                      if (item.note) {
                        setUpdateNoteContent(item.note);
                      }
                    }}
                  >
                    <img
                      className="text-black dark:text-darkGrayText"
                      alt="Avatar"
                      src={Avatars.pencilFill}
                      width="12"
                      height="12"
                    />
                  </button>
                  <button
                    value={item.id}
                    onClick={() => {
                      handleRemoveNote(item.id);
                    }}
                  >
                    <img
                      className="text-black dark:text-darkGrayText"
                      alt="Avatar"
                      src={Avatars.trash}
                      width="12"
                      height="12"
                    />
                  </button>
                </div>
              </div>
            )}
          </div>
        );
      })}

      <div className="flex flex-col pt-6 pl-5 pr-1">
        <div className="">
          <textarea
            id="notes"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-darkBack dark:border-gray-600 dark:placeholder-gray-600 dark:text-white rounded-lg border border-gray-300 outline-none"
            value={noteContent}
            placeholder="Write a note..."
            onChange={(e) => handleSetNoteContent(e, "Add")}
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

        <div className="NewEmojiDiv">
          <OutsideClickHandler
            onOutsideClick={() => {
              setShowEmojis(false);
            }}
          >
            {showEmojis && (
              <div className="absolute right-[100px] bottom-[60px]">
                <Picker id="emojiPicker" data={data} onEmojiSelect={addEmoji} />
              </div>
            )}
          </OutsideClickHandler>
        </div>

        <div className="UpdateEmojiDiv">
          <OutsideClickHandler
            onOutsideClick={() => {
              setShowUpdateEmojis(false);
            }}
          >
            {showUpdateEmojis && (
              <div className="absolute right-[100px] bottom-[60px]">
                <Picker
                  id="emojiUpdatePicker"
                  data={data}
                  onEmojiSelect={updateEmoji}
                />
              </div>
            )}
          </OutsideClickHandler>
        </div>
      </div>

      {toastCopyStatus ? (
        <ToastAlert
          text="Copied to clipboard"
          toastCopyStatus={toastCopyStatus}
          setCopyToast={setCopyToast}
        />
      ) : (
        ""
      )}
    </div>
  );
};
