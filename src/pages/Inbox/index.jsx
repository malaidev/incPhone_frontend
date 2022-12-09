import React from "react";

import { PrimaryContact } from "./Components/PrimaryContact";
import { PrimaryMessage } from "./Components/PrimaryMessage";
import ThemeToggle from "../../components/ThemeToggle";

export const Primary = () => {
  return (
    <div className="flex w-full min-h-full divide-x-2 divide-bc1 dark:divide-dbc1 text-darkGrayText">
      <PrimaryContact />
      <PrimaryMessage />
      <div className="w-[30%] min-h-full">
        <ThemeToggle />
      </div>
    </div>
  );
};
