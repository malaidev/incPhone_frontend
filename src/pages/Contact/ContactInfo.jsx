import React from "react"
import { Avatars } from "../../assets"
import { BiPhoneCall, BiMessageAltDetail, BiMailSend } from "react-icons/bi"
import { FiMoreHorizontal } from "react-icons/fi"

export const ContactInfo = (props) => {
  console.log(props)
  return (
    <div className="flex flex-col pt-5 text-black dark:text-white">
      <span className="flex justify-center relative">
        <img alt="Avatar" src={Avatars.Default} width="80" height="80" />
        <span className="text-white absolute top-1/4 text-3xl font-bold">
          {props.initials}
        </span>
      </span>
      <div className="grid grid-cols-2 gap-2 mt-5 mx-4">
        <input
          type="text"
          value={props.firstname}
          onChange={(e) => {}}
          className="bg-white dark:bg-gray-800 outline-none text-end text-2xl font-bold"
        />
        <input
          type="text"
          value={props.lastname}
          onChange={(e) => {}}
          className="bg-white dark:bg-gray-800 outline-none text-start text-2xl font-bold"
        />
      </div>
      <div className="flex items-center justify-center mt-5 pb-5 border-b border-gray-300 dark:border-gray-600">
        <BiPhoneCall className="w-8 h-8 mx-3 cursor-pointer" />
        <BiMessageAltDetail className="w-8 h-8 mx-3 cursor-pointer" />
        <BiMailSend className="w-8 h-8 mx-3 cursor-pointer" />
        <FiMoreHorizontal className="w-8 h-8 mx-3 cursor-pointer" />
      </div>
      <div className="flex flex-col mt-5 mx-5">
        <div className="grid grid-cols-3">
          <label className="mr-2 text-gray-700 dark:text-gray-400">
            Business Name:
          </label>
          <input
            type="text"
            defaultValue={props.businessname}
            className="col-span-2 bg-white dark:bg-gray-800 outline-none font-bold"
            onChange={(e) => {}}
          />
        </div>
      </div>
    </div>
  )
}
