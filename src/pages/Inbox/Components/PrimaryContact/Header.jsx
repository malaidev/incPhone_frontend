import React, { useState, useEffect, useContext } from "react";
import { IconButton } from "@material-tailwind/react";
import { BiPhoneCall, BiMessageAltDetail, BiMailSend } from "react-icons/bi";

import TooltipButton from "../../../../components/Custom/TooltipButton";
import IconTooltipButton from "../../../../components/Custom/IconTooltipButton";
import { Avatars } from "../../../../assets";

export const Header = (props) => {
  return (
    <div className="flex min-h-[60px]">
      <div className="flex flex-wrap justify-evenly items-center w-2/3">
        <TooltipButton
          variant="filled"
          name="Open"
          tooltipContent="Filter by Open"
          placement="bottom"
          customClass="h-[30px] bg-cgray dark:bg-darkGray text-darkGrayText text-[12px] leading-none px-[10px] py-0 rounded-md"
        />
        <TooltipButton
          name="Done"
          tooltipContent="Filter by Done"
          placement="bottom"
          customClass="h-[30px] hover:bg-cgray dark:hover:bg-darkGray text-darkGrayText text-[12px] leading-none px-[10px] py-0 rounded-md"
        />
        <TooltipButton
          variant="outlined"
          name="Unread"
          tooltipContent="Filter conversations"
          placement="bottom"
          customClass="h-[30px] hover:bg-cgray dark:hover:bg-darkGray dark:text-primary text-[12px] dark:border-primary leading-none px-[10px] py-0 rounded-md"
        />
      </div>

      <div className="flex flex-wrap justify-evenly items-center w-1/3 ">
        <IconTooltipButton
          tooltipContent="Make a Call"
          shortContent="C"
          placement="bottom"
          buttonClass="ppbutton dark:dppbutton hover:bg-[#e7e7e9] dark:hover:bg-[#2d2d40]"
          Icon={<BiPhoneCall className="w-6 h-6 m-auto" />}
        />

        <IconTooltipButton
          tooltipContent="Send a Message"
          shortContent="N"
          placement="bottom"
          buttonClass="ppbutton dark:dppbutton hover:bg-[#e7e7e9] dark:hover:bg-[#2d2d40]"
          Icon={<BiMessageAltDetail className="w-6 h-6 m-auto" />}
        />
      </div>
    </div>
  );
};
