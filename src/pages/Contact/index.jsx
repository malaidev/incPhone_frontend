import React, { useState, useEffect } from "react"
import axios from "axios"
import Navbar from "../../components/Navbar"
import { AiOutlineSearch } from "react-icons/ai"
import { ContactInfo } from "./ContactInfo"
import "./index.css"

export const Contact = () => {
  const [contacts, setContacts] = useState([])
  const [selectedIndex, setSelectedIndex] = useState()
  const [selectedContact, setSelectedContact] = useState({})

  useEffect(() => {
    axios
      .get(
        "https://addressbook.services.incphone.com/api/addressbooks/771967dd-b03e-4a0f-b527-17ab71c6735a/contacts"
      )
      .then((res) => {
        setContacts(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  useEffect(() => {
    if (selectedIndex !== null) {
      setSelectedContact(contacts[selectedIndex])
    }
  }, [selectedIndex, contacts])

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
          {contacts.map((contact, index) => {
            return (
              <div className="my-2 flex items-center" key={index}>
                <input
                  type="checkbox"
                  className="styled-checkbox cursor-pointer z-10 w-5 h-5 absolute opacity-0"
                  onChange={() => {
                    if (index === selectedIndex) {
                      setSelectedIndex(null)
                    }
                    setSelectedIndex(index)
                  }}
                  checked={index === selectedIndex ? true : false}
                />
                <label></label>
                <span className="text-black dark:text-white mr-1">
                  {contact.first_name}
                </span>
                <span className="text-black dark:text-white mr-3">
                  {contact.last_name}
                </span>
                <span className="text-gray-500 mr-2">
                  {contact.business_name}
                </span>
                <span className="text-gray-500">{contact.companyName}</span>
              </div>
            )
          })}
        </div>
      </div>
      {contacts[selectedIndex] !== undefined && (
        <ContactInfo
          selectedContact={selectedContact}
          setSelectedContact={setSelectedContact}
        />
      )}
    </div>
  )
}
