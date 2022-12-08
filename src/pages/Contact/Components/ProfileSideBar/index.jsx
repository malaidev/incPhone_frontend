import React, { useState, useEffect } from "react";
import { UserProfile } from "./UserProfile";
import { ContactInfo } from "./ContactInfo";
import { Notes } from "./Notes";

import "../../index.css";

export const ProfileSideBar = (props) => {
  const [selectedIndex, setSelectedIndex] = useState(false);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      props.handleUpdateContacts(
        e.target.name,
        e.target.value,
        props.selectedContact.id
      );
      handleDivBlur();
    }
  };

  const handleDivBlur = (event) => {
    setSelectedIndex(false);
  };
  return (
    <div className="col-span-1 text-black dark:text-white h-screen overflow-y-scroll overflow-x-hidden section">
      {props.selectedContact !== undefined && (
        <div>
          <UserProfile
            selectedContact={props.selectedContact}
            selectedIndex={selectedIndex}
            handleKeyDown={handleKeyDown}
            handleDivBlur={handleDivBlur}
            setSelectedIndex={setSelectedIndex}
          />

          <ContactInfo
            selectedContact={props.selectedContact}
            handleUpdateProperty={props.handleUpdateProperty}
            handleAddProperty={props.handleAddProperty}
            handleDeleteProperty={props.handleDeleteProperty}
          />

          <Notes
            selectedContact={props.selectedContact}
            handleNewNote={props.handleNewNote}
            handleUpdateProperty={props.handleUpdateProperty}
            handleDeleteProperty={props.handleDeleteProperty}
          />
        </div>
      )}
    </div>
  );
};
