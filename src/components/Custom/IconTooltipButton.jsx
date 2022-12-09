import React, { useContext } from "react";
import { Tooltip, Button } from "@material-tailwind/react";

const IconTooltipButton = (props) => {
  const { buttonClass, Icon, tooltipContent, shortContent, placement } = props;

  return (
    <Tooltip
      content={
        <>
          {tooltipContent}&nbsp;&nbsp;
          {shortContent ? (
            <span className="w-[15px] h-[15px] text-[10px] text-black text-center leading-none bg-cgray px-[3px]">
              {shortContent}
            </span>
          ) : (
            ""
          )}
        </>
      }
      placement={placement}
      className={`bg-black dark:bg-white text-white dark:text-black text-[12px] p-[5px] rounded-md`}
    >
      <button className={buttonClass}>{Icon}</button>
    </Tooltip>
  );
};

export default IconTooltipButton;
