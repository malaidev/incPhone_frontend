import React, { useState, useEffect, useContext } from "react";
import { useForm, Controller } from "react-hook-form";
import { isValidPhoneNumber } from "react-phone-number-input";
import Input from "react-phone-number-input/input";
import "react-phone-number-input/style.css";
import OutsideClickHandler from "react-outside-click-handler";

import { ContactContext } from "../pages/Contact";

const PhoneNumber = (props) => {
  const { selectedContact, handleUpdateProperty, handleDeleteProperty } =
    useContext(ContactContext);

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const onSubmit = (data) => {
    console.log({ data });
    const updateValue = {
      phone_number: data["phone-input"],
    };
    handleUpdateProperty(
      selectedContact.address_book_id,
      selectedContact.id,
      props.subItem.id,
      "phones",
      updateValue
    );
    props.setClickedPropertyId("");
  };

  const handleValidate = (value) => {
    const isValid = isValidPhoneNumber(value);
    console.log({ isValid });
    return isValid;
  };

  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        props.setClickedPropertyId("");
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="user-info-form ">
        <div>
          <Controller
            name="phone-input"
            control={control}
            rules={{
              validate: (value) => handleValidate(value),
            }}
            render={({ field: { onChange, value } }) => (
              <Input
                id="phone-input"
                className="w-[inherit] border-0 outline-none py-[4px] text-[0.8rem] !bg-transparent ml-[5px] "
                international
                initialvalueformat="national"
                value={props.subItem.phone_number}
                onChange={onChange}
                defaultCountry="US"
                autoComplete="off"
                autoFocus
              />
            )}
          />
          {errors["phone-input"] && (
            <p className="error-message text-[#ff0000] text-[10px] text-center">
              Invalid Phone
            </p>
          )}
        </div>
      </form>
    </OutsideClickHandler>
  );
};

export default PhoneNumber;
