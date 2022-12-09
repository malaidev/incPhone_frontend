import React, { useState, useEffect, useContext } from "react";
import { Header } from "./Header";
import { ContactLists } from "./ContactLists";

export const PrimaryContact = (props) => {
  return (
    <div className="w-[30%] min-h-full divide-y-2 divide-bc1 dark:divide-dbc1">
      <Header />
      <ContactLists />
    </div>
  );
};
