import React, { useState, useEffect } from "react";
import axios from "axios";

import { ProfileSideBar } from "./Components/ProfileSideBar";
import { ContactLists } from "./Components/ContactLists";
import { Avatars } from "../../assets";
import "./index.css";

export const Contact = () => {
  const [contacts, setContacts] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState();
  const [selectedContact, setSelectedContact] = useState({});

  const [isCheckAll, setIsCheckAll] = useState(false);
  const [selectedContactIds, setSelectedContactIds] = useState([]);
  const [filterStatus, setFilterStatus] = useState(true);
  const [allSearchDatas, setAllSearchDatas] = useState([]);
  const [newContactStatus, setNewContactStatus] = useState(false);

  const getContactData = () => {
    axios
      .get(
        "https://addressbook.services.incphone.com/api/addressbooks/771967dd-b03e-4a0f-b527-17ab71c6735a/contacts"
      )
      .then((res) => {
        setContacts(res.data);
        console.log("@@@@", res.data);

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

  const handleNewNote = (address_book_id, contact_id, newNote) => {
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
    console.log(
      "$$$$$$$$$$",
      "https://addressbook.services.incphone.com/api/addressbooks/" +
        address_book_id +
        "/contacts/" +
        contact_id +
        "/" +
        propertyField +
        "/" +
        propertyId,
      propertyValue
    );
    axios
      .put(
        "https://addressbook.services.incphone.com/api/addressbooks/" +
          address_book_id +
          "/contacts/" +
          contact_id +
          "/" +
          propertyField +
          "/" +
          propertyId,
        propertyValue
      )
      .then((res) => {
        console.log("!!!!!!!!!!!", res.data);
        getContactData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="w-full min-h-full grid grid-cols-3">
      <ContactLists
        contacts={contacts}
        isCheckAll={isCheckAll}
        selectedContactIds={selectedContactIds}
        allSearchDatas={allSearchDatas}
        newContactStatus={newContactStatus}
        setFilterStatus={setFilterStatus}
        handleAllChecked={handleAllChecked}
        handleCheckedContact={handleCheckedContact}
        handleNewContact={handleNewContact}
      />
      {newContactStatus ? (
        <div className="flex flex-col items-center justify-center col-span-1 text-black dark:text-white">
          <img alt="Avatar" src={Avatars.PersonCircle} width="32" height="32" />
          <span className="text-darkGrayText">Create New Contact</span>
        </div>
      ) : contacts[selectedIndex] == null ? (
        <div className="flex flex-col items-center justify-center col-span-1 text-black dark:text-white">
          <img alt="Avatar" src={Avatars.PersonCircle} width="32" height="32" />
          <span className="text-darkGrayText">No contact selected</span>
        </div>
      ) : (
        <ProfileSideBar
          selectedContact={selectedContact}
          handleUpdateContacts={handleUpdateContacts}
          handleAddProperty={handleAddProperty}
          handleNewNote={handleNewNote}
          handleUpdateProperty={handleUpdateProperty}
        />
      )}

      {/* {contacts[selectedIndex] == null ? (
        <div className="flex flex-col items-center justify-center col-span-1 text-black dark:text-white">
          <img alt="Avatar" src={Avatars.PersonCircle} width="32" height="32" />
          <span className="text-darkGrayText">No contact selected</span>
        </div>
      ) : (
        <ProfileSideBar
          selectedContact={selectedContact}
          handleUpdateContacts={handleUpdateContacts}
          handleAddProperty={handleAddProperty}
          handleNewNote={handleNewNote}
          handleUpdateProperty={handleUpdateProperty}
        />
      )} */}
    </div>
  );
};
