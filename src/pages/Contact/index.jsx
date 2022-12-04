import React, { useState, useEffect } from "react"
import axios from "axios"
import Navbar from "../../components/Navbar"
import { AiOutlineSearch } from "react-icons/ai"
import { ProfileSideBar } from "./Components"
import { Avatars } from "../../assets"
import "./index.css"

export const Contact = () => {
  const [contacts, setContacts] = useState([])
  const [selectedIndex, setSelectedIndex] = useState()
  const [selectedContact, setSelectedContact] = useState({})
  const [temp, setTemp] = useState(false)

  const [isCheckAll, setIsCheckAll] = useState(false)
  const [selectedContactIds, setSelectedContactIds] = useState([])

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

  const handleUpdateContacts = (target, value, selectedId) => {
    contacts[selectedIndex][target] = value
    setContacts(contacts)
    setTemp(!temp)
  }

  const handleAllChecked = (e) => {
    setIsCheckAll(!isCheckAll) //true
    setSelectedContactIds(contacts.map((contact) => contact.id))

    if (isCheckAll) {
      setSelectedContactIds([])
    }
  }

  const handleCheckedContact = (e, index) => {
    if (index === selectedIndex) {
      setSelectedIndex(null)
    }
    setSelectedIndex(index)

    setSelectedContactIds([...selectedContactIds, e.target.id])
    if (!e.target.checked) {
      setSelectedContactIds(
        selectedContactIds.filter((item) => item !== e.target.id)
      )
    }
  }

  useEffect(() => {
    if (contacts.length > 0 && selectedContactIds.length == contacts.length) {
      setIsCheckAll(true)
    } else if (selectedContactIds.length == 0) {
      setIsCheckAll(false)
    }
  }, [selectedContactIds])

  useEffect(() => {
    if (selectedIndex !== null) {
      setSelectedContact(contacts[selectedIndex])
    }
  }, [selectedIndex, contacts])

  const handleUpdateProperty = (
    address_book_id,
    contact_id,
    propertyName,
    data
  ) => {
    axios
      .put(
        "https://addressbook.services.incphone.com/api/addressbooks/" +
          address_book_id +
          "/contacts/" +
          contact_id +
          "/" +
          propertyName,
        data
      )
      .then((res) => {
        console.log("!!!!!!!!!!!", res.data)
        // setContacts(res.data);
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <div className="w-full min-h-full grid grid-cols-3">
      <div className="col-span-2 border-r border-gray-300 dark:border-gray-600 custom">
        <Navbar name="Contacts" />
        <div className="flex flex-col mx-2">
          <div className="my-2 flex items-center p-1 text-base cursor-pointer mt-1 false">
            <input
              type="checkbox"
              className="styled-checkbox cursor-pointer z-10 w-5 h-5 absolute opacity-0"
              checked={isCheckAll}
              onChange={(e) => {
                handleAllChecked(e)
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
            />
          </div>
          {contacts.map((contact, index) => {
            return (
              <div
                id={contact.id}
                className="flex items-center gap-x-6 p-1 text-base font-normal rounded-lg cursor-pointer dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700
              mt-1 false"
                key={contact.id}
                onClick={(e) => {
                  handleCheckedContact(e, index)
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
                        handleCheckedContact(e, index)
                      }}
                    />
                    <label></label>
                  </div>

                  <span className="text-black dark:text-white mr-1">
                    {contact.first_name + " " + contact.last_name}
                  </span>

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
              </div>
            )
          })}
        </div>
      </div>
      {contacts[selectedIndex] == null ? (
        <div className="flex flex-col items-center justify-center col-span-1 text-black dark:text-white">
          <img
            className="text-black dark:text-white"
            alt="Avatar"
            src={Avatars.PersonCircle}
            width="32"
            height="32"
          />
          <span>No contact selected</span>
        </div>
      ) : (
        <ProfileSideBar
          selectedContact={selectedContact}
          handleUpdateContacts={handleUpdateContacts}
          handleUpdateProperty={handleUpdateProperty}
        />
      )}
    </div>
  )
}
