import React, { useState, useEffect, useContext } from "react";

import { NewUserProfile } from "./NewUserProfile";
import { ContactContext } from "../..";
import "../../index.css";

export const NewContactSideBar = (props) => {
  const [AddNewNameToogle, setAddNewNameToogle] = useState(true);

  return (
    <div className="col-span-1 text-black dark:text-white h-screen overflow-y-scroll overflow-x-hidden">
      <div>
        <div className="flex flex-col items-center justify-center col-span-1 text-black dark:text-white">
          <NewUserProfile
            AddNewNameToogle={AddNewNameToogle}
            setAddNewNameToogle={setAddNewNameToogle}
          />
        </div>
      </div>
    </div>
  );
};
