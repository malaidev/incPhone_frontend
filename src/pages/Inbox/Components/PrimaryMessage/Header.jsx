import React, { useState, useEffect, useContext } from "react";
import { IconButton } from "@material-tailwind/react";
import { BiPhoneCall, BiMessageAltDetail, BiCheck } from "react-icons/bi";
import { MdOutlineMarkChatUnread } from "react-icons/md";
import { MdOutlineFormatListBulleted } from "react-icons/md";

import TooltipButton from "../../../../components/Custom/TooltipButton";
import IconTooltipButton from "../../../../components/Custom/IconTooltipButton";
import { Avatars } from "../../../../assets";

export const Header = (props) => {
  return (
    <div className="flex justify-between !h-[60px] px-[25px]">
      <div className="flex flex-wrap justify-evenly items-center w-[max-content]">
        <div className="flex items-center w-full min-h-[60px] px-[15px] py-[10px]">
          <>
            <span className="flex justify-center relative">
              <img alt="Avatar" src={Avatars.Default} width="40" height="40" />
              <span className="text-white absolute top-1/4 text-[14px] font-bold leading-none">
                T1
              </span>
            </span>
          </>
          <div className="ml-[15px] w-full">
            <div className="flex justify-between items-center">
              <span className="text-[14px] text-dark dark:text-white leading-nong">
                IncPhone Team
              </span>
            </div>
            <span className="text-[13px] leading-nong">(415) 851-6951</span>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-evenly items-center w-1/3 ">
        <IconTooltipButton
          tooltipContent="Call"
          placement="bottom"
          buttonClass="pmpbutton dark:dpmpbutton hover:text-primary dark:hover:text-primary hover:bg-[#e7e7e9] dark:hover:bg-[#2d2d40]"
          Icon={<BiPhoneCall className="w-5 h-5 m-auto" />}
        />

        <IconTooltipButton
          tooltipContent="Mark as done"
          shortContent="E"
          placement="bottom"
          buttonClass="pmpbutton dark:dpmpbutton hover:text-primary dark:hover:text-primary hover:bg-[#e7e7e9] dark:hover:bg-[#2d2d40]"
          Icon={<BiCheck className="w-5 h-5 m-auto" />}
        />

        <IconTooltipButton
          tooltipContent="Mark as unread"
          shortContent="U"
          placement="bottom"
          buttonClass="pmpbutton dark:dpmpbutton hover:text-primary dark:hover:text-primary hover:bg-[#e7e7e9] dark:hover:bg-[#2d2d40]"
          Icon={<MdOutlineMarkChatUnread className="w-5 h-5 m-auto" />}
        />

        <IconTooltipButton
          tooltipContent="More Commands"
          shortContent="X"
          placement="bottom"
          buttonClass="pmpbutton dark:dpmpbutton hover:text-primary dark:hover:text-primary hover:bg-[#e7e7e9] dark:hover:bg-[#2d2d40]"
          Icon={<MdOutlineFormatListBulleted className="w-5 h-5 m-auto" />}
        />
      </div>
    </div>
  );
};
