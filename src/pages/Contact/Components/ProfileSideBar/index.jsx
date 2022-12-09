import React, { useState, useEffect, useRef, useContext } from "react";

import { ContactContext } from "../..";
import { UserProfile } from "./UserProfile";
import { ContactInfo } from "./ContactInfo";
import { Notes } from "./Notes";

import "../../index.css";

export const ProfileSideBar = (props) => {
  const { selectedContact, handleUpdateContacts } = useContext(ContactContext);

  const [selectedIndex, setSelectedIndex] = useState(false);
  const bottomRef = useRef(null);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleUpdateContacts(e.target.name, e.target.value, selectedContact.id);
      handleDivBlur();
    }
  };

  const handleDivBlur = (event) => {
    setSelectedIndex(false);
  };

  useEffect(() => {
    if (bottomRef) {
      setTimeout(() => {
        bottomRef.current.scrollIntoView();
      }, 100);
    }
  }, [props]);

  return (
    <div className="col-span-1 text-black dark:text-white h-screen overflow-y-scroll overflow-x-hidden section">
      {selectedContact !== undefined && (
        <div>
          <UserProfile
            selectedIndex={selectedIndex}
            handleKeyDown={handleKeyDown}
            handleDivBlur={handleDivBlur}
            setSelectedIndex={setSelectedIndex}
          />

          <ContactInfo />

          <Notes />
        </div>
      )}
      <div ref={bottomRef} />
    </div>
  );
};
