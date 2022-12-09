import React, { useState, useEffect, useContext } from "react";

import { Avatars } from "../../../../assets";

export const ContactLists = (props) => {
  return (
    <div className="p-[10px]">
      <div className="flex items-center w-full min-h-[60px] bg-cgray hover:bg-hoverGray dark:bg-darkGray dark:hover:bg-darkHoverGray rounded-lg px-[15px] py-[10px]">
        <>
          <span className="flex justify-center relative">
            <img alt="Avatar" src={Avatars.Default} width="40" height="40" />
            <span className="text-white absolute top-1/4 text-[14px] font-bold">
              T1
            </span>
          </span>
        </>
        <div className="ml-[15px] w-full">
          <div className="flex justify-between items-center">
            <span className="text-[14px] text-dark dark:text-white leading-nong">
              IncPhone Team
            </span>
            <span className="text-[11px] leading-nong">Nov 30</span>
          </div>
          <span className="text-[13px] leading-nong">
            Hey Eric Welcome aboard! W...
          </span>
        </div>
      </div>
    </div>
  );
};
