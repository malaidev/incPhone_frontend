import React, { useState, useEffect, useContext } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { BiPhoneCall, BiMessageAltDetail, BiMailSend } from "react-icons/bi";

import { ContactContext } from "../..";
import { FiMoreHorizontal } from "react-icons/fi";
import { Avatars } from "../../../../assets";
import "../../index.css";

export const UserProfile = (props) => {
  const { selectedContact } = useContext(ContactContext);
  const { selectedIndex, handleDivBlur, handleKeyDown } = props;
  return (
    <div>
      <div className="flex flex-col px-[24px] pt-[40px]">
        <span className="flex justify-center relative">
          <img alt="Avatar" src={Avatars.Default} width="80" height="80" />
          <span className="text-white absolute top-1/4 text-3xl font-bold">
            {selectedContact.initials}
          </span>
        </span>

        <div>
          {selectedIndex == true ? (
            <OutsideClickHandler
              onOutsideClick={() => {
                handleDivBlur();
              }}
            >
              <div
                className="style-editName style-darkShadow"
                onBlur={handleDivBlur}
              >
                <label className="text-darkGrayText text-[13px] font-[450]">
                  First name
                </label>
                <input
                  id="edit-first-name"
                  name="first_name"
                  className="text-black dark:text-white style-editNameInput "
                  placeholder="Add a first name..."
                  defaultValue={selectedContact.first_name}
                  onKeyDown={handleKeyDown}
                />
                <label className="text-darkGrayText text-[13px] font-[450]">
                  Last name
                </label>
                <input
                  id="edit-last-name"
                  name="last_name"
                  className="text-black dark:text-white style-editNameInput"
                  placeholder="Add a last name..."
                  defaultValue={selectedContact.last_name}
                  onKeyDown={handleKeyDown}
                />
              </div>
            </OutsideClickHandler>
          ) : (
            <div
              className="outline-none text-center cursor-pointer text-2xl font-bold my-[15px]"
              onClick={() => {
                props.setSelectedIndex(true);
              }}
            >
              {selectedContact.first_name + " " + selectedContact.last_name}
            </div>
          )}
        </div>

        <div className="flex items-center justify-center pb-8 border-b border-gray-300 dark:border-gray-600">
          <button className="profileRoundBtn hover:text-primary hover:bg-[#e7e7e9] dark:darkProfileRBtn dark:hover:bg-[#2d2d40] dark:hover:text-primary">
            <BiPhoneCall className="w-6 h-6 m-auto" />
          </button>
          <button className="profileRoundBtn hover:text-primary hover:bg-[#e7e7e9] dark:darkProfileRBtn dark:hover:bg-[#2d2d40] dark:hover:text-primary">
            <BiMessageAltDetail className="w-6 h-6 m-auto" />
          </button>
          <button className="profileRoundBtn hover:text-primary hover:bg-[#e7e7e9] dark:darkProfileRBtn dark:hover:bg-[#2d2d40] dark:hover:text-primary">
            <BiMailSend className="w-6 h-6 m-auto" />
          </button>
          <button className="profileRoundBtn hover:text-primary hover:bg-[#e7e7e9] dark:darkProfileRBtn dark:hover:bg-[#2d2d40] dark:hover:text-primary">
            <FiMoreHorizontal className="w-6 h-6 m-auto" />
          </button>
        </div>
      </div>
    </div>
  );
};
