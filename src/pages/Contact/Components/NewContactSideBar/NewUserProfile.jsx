import React, { useState, useEffect } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { BiPhoneCall, BiMessageAltDetail, BiMailSend } from "react-icons/bi";
import { FiMoreHorizontal } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";

import { Avatars } from "../../../../assets";
import "../../index.css";

export const NewUserProfile = (props) => {
  const {
    contacts,
    AddNewNameToogle,
    setAddNewNameToogle,
    handleSaveNewContact,
  } = props;
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSave();
    }
  };

  const handleSave = () => {
    const address_book_id = contacts[0].address_book_id;

    const newContact = {
      first_name: first_name,
      last_name: last_name,
    };

    handleSaveNewContact(address_book_id, newContact);

    setAddNewNameToogle(false);
  };
  return (
    <div>
      <div className="flex flex-col px-[24px] pt-[40px]">
        <span className="flex justify-center relative">
          <img alt="Avatar" src={Avatars.PersonCircle} width="80" height="80" />
        </span>

        <div>
          {AddNewNameToogle ? (
            <OutsideClickHandler
              onOutsideClick={() => {
                setAddNewNameToogle(false);
              }}
            >
              <div className="border-b border-gray-300 dark:border-gray-600 pb-[31px]">
                <div className="w-[270px] style-editName style-darkShadow">
                  <label className="text-darkGrayText text-[13px] font-[450]">
                    First name
                  </label>
                  <input
                    id="edit-first-name"
                    name="first_name"
                    className="text-black dark:text-white style-editNameInput "
                    placeholder="Add a first name..."
                    defaultValue=""
                    onChange={(e) => setFirstName(e.target.value)}
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
                    defaultValue=""
                    onChange={(e) => setLastName(e.target.value)}
                    onKeyDown={handleKeyDown}
                  />
                </div>

                <div className="w-[max-content] bg-[#21212F] mt-[5px] m-auto rounded-lg text-darkGrayText">
                  <div
                    className="flex items-center min-w-[146px] py-[8px] cursor-pointer"
                    onClick={() => {
                      handleSave();
                    }}
                  >
                    <button className="w-[30px] h-[30px] bg-cgray dark:bg-[#1a1925] rounded-full mx-[10px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        className="m-auto"
                      >
                        <path
                          fill="#A36EFF"
                          d="M10 3.8a.7.7 0 0 1 .694.605l.006.095-.001 4.8H15.5a.7.7 0 0 1 .095 1.394l-.095.006-4.801-.001.001 4.801a.7.7 0 0 1-1.394.095L9.3 15.5v-4.801l-4.8.001a.7.7 0 0 1-.095-1.394L4.5 9.3h4.8V4.5a.7.7 0 0 1 .7-.7Z"
                        ></path>
                      </svg>
                    </button>
                    Create
                  </div>
                </div>
              </div>
            </OutsideClickHandler>
          ) : (
            <div>
              <div
                className="outline-none text-center cursor-pointer text-2xl font-bold my-[15px] text-gray-500"
                onClick={() => {
                  setAddNewNameToogle(true);
                }}
              >
                Add a name...
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
          )}
        </div>
      </div>
    </div>
  );
};
