import React, { useState, useEffect, useContext } from "react";
import { Header } from "./Header";

export const PrimaryMessage = (props) => {
  return (
    <div className="flex-1 min-h-full divide-y-2 divide-bc1 dark:divide-dbc1">
      <Header />
      <div></div>
    </div>
  );
};
