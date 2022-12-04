import React, { useState, useEffect } from "react"
import { Avatars } from "../../../assets"
import { BiPhoneCall, BiMessageAltDetail, BiMailSend } from "react-icons/bi"
import { FiMoreHorizontal } from "react-icons/fi"

import "../index.css"

export const UserProfile = (props) => {
  return (
    <div>
      <div className="flex flex-col px-[24px] pt-[40px]">
        <span className="flex justify-center relative">
          <img alt="Avatar" src={Avatars.Default} width="80" height="80" />
          <span className="text-white absolute top-1/4 text-3xl font-bold">
            {props.selectedContact.initials}
          </span>
        </span>

        <div>
          {props.selectedIndex === true ? (
            <div
              className="styled-contact-editname"
              onBlur={props.handleDivBlur}
            >
              <label className="styled-contact-editname-label">
                First name
              </label>
              <input
                id="edit-first-name"
                name="first_name"
                className="styled-contact-editname-input"
                placeholder="Add a first name..."
                defaultValue={props.selectedContact.first_name}
                onKeyDown={props.handleKeyDown}
              />
              <label className="styled-contact-editname-label">Last name</label>
              <input
                id="edit-last-name"
                name="last_name"
                className="styled-contact-editname-input"
                placeholder="Add a last name..."
                defaultValue={props.selectedContact.last_name}
                onKeyDown={props.handleKeyDown}
              />
            </div>
          ) : (
            <div
              className="outline-none text-center cursor-pointer text-2xl font-bold my-[15px]"
              onClick={() => {
                props.setSelectedIndex(true)
              }}
            >
              {props.selectedContact.first_name +
                " " +
                props.selectedContact.last_name}
            </div>
          )}
        </div>

        <div className="flex items-center justify-center pb-8 border-b border-gray-300 dark:border-gray-600">
          <button className="contactInfoRoundButton hover:text-primary hover:bg-[#f3ffbb] dark:hover:bg-[#2d2d40]">
            <BiPhoneCall className="w-6 h-6 m-auto" />
          </button>
          <button className="contactInfoRoundButton hover:text-primary hover:bg-[#f3ffbb] dark:hover:bg-[#2d2d40]">
            <BiMessageAltDetail className="w-6 h-6 m-auto" />
          </button>
          <button className="contactInfoRoundButton hover:text-primary hover:bg-[#f3ffbb] dark:hover:bg-[#2d2d40]">
            <BiMailSend className="w-6 h-6 m-auto" />
          </button>
          <button className="contactInfoRoundButton hover:text-primary hover:bg-[#f3ffbb] dark:hover:bg-[#2d2d40]">
            <FiMoreHorizontal className="w-6 h-6 m-auto" />
          </button>
        </div>
      </div>
    </div>
  )
}
