import React, { useState, useEffect, createContext, useContext } from "react";
import axios from "axios";

import { ProfileSideBar } from "./Components/ProfileSideBar";
import { ContactLists } from "./Components/ContactLists";
import { NewContactSideBar } from "./Components/NewContactSideBar";
import { Avatars } from "../../assets";
import "./index.css";

export const ContactContext = createContext();

export const Contact = () => {
  const [contacts, setContacts] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState();
  const [selectedContact, setSelectedContact] = useState({});

  const [isCheckAll, setIsCheckAll] = useState(false);
  const [selectedContactIds, setSelectedContactIds] = useState([]);
  const [allSearchDatas, setAllSearchDatas] = useState([]);
  const [newContactStatus, setNewContactStatus] = useState(false);

  const getContactData = (isNewContactCreated) => {
    axios
      .get(
        "https://addressbook.services.incphone.com/api/addressbooks/771967dd-b03e-4a0f-b527-17ab71c6735a/contacts"
      )
      .then((res) => {
        setContacts(res.data);

        let tempDatas = [];
        res.data.map((item) => {
          const element = {
            address_book_id: item.address_book_id,
            id: item.id,
            first_name: item.first_name,
            last_name: item.last_name,
            business_name: item.business_name,
          };
          tempDatas.push(element);
        });
        setAllSearchDatas(tempDatas);

        //Created new Contact right away
        if (isNewContactCreated) {
          const createdContactIndex = res.data.length * 1 - 1;
          setSelectedContact(contacts[createdContactIndex]);
          setSelectedIndex(createdContactIndex);
          setNewContactStatus(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getContactData();
  }, []);

  const handleUpdateContacts = (target, value, selectedId) => {
    let tempContacts = [...contacts];
    tempContacts[selectedIndex][target] = value;
    setContacts(tempContacts);
  };

  const handleAllChecked = (e) => {
    setIsCheckAll(!isCheckAll); //true
    setSelectedContactIds(contacts.map((contact) => contact.id));

    if (isCheckAll) {
      setSelectedContactIds([]);
    }
  };

  const handleCheckedContact = (e, index) => {
    if (index === selectedIndex) {
      setSelectedIndex(null);
    }
    setSelectedIndex(index);

    setSelectedContactIds([...selectedContactIds, e.target.id]);
    if (!e.target.checked) {
      setSelectedContactIds(
        selectedContactIds.filter((item) => item !== e.target.id)
      );
    }

    handleNewContact(false);
  };

  const handleNewContact = (value) => {
    setNewContactStatus(value);
  };

  useEffect(() => {
    if (contacts.length > 0 && selectedContactIds.length == contacts.length) {
      setIsCheckAll(true);
    } else if (selectedContactIds.length == 0) {
      setIsCheckAll(false);
    }
  }, [selectedContactIds]);

  useEffect(() => {
    if (selectedIndex !== null) {
      setSelectedContact(contacts[selectedIndex]);
    }
  }, [selectedIndex, contacts]);

  const handleSaveNewContact = (address_book_id, newContactValue) => {
    axios
      .post(
        "https://addressbook.services.incphone.com/api/addressbooks/" +
          address_book_id +
          "/contacts",
        newContactValue
      )
      .then((res) => {
        getContactData(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleAddProperty = (address_book_id, contact_id, propertyName) => {
    axios
      .post(
        "https://addressbook.services.incphone.com/api/addressbooks/" +
          address_book_id +
          "/contacts/" +
          contact_id +
          "/" +
          propertyName
      )
      .then((res) => {
        getContactData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleNewNote = (
    address_book_id,
    contact_id,
    propertyName,
    newNote
  ) => {
    axios
      .post(
        "https://addressbook.services.incphone.com/api/addressbooks/" +
          address_book_id +
          "/contacts/" +
          contact_id +
          "/notes",
        newNote
      )
      .then((res) => {
        getContactData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleUpdateProperty = (
    address_book_id,
    contact_id,
    propertyId,
    propertyField,
    propertyValue
  ) => {
    let apiUrl =
      "https://addressbook.services.incphone.com/api/addressbooks/" +
      address_book_id +
      "/contacts/" +
      contact_id;
    if (propertyId) {
      apiUrl = apiUrl + "/" + propertyField + "/" + propertyId;
    }
    console.log("APIURL", apiUrl, propertyValue);
    axios
      .put(apiUrl, propertyValue)
      .then((res) => {
        getContactData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDeleteProperty = (
    address_book_id,
    contact_id,
    propertyField,
    propertyId
  ) => {
    axios
      .delete(
        "https://addressbook.services.incphone.com/api/addressbooks/" +
          address_book_id +
          "/contacts/" +
          contact_id +
          "/" +
          propertyField +
          "/" +
          propertyId
      )
      .then((res) => {
        getContactData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <ContactContext.Provider
      value={{
        contacts,
        isCheckAll,
        selectedIndex,
        selectedContact,
        selectedContactIds,
        allSearchDatas,
        newContactStatus,
        handleAllChecked,
        handleCheckedContact,
        handleNewContact,
        handleSaveNewContact,
        handleUpdateContacts,
        handleAddProperty,
        handleUpdateProperty,
        handleDeleteProperty,
        handleNewNote,
      }}
    >
      <div className="w-full min-h-full grid grid-cols-3">
        <ContactLists />

        {newContactStatus ? (
          <NewContactSideBar />
        ) : contacts[selectedIndex] == null ? (
          <div className="flex flex-col items-center justify-center col-span-1 text-black dark:text-white">
            <img
              alt="Avatar"
              src={Avatars.PersonCircle}
              width="32"
              height="32"
            />
            <span className="text-darkGrayText">No contact selected</span>
          </div>
        ) : (
          <ProfileSideBar />
        )}
      </div>
    </ContactContext.Provider>
  );
};
