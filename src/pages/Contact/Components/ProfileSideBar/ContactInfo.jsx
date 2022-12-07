import React, { useState, useEffect, useRef } from "react";
import OutsideClickHandler from "react-outside-click-handler";

import { Avatars } from "../../../../assets";
import PropertyField from "../../../../components/PropertyField";
import "../../index.css";

export const ContactInfo = (props) => {
  const fieldsOrder = [
    "business_name",
    "role",
    "phones",
    "emails",
    "addresses",
    "urls",
    "dates",
  ];

  const [sortFieldsArray, setSortFieldsArray] = useState([]);
  const [toogleProperty, setToogleProperty] = useState(false);

  useEffect(() => {
    const tempSortFieldsArray = [];
    const contact = props.selectedContact;

    fieldsOrder.map((item, key) => {
      const itemArray = [item, contact[item]];
      tempSortFieldsArray.push(itemArray);
    });

    setSortFieldsArray(tempSortFieldsArray);
  }, [props.selectedContact]);

  const handleNewProperty = (selectedProperty) => {
    // const selectedProperty = e.target.value;
    const propertyIndex = fieldsOrder.indexOf(selectedProperty);
    let temp = [...sortFieldsArray];
    temp[propertyIndex][1].push([""]);
    setSortFieldsArray(temp);

    console.log("SELECTedNewProperty", selectedProperty, sortFieldsArray);
    props.handleAddProperty(
      props.selectedContact.address_book_id,
      props.selectedContact.id,
      selectedProperty
    );
    setProperty();
  };

  const setProperty = (toogle) => {
    setToogleProperty(toogle);
  };

  return (
    <div>
      <div className="flex flex-col pt-6 pl-5 pr-1">
        {sortFieldsArray.map((item, key) => {
          return (
            <PropertyField
              item={item}
              key={key}
              selectedContact={props.selectedContact}
              handleUpdateProperty={props.handleUpdateProperty}
            />
          );
        })}

        <div className="relative hover:bg-[#e5e7eb] dark:hover:bg-[#231d36] py-[4px] px-[11px] mt-[10px] transition-all duration-500 rounded-md w-[max-content]">
          <button
            className="bg-transparent text-primary text-[14px] shadow-sm outline-none appearance-none focus:border-indigo-600"
            type="button"
            data-dropdown-toggle="dropdown"
            onClick={() => setProperty(!toogleProperty)}
          >
            + Add a property
          </button>
        </div>

        <div
          className={`${
            !toogleProperty && "hidden"
          } bg-white text-base z-50 list-none divide-y divide-gray-100 rounded shadow w-[max-content] dark:bg-[#21212f] py-[5px] rounded-md`}
        >
          <OutsideClickHandler
            onOutsideClick={() => {
              setToogleProperty(false);
            }}
          >
            <ul className="" aria-labelledby="dropdown">
              <li
                className="flex text-[12px] text-sm hover:bg-[#dfdfdf] dark:bg-[#21212f] dark:hover:bg-[#2a2a3c] block px-2 py-1 truncate text-darkGrayText mx-[5px] cursor:pointer rounded-lg border-none "
                value="phones"
                onClick={() => handleNewProperty("phones")}
              >
                <img
                  className="mr-[10px]"
                  alt="Avatar"
                  src={Avatars.phones}
                  width="12"
                  height="12"
                />
                Phone Number
              </li>
              <li
                className="flex text-[12px] text-sm hover:bg-[#dfdfdf] dark:bg-[#21212f] dark:hover:bg-[#2a2a3c] block px-2 py-1 truncate text-darkGrayText mx-[5px] cursor:pointer rounded-lg border-none "
                value="phones"
                onClick={() => handleNewProperty("emails")}
              >
                <img
                  className="mr-[10px]"
                  alt="Avatar"
                  src={Avatars.emails}
                  width="12"
                  height="12"
                />
                Email
              </li>
              <li
                className="flex text-[12px] text-sm hover:bg-[#dfdfdf] dark:bg-[#21212f] dark:hover:bg-[#2a2a3c] block px-2 py-1 truncate text-darkGrayText mx-[5px] cursor:pointer rounded-lg border-none "
                value="addresses"
                onClick={() => handleNewProperty("addresses")}
              >
                <img
                  className="mr-[10px]"
                  alt="Avatar"
                  src={Avatars.addresses}
                  width="12"
                  height="12"
                />
                Address
              </li>
              <li
                className="flex text-[12px] text-sm hover:bg-[#dfdfdf] dark:bg-[#21212f] dark:hover:bg-[#2a2a3c] block px-2 py-1 truncate text-darkGrayText mx-[5px] cursor:pointer rounded-lg border-none "
                value="urls"
                onClick={() => handleNewProperty("urls")}
              >
                <img
                  className="mr-[10px]"
                  alt="Avatar"
                  src={Avatars.urls}
                  width="12"
                  height="12"
                />
                Url
              </li>
              <li
                className="flex text-[12px] text-sm hover:bg-[#dfdfdf] dark:bg-[#21212f] dark:hover:bg-[#2a2a3c] block px-2 py-1 truncate text-darkGrayText mx-[5px] cursor:pointer rounded-lg border-none "
                value="dates"
                onClick={() => handleNewProperty("dates")}
              >
                <img
                  className="mr-[10px]"
                  alt="Avatar"
                  src={Avatars.dates}
                  width="12"
                  height="12"
                />
                Date
              </li>
            </ul>
          </OutsideClickHandler>
        </div>
      </div>
    </div>
  );
};
