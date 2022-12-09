import React, { useState, useEffect, useContext } from "react";
import ThemeToggle from "../../../../components/ThemeToggle";
import { ContactContext } from "../..";

export const Header = (props) => {
  const { selectedContactIds, handleNewContact } = useContext(ContactContext);

  const { name } = props;
  const handleDeleteContacts = () => {
    console.log("####", selectedContactIds);
  };
  return (
    <nav className="bg-white px-2 py-3 dark:bg-darkBack border-b border-gray-300 dark:border-gray-600">
      <div className="container flex justify-between items-center mx-auto">
        <div className="flex items-center mx-auto">
          <span className="text-xl font-medium whitespace-nowrap dark:text-white">
            {name}
          </span>
        </div>
        {selectedContactIds.length > 0 ? (
          <button
            aria-labelledby="react-aria6910911295-480"
            className="w-[30px] h-[30px] text-[20px] border-none bg-cgray dark:bg-darkGray rounded-lg"
            onClick={() => handleDeleteContacts()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              className="m-auto"
            >
              <path
                fill="#A36EFF"
                d="M11.762 1.875c.895 0 1.703.52 2.077 1.323l.069.164.691 1.846h2.068a.625.625 0 0 1 .092 1.244l-.092.006h-.253l-.68 9.538a2.292 2.292 0 0 1-2.13 2.124l-.156.005h-6.9a2.293 2.293 0 0 1-2.269-1.969l-.016-.154-.706-9.544h-.224a.625.625 0 0 1-.092-1.243l.092-.007H5.4l.693-1.846a2.292 2.292 0 0 1 1.968-1.48l.178-.007h3.524Zm3.398 4.583H4.81l.7 9.451c.034.467.372.843.811.941l.112.019.115.006h6.9c.508 0 .935-.364 1.025-.853l.014-.115.673-9.449ZM10 8.542c.314 0 .574.23.618.532l.007.093v5a.625.625 0 0 1-1.243.092l-.007-.092v-5c0-.346.28-.625.625-.625Zm2.903.001a.625.625 0 0 1 .579.576v.092l-.359 5a.625.625 0 0 1-1.246.004v-.093l.358-5a.625.625 0 0 1 .668-.579Zm-5.806 0a.625.625 0 0 1 .655.487l.013.092.358 5a.625.625 0 0 1-1.233.181l-.013-.092-.359-5a.625.625 0 0 1 .579-.668Zm4.665-5.418H8.238c-.39 0-.744.218-.923.558l-.052.118-.529 1.407h6.53l-.527-1.407a1.042 1.042 0 0 0-.847-.668l-.128-.008Z"
              ></path>
            </svg>
          </button>
        ) : (
          ""
        )}

        <div className="flex justify-end items-center px-[10px]">
          <button
            className="w-[30px] h-[30px] bg-cgray dark:bg-darkGray rounded-lg"
            onClick={() => {
              handleNewContact(true);
            }}
          >
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

          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};
