import React from "react";
import ThemeToggle from "../../../../components/ThemeToggle";

export const Header = (props) => {
  const { name, handleNewContact } = props;
  return (
    <nav className="bg-white px-2 py-3 dark:bg-darkBack border-b border-gray-300 dark:border-gray-600">
      <div className="container flex justify-between items-center mx-auto">
        <div className="flex items-center mx-auto">
          <span className="text-xl font-medium whitespace-nowrap dark:text-white">
            {name}
          </span>
        </div>

        <div className="flex justify-end items-center pr-4">
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
