import React, { useState, useEffect } from "react"
import { Avatars } from "../../../assets"

import "../index.css"

export const ContactInfo = (props) => {
  const contact = props.selectedContact;
  const contactEntries = Object.entries(contact);

  console.log('@@@', contactEntries)
  return (
    <div>
      <div className="flex flex-col pt-6 pl-5 pr-1">
        <div className="flex px-[10px]">
          <div className="flex items-center w-[60%]">
            <img className="text-black dark:text-white" alt="Avatar" src={Avatars.BagDash} width="14" height="14" />
            <span className="basicFont dark:text-darkGrayText">&nbsp;&nbsp;&nbsp;Business_Name</span>
          </div>
          <div className="flex items-center justify-between w-[100%] hover:bg-[#252434] contactPropertyDiv">
            <span>{contact.business_name}</span>
            <button className="opacity-0 hover:opacity-100">
              <img className="text-black dark:text-darkGrayText" alt="Avatar" src={Avatars.Copy} width="12" height="12" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
