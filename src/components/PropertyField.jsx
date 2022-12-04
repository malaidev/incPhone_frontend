import React from "react"
import { Avatars } from "../assets"

const Property = (props) => {
  const uniqueKey = Math.floor(Math.random() * 100)

  const handleUpdate = (e) => {
    if (e.key === "Enter") {
      const contact_id = props.selectedContact.id
      const address_book_id = props.selectedContact.address_book_id
      const propertyField = e.target.name
      const propertyValue = e.target.value
      const data = {
        [propertyField]: propertyValue,
      }
      console.log("propertyField", contact_id, address_book_id, data)
      props.handleUpdateProperty(address_book_id, contact_id, data)
    }
  }

  return (
    <div className="flex px-[10px]" key={props.item[0] + uniqueKey}>
      <div className="flex items-center w-[60%]">
        <img
          className="text-black dark:text-white"
          alt="Avatar"
          width="14"
          height="14"
          src={Avatars[props.item[0]]}
        />
        <span className="basicFont dark:text-darkGrayText">
          &nbsp;&nbsp;&nbsp;{props.item[0]}
        </span>
      </div>
      <div className="flex items-center justify-between w-[100%] hover:bg-[#252434] contactPropertyDiv">
        <input
          name={props.item[0]}
          className="border-0 outline-none py-[4px] text-[0.8rem] bg-transparent ml-[5px]"
          defaultValue={
            Array.isArray(props.item[1]) === true
              ? props.subItem
              : props.item[1]
          }
          onKeyDown={handleUpdate}
        />
        <button className="">
          <img
            className="text-black dark:text-darkGrayText"
            alt="Avatar"
            src={Avatars.copy}
            width="12"
            height="12"
          />
        </button>
      </div>
    </div>
  )
}

const PropertyField = (props) => {
  if (Array.isArray(props.item[1]) === true) {
    return props.item[1].map((subItem, key) => {
      return (
        <Property
          item={props.item}
          subItem={subItem}
          selectedContact={props.selectedContact}
          handleUpdateProperty={props.handleUpdateProperty}
        />
      )
    })
  } else {
    return (
      <Property
        item={props.item}
        selectedContact={props.selectedContact}
        handleUpdateProperty={props.handleUpdateProperty}
      />
    )
  }
}

export default PropertyField
