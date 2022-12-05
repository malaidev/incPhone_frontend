import React, { useState, useEffect } from "react"
import { Avatars } from "../../../assets"
import { BiPhoneCall, BiMessageAltDetail, BiMailSend } from "react-icons/bi"
import { UserProfile } from "./UserProfile"
import { ContactInfo } from "./ContactInfo"
import { Notes } from "./Notes"

import "../index.css"

export const ProfileSideBar = (props) => {
  const [selectedIndex, setSelectedIndex] = useState(false)

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      props.handleUpdateContacts(
        e.target.name,
        e.target.value,
        props.selectedContact.id
      )
      handleDivBlur()
    }
  }

  const handleDivBlur = (event) => {
    setSelectedIndex(false)
  }
  return (
    <div className="col-span-1 text-black dark:text-white h-screen overflow-y-scroll overflow-x-hidden">
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
          />

          <Notes
            selectedContact={props.selectedContact}
            handleUpdateProperty={props.handleUpdateProperty}
          />
        </div>
      )}
    </div>
  )
}
