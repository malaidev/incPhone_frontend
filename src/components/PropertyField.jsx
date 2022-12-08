import React, { useState, useEffect } from "react";
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

  const propertyName = props.item[0];
  const propertyValue = props.item[1];
  const propertyValueType = Array.isArray(propertyValue);
  const propertyDefaultValue = Array.isArray(propertyValue)
    ? props.subItem[propertiesOrderObject[propertyName]]
    : propertyValue;

  const uniqueKey = Math.floor(Math.random() * 100);

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
    <div className="flex px-[4px]" key={propertyName + uniqueKey}>
      <div className="flex items-center w-[60%]">
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

      <div className="flex items-center justify-between w-[100%] hover:bg-[#e5e7eb] dark:hover:bg-[#252434] contactPropertyDiv">
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
          className={`${propertyDefaultValue ? "flex" : "hidden"} absolute right-[15px]`}
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
