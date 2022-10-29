import { useState } from "react";
import { RiShareForwardLine, RiCloseCircleLine } from "react-icons/ri";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import ShareModal from "./ShareModal";

const ShareIcon = () => {
  const [open, setOpen] = useState(false);
  const shareHandler = () => {
    setOpen(!open);
  };
  return (
    <div>
      <div>
        <RiShareForwardLine
          size={45}
          className="text-gray-400 border-2 rounded-full p-2 border-dashed hidden md:block cursor-pointer"
          onClick={() => shareHandler()}
        />
        <BiDotsHorizontalRounded
          size={45}
          className="text-gray-400 border rounded-full p-2 border-dashed md:hidden cursor-pointer"
          onClick={() => shareHandler()}
        />
      </div>

      {open ? (
        <ShareModal
          closeIcon={
            <RiCloseCircleLine
              size={34}
              color={"#98A2B3"}
              onClick={() => shareHandler()}
            />
          }
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default ShareIcon;
