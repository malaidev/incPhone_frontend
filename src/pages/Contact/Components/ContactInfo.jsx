import React, { useState, useEffect } from "react";
import axios from "axios";
import { Avatars } from "../../../assets";
import PropertyField from "../../../components/PropertyField";

import "../index.css";

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

  useEffect(() => {
    const tempSortFieldsArray = [];
    const contact = props.selectedContact;

    fieldsOrder.map((item, key) => {
      const itemArray = [item, contact[item]];
      tempSortFieldsArray.push(itemArray);
      // const itemValue = contact[item]
      // if (Array.isArray(itemValue) == true && itemValue.length == 0) {
      //   const itemArray = [item, ["Set " + item + "..."]]
      //   tempSortFieldsArray.push(itemArray)
      // } else {
      //   const itemArray = [item, contact[item]]
      //   tempSortFieldsArray.push(itemArray)
      // }
    });

    setSortFieldsArray(tempSortFieldsArray);
  }, [props.selectedContact]);

  const handleNewProperty = (e) => {
    const selectedProperty = e.target.value;
    const propertyIndex = fieldsOrder.indexOf(selectedProperty);
    let temp = [...sortFieldsArray];
    temp[propertyIndex][1].push([""]);
    setSortFieldsArray(temp);

    console.log("SELECTedNewProperty", selectedProperty);

    props.handleAddProperty(
      props.selectedContact.address_book_id,
      props.selectedContact.id,
      selectedProperty
    );
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
          <select
            className="bg-transparent dark:text-primary text-[14px] shadow-sm outline-none appearance-none focus:border-indigo-600"
            onChange={(e) => handleNewProperty(e)}
          >
            <option value="">+ Add a property</option>
            <option value="phones">Phone Number</option>
            <option value="emails">Email</option>
            <option value="addresses">Address</option>
            <option value="urls">Url</option>
            <option value="dates">Date</option>
            <option value="notes">Text</option>
          </select>
        </div>
      </div>
    </div>
  );
};
