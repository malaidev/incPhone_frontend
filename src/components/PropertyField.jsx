import React, { useState, useEffect } from "react";
import OutsideClickHandler from "react-outside-click-handler";

import { Avatars } from "../assets";
import ToastAlert from "./ToastAlert";
import PhoneNumber from "./PhoneNumber";
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

const Property = (props) => {
  const [toastStatus, setToast] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [editTitleId, setEditTitleId] = useState();

  const propertyName = props.item[0];
  const propertyValue = props.item[1];
  const propertyValueType = Array.isArray(propertyValue);
  const propertyDefaultValue = Array.isArray(propertyValue)
    ? props.subItem[propertiesOrderObject[propertyName]]
    : propertyValue;

  const titleId = propertyValueType
    ? props.subItem.id
    : props.selectedContact.id;

  const uniqueKey = Math.floor(Math.random() * 100);

  const handleEditTitle = (titleId) => {
    setEditTitleId(titleId);
    const propertyDefaultTitle = propertyValueType
      ? props.subItem.title
      : propertyName.charAt(0).toUpperCase() + propertyName.slice(1);
    setNewTitle(propertyDefaultTitle);
  };

  const handleSaveNewTitle = (titleId) => {
    const newTitle = document.getElementById(titleId).value;
    const updateValue = {
      title: newTitle,
    };
    props.handleUpdateProperty(
      props.selectedContact.address_book_id,
      props.selectedContact.id,
      props.subItem.id,
      propertyName,
      updateValue
    );
    setEditTitleId("");
  };

  const handleUpdate = (e, valueType, subItem, objectKey) => {
    if (e.key === "Enter") {
      const contact_id = props.selectedContact.id;
      const address_book_id = props.selectedContact.address_book_id;
      const propertyValue = e.target.value;
      const propertyField = e.target.name;
      if (valueType === true) {
        const propertyId = subItem.id;
        const updateValue = {
          [objectKey]: propertyValue,
        };
        props.handleUpdateProperty(
          address_book_id,
          contact_id,
          propertyId,
          propertyField,
          updateValue
        );
      } else {
        const updateValue = {
          [propertyField]: propertyValue,
        };
        props.handleUpdateProperty(
          address_book_id,
          contact_id,
          null,
          propertyField,
          updateValue
        );
      }
      console.log("*****", props.selectedContact);
    }
  };

  const toastAlert = () => {
    setToast(!toastStatus);

    setTimeout(() => {
      setToast(false);
    }, 1500);
  };

  return (
    <div className="flex relative px-[4px]" key={propertyName + uniqueKey}>
      {editTitleId === titleId ? (
        <OutsideClickHandler
          onOutsideClick={() => {
            setEditTitleId("");
          }}
        >
          <div className="absolute z-[2] w-[120px] h-[100px] bg-[#f3f3f5] dark:bg-[#21212F]  border-solid border-[1px] border-[#4b5563] dark:shadow-[0 2px 20px 0 rgb(0 0 0 / 35%), 0 0 0 1px rgb(80 80 98 / 55%)] rounded-lg">
            <input
              id={titleId}
              className="w-[-webkit-fill-available] my-[5px] px-[15px] py-[3px] border-0 outline-none text-[0.8rem] !bg-transparent "
              defaultValue={newTitle}
            />
            <div>
              <div
                className="w-[90%] bg-[#f3f3f5] dark:bg-[#21212f] hover:rounded-lg dark:hover:bg-[#2a2a3c] cursor-pointer h-[30px] px-[10px] m-auto text-[13px] leading-[2]"
                onClick={() => handleSaveNewTitle(titleId)}
              >
                Save
              </div>
              <div className="w-[90%] bg-[#f3f3f5] dark:bg-[#21212f] hover:rounded-lg dark:hover:bg-[#2a2a3c] cursor-pointer h-[30px] px-[10px] m-auto text-[13px] leading-[2]">
                Delete
              </div>
            </div>
          </div>
        </OutsideClickHandler>
      ) : (
        ""
      )}
      <div
        className={`${
          propertyValueType
            ? "hover:bg-[#e5e7eb] dark:hover:bg-[#252434] cursor-pointer transition-all duration-500"
            : ""
        } flex items-center w-[60%] pl-[0px]  min-h-[30px]  rounded-md text-[15px]`}
        onClick={() =>
          propertyValueType
            ? handleEditTitle(
                propertyValueType ? props.subItem.id : props.selectedContact.id
              )
            : ""
        }
      >
        <img
          className="text-black dark:text-white"
          alt="Avatar"
          width="14"
          height="14"
          src={Avatars[propertyName]}
        />
        <span className="basicFont dark:text-darkGrayText">
          &nbsp;&nbsp;&nbsp;
          {propertyValueType
            ? props.subItem.title
            : propertyName.charAt(0).toUpperCase() + propertyName.slice(1)}
        </span>
      </div>
      <div className="flex relative items-center justify-between w-[100%] hover:bg-[#e5e7eb] dark:hover:bg-[#252434] contactPropertyDiv">
        {(() => {
          switch (propertyName) {
            case "phones":
              return (
                <PhoneNumber
                  subItem={props.subItem}
                  selectedContact={props.selectedContact}
                  handleUpdateProperty={props.handleUpdateProperty}
                />
              );
            default:
              return (
                <input
                  name={propertyName}
                  className="w-[inherit] border-0 outline-none py-[4px] text-[0.8rem] !bg-transparent ml-[5px] "
                  autoComplete="off"
                  defaultValue={
                    Array.isArray(propertyValue)
                      ? props.subItem[propertiesOrderObject[propertyName]]
                      : propertyValue
                  }
                  onKeyDown={(e) =>
                    handleUpdate(
                      e,
                      Array.isArray(propertyValue),
                      props.subItem,
                      propertiesOrderObject[propertyName]
                    )
                  }
                />
              );
          }
        })()}

        <button
          className={`${
            propertyDefaultValue ? "flex" : "hidden"
          } absolute right-[0px]`}
          value={propertyDefaultValue}
          onClick={(e) => {
            toastAlert();
            navigator.clipboard.writeText(propertyDefaultValue);
            // window.clipboardData.setData(
            //   "Text",
            //   "Copy this text to clipboard"
            // );
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
      </div>
      {toastStatus ? (
        <ToastAlert
          text="Copied to clipboard"
          toastStatus={toastStatus}
          setToast={setToast}
        />
      ) : (
        ""
      )}
    </div>
  );
};

const PropertyField = (props) => {
  const ItemValue = props.item[1];

  if (Array.isArray(ItemValue)) {
    return ItemValue.map((subItem, key) => {
      return (
        <div key={key}>
          <Property
            item={props.item}
            subItem={subItem}
            selectedContact={props.selectedContact}
            handleUpdateProperty={props.handleUpdateProperty}
          />
        </div>
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
