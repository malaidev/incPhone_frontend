import React from "react";
import { Avatars } from "../assets";

const propertiesOrderObject = {
  business_name: null,
  role: null,
  phones: "phone_number",
  emails: "email",
  addresses: "",
  urls: "url",
  dates: "date",
  checkbox: null,
};

const clipboardBtnComponent = (propertyValue) => {
  if (propertyValue) {
    return (
      <button
        className=""
        value={propertyValue}
        onClick={() => {
          navigator.clipboard.writeText(propertyValue);
          window.clipboardData.setData("Text", "Copy this text to clipboard");
        }}
      >
        <img
          className="text-black dark:text-darkGrayText"
          alt="Avatar"
          src={Avatars.copy}
          width="12"
          height="12"
        />
      </button>
    );
  } else {
    return;
  }
};

const Property = (props) => {
  const property = props.item[0];
  const propertyValue = props.item[1];
  const uniqueKey = Math.floor(Math.random() * 100);

  const handleUpdate = (e, subItem) => {
    if (e.key === "Enter") {
      console.log("###", subItem);
      const contact_id = props.selectedContact.id;
      const address_book_id = props.selectedContact.address_book_id;
      const propertyId = subItem.id;
      const propertyField = e.target.name;
      const propertyValue = e.target.value;

      props.handleUpdateProperty(
        address_book_id,
        contact_id,
        propertyId,
        propertyField,
        propertyValue
      );
    }
  };

  return (
    <div className="flex px-[4px]" key={props.item[0] + uniqueKey}>
      <div className="flex items-center w-[60%]">
        <img
          className="text-black dark:text-white"
          alt="Avatar"
          width="14"
          height="14"
          src={Avatars[props.item[0]]}
        />
        <span className="basicFont dark:text-darkGrayText">
          &nbsp;&nbsp;&nbsp;
          {props.item[0].charAt(0).toUpperCase() + props.item[0].slice(1)}
        </span>
      </div>
      {props.item[0] === "business_name" || props.item[0] === "role" ? (
        <div className="flex items-center justify-between w-[100%] contactPropertyDiv">
          {props.item[1]}
        </div>
      ) : (
        <div className="flex items-center justify-between w-[100%] hover:bg-[#252434] contactPropertyDiv">
          <input
            name={props.item[0]}
            className="border-0 outline-none py-[4px] text-[0.8rem] bg-transparent ml-[5px]"
            defaultValue={
              Array.isArray(props.item[1])
                ? props.subItem[propertiesOrderObject[props.item[0]]]
                : props.item[1]
            }
            onKeyDown={(e) => handleUpdate(e, props.subItem)}
          />

          {clipboardBtnComponent(
            Array.isArray(props.item[1])
              ? props.subItem[propertiesOrderObject[props.item[0]]]
              : props.item[1]
          )}

          {/* <button
            className=""
            value={
              Array.isArray(props.item[1])
                ? props.subItem[propertiesOrderObject[props.item[0]]]
                : props.item[1]
            }
            onClick={(e) => {
              navigator.clipboard.writeText(e.target.value);
              window.clipboardData.setData(
                "Text",
                "Copy this text to clipboard"
              );
            }}
          >
            <img
              className="text-black dark:text-darkGrayText"
              alt="Avatar"
              src={Avatars.copy}
              width="12"
              height="12"
            />
          </button> */}
        </div>
      )}
    </div>
  );
};

const PropertyField = (props) => {
  const ItemValue = props.item[1];

  if (Array.isArray(ItemValue)) {
    return ItemValue.map((subItem, key) => {
      return (
        <Property
          item={props.item}
          subItem={subItem}
          selectedContact={props.selectedContact}
          handleUpdateProperty={props.handleUpdateProperty}
        />
      );
    });
  } else {
    return (
      <Property
        item={props.item}
        selectedContact={props.selectedContact}
        handleUpdateProperty={props.handleUpdateProperty}
      />
    );
  }
};

export default PropertyField;
