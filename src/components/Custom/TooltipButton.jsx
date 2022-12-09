import React, { useContext } from "react";
import { Tooltip, Button } from "@material-tailwind/react";

const TooltipButton = (props) => {
  const { variant, name, tooltipContent, placement, customClass } = props;

  return (
    <Tooltip
      content={tooltipContent}
      placement={placement}
      className={`bg-black dark:bg-white text-white dark:text-black text-[12px] p-[5px] rounded-md`}
    >
      <Button variant={variant} className={customClass}>
        {name}
      </Button>
    </Tooltip>
  );
};

export default TooltipButton;
