import React from "react"
import { Avatars } from "../../assets"
import { BiPhoneCall, BiMessageAltDetail, BiMailSend } from "react-icons/bi"
import { FiMoreHorizontal } from "react-icons/fi"

export const ContactInfo = (props) => {
  console.log(props)
  return (
    <div className="flex flex-col pt-5 text-black dark:text-white">
      {props.selectedContact !== undefined && (
        <div>
          <span className="flex justify-center relative">
            <img alt="Avatar" src={Avatars.Default} width="80" height="80" />
            <span className="text-white absolute top-1/4 text-3xl font-bold">
              {props.selectedContact.initials}
            </span>
          </span>
          <div className="grid grid-cols-2 gap-2 mt-5 mx-4">
            <input
              type="text"
              value={
                props.selectedContact.first_name
                  ? props.selectedContact.first_name
                  : ""
              }
              onChange={(e) => {}}
              className="bg-white dark:bg-gray-800 outline-none text-end text-2xl font-bold"
            />
            <input
              type="text"
              value={
                props.selectedContact.last_name
                  ? props.selectedContact.last_name
                  : ""
              }
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
                value={
                  props.selectedContact.business_name
                    ? props.selectedContact.business_name
                    : ""
                }
                className="col-span-2 bg-white dark:bg-gray-800 outline-none font-bold"
                onChange={(e) => {}}
              />
            </div>
            <div className="grid grid-cols-3">
              <label className="mr-2 text-gray-700 dark:text-gray-400">
                Role:
              </label>
              <input
                type="text"
                value={
                  props.selectedContact.role === null
                    ? ""
                    : props.selectedContact.role
                }
                className="col-span-2 bg-white dark:bg-gray-800 outline-none font-bold"
                onChange={(e) => {}}
              />
            </div>
            <div className="grid grid-cols-3">
              <label className="mr-2 text-gray-700 dark:text-gray-400">
                Title:
              </label>
              <input
                type="text"
                value={
                  props.selectedContact.title === null
                    ? ""
                    : props.selectedContact.title
                }
                className="col-span-2 bg-white dark:bg-gray-800 outline-none font-bold"
                onChange={(e) => {}}
              />
            </div>
            <div>
              {props.selectedContact.addresses.length > 0 &&
                props.selectedContact.addresses.map((address, index) => {
                  return (
                    <div className="grid grid-cols-3" key={index}>
                      <label className="mr-2 text-gray-700 dark:text-gray-400">
                        Address:
                      </label>
                      <input
                        type="text"
                        value={address.city}
                        className="col-span-2 bg-white dark:bg-gray-800 outline-none font-bold"
                        onChange={(e) => {}}
                      />
                    </div>
                  )
                })}
            </div>
            <div>
              {props.selectedContact.dates.length > 0 &&
                props.selectedContact.dates.map((date, index) => {
                  return (
                    <div className="grid grid-cols-3" key={index}>
                      <label className="mr-2 text-gray-700 dark:text-gray-400">
                        {date.title}
                      </label>
                      <input
                        type="text"
                        value={date.date}
                        className="col-span-2 bg-white dark:bg-gray-800 outline-none font-bold"
                        onChange={(e) => {}}
                      />
                    </div>
                  )
                })}
            </div>
            <div>
              {props.selectedContact.emails.length > 0 &&
                props.selectedContact.emails.map((email, index) => {
                  return (
                    <div className="grid grid-cols-3" key={index}>
                      <label className="mr-2 text-gray-700 dark:text-gray-400">
                        {email.title}
                      </label>
                      <input
                        type="text"
                        value={email.email}
                        className="col-span-2 bg-white dark:bg-gray-800 outline-none font-bold"
                        onChange={(e) => {}}
                      />
                    </div>
                  )
                })}
            </div>
            <div>
              {props.selectedContact.urls.length > 0 &&
                props.selectedContact.urls.map((url, index) => {
                  return (
                    <div className="grid grid-cols-3" key={index}>
                      <label className="mr-2 text-gray-700 dark:text-gray-400">
                        {url.title}
                      </label>
                      <input
                        type="text"
                        value={url.url}
                        className="col-span-2 bg-white dark:bg-gray-800 outline-none font-bold"
                        onChange={(e) => {}}
                      />
                    </div>
                  )
                })}
            </div>
            <div>
              {props.selectedContact.phones.length > 0 &&
                props.selectedContact.phones.map((phone, index) => {
                  return (
                    <div className="grid grid-cols-3" key={index}>
                      <label className="mr-2 text-gray-700 dark:text-gray-400">
                        {phone.title}
                      </label>
                      <input
                        type="text"
                        value={phone.phone_number}
                        className="col-span-2 bg-white dark:bg-gray-800 outline-none font-bold"
                        onChange={(e) => {}}
                      />
                    </div>
                  )
                })}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
