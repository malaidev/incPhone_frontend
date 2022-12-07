import React, { useState, useEffect } from "react";

import { NewUserProfile } from "./NewUserProfile";
import "../../index.css";

export const NewContactSideBar = (props) => {
  const { contacts, handleSaveNewContact } = props;
  const [AddNewNameToogle, setAddNewNameToogle] = useState(true);
  return (
    <div className="col-span-1 text-black dark:text-white h-screen overflow-y-scroll overflow-x-hidden">
      <div>
        <div className="flex flex-col items-center justify-center col-span-1 text-black dark:text-white">
          <NewUserProfile
            contacts={contacts}
            AddNewNameToogle={AddNewNameToogle}
            setAddNewNameToogle={setAddNewNameToogle}
            handleSaveNewContact={handleSaveNewContact}
          />
        </div>
      </div>
    </div>
  );
};
