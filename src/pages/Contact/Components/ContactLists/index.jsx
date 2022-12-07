import React, { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { Header } from "./Header";

import { Avatars } from "../../../../assets";

import "../../index.css";

export const ContactLists = (props) => {
  const {
    contacts,
    isCheckAll,
    selectedContactIds,
    allSearchDatas,
    newContactStatus,
    setFilterStatus,
    handleAllChecked,
    handleCheckedContact,
    handleNewContact,
  } = props;

  const [query, setQuery] = useState("");

  return (
    <div className="col-span-2 border-r border-gray-300 dark:border-gray-600 custom">
      <Header
        name="Contacts"
        selectedContactIds={selectedContactIds}
        handleNewContact={handleNewContact}
      />
      <div className="flex flex-col mx-2">
        <div className="my-2 flex items-center p-1 text-base cursor-pointer mt-1 false">
          <input
            type="checkbox"
            className="styled-checkbox cursor-pointer z-10 w-5 h-5 absolute opacity-0"
            checked={isCheckAll}
            onChange={(e) => {
              handleAllChecked(e);
            }}
          />
          <label></label>
          <span className="text-black dark:text-white mr-3">
            <AiOutlineSearch />
          </span>
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-white dark:bg-darkBack outline-none text-black dark:text-white"
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        {newContactStatus ? (
          <div
            className="flex items-center gap-x-6 p-1 text-base font-normal rounded-lg cursor-pointer dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700
          mt-1 false justify-between"
          >
            <div className="flex align-center">
              <div>
                <input
                  id="newContact"
                  type="checkbox"
                  className="styled-checkbox cursor-pointer z-10 w-5 h-5 absolute opacity-0"
                />
                <label></label>
              </div>

              <CgProfile className="w-[30px] h-[30px]" />
              <span className="text-black dark:text-white mx-[10px] leading-[2]">
                {"Draft: "}
              </span>

              <span className="text-gray-500 text-[14px]">{"Unnamed"}</span>
            </div>

            <button
              className="w-[22px] h-[22px] hover:bg-cgray dark:hover:bg-darkHoverGray"
              onClick={() => {
                handleNewContact(false);
              }}
            >
              {" "}
              <img
                className="text-black dark:text-white m-auto"
                alt="Avatar"
                src={Avatars.close}
                width="24"
                height="24"
              />
            </button>
          </div>
        ) : (
          ""
        )}

        {allSearchDatas
          .filter((contact) => {
            if (query === "") {
              //   setFilterStatus(true);
              return contact;
            } else {
              const first_name_Index = contact.first_name
                .toLowerCase()
                .includes(query.toLowerCase());
              const last_name_Index = contact.last_name
                .toLowerCase()
                .includes(query.toLowerCase());
              // const business_name_Index = contact.business_name
              //   .toLowerCase()
              //   .includes(query.toLowerCase());
              if (first_name_Index || last_name_Index) {
                // setFilterStatus(true);
                return contact;
              }
              //   setFilterStatus(false);
              return;
            }
          })
          .map((contact, index) => {
            return (
              <div
                id={contact.id}
                className="flex items-center gap-x-6 p-1 text-base font-normal rounded-lg cursor-pointer dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700
              mt-1 false"
                key={contact.id}
                onClick={(e) => {
                  handleCheckedContact(e, index);
                }}
              >
                <div className="flex align-center">
                  <div>
                    <input
                      id={contact.id}
                      type="checkbox"
                      className="styled-checkbox cursor-pointer z-10 w-5 h-5 absolute opacity-0"
                      checked={selectedContactIds.includes(contact.id)}
                      onChange={(e) => {
                        handleCheckedContact(e, index);
                      }}
                    />
                    <label></label>
                  </div>

                  <span className="text-black dark:text-white mr-1">
                    {contact.first_name + " " + contact.last_name}
                  </span>

                  {contact.business_name ? (
                    <div className="flex">
                      <img
                        className="text-black dark:text-white ml-[16px] mr-[5px]"
                        alt="Avatar"
                        src={Avatars.BagDash}
                        width="16"
                        height="14"
                      />

                      <span className="text-gray-500 text-[12px]">
                        {contact.business_name}
                      </span>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
