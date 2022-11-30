import React from "react"
import Navbar from "../../components/Navbar"
import { AiOutlineSearch } from "react-icons/ai"
import { Images } from "../../assets"
import "./index.css"

export const Contact = () => {
  return (
    <div className="grid grid-cols-3 min-h-full">
      <div className="col-span-2 border-r border-gray-300 dark:border-gray-600">
        <Navbar name="Contacts" />
        <div className="flex flex-col mx-2">
          <div className="my-2 flex items-center">
            <input
              type="checkbox"
              className="styled-checkbox cursor-pointer z-10 w-5 h-5 absolute opacity-0"
            />
            <label></label>
            <span className="text-black dark:text-white mr-3">
              <AiOutlineSearch />
            </span>
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-white dark:bg-gray-800 outline-none text-black dark:text-white"
            />
          </div>
          <div className="my-2 flex items-center">
            <input
              type="checkbox"
              className="styled-checkbox cursor-pointer z-10 w-5 h-5 absolute opacity-0"
            />
            <label></label>
            <span className="text-black dark:text-white mr-3">
              <img alt="Logo" src={Images.Logo} width="24" height="24" />
            </span>
            <span className="text-black dark:text-white">IncPhone Team</span>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  )
}
