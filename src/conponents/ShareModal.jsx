import {
  FacebookShareButton,
  WhatsappShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  FacebookIcon,
  WhatsappIcon,
  LinkedinIcon,
  TwitterIcon,
} from "react-share";
const ShareModal = ({ closeIcon }) => {
  const currentURL = window.location.href;
  return (
    <div className=" bg-black/50 fixed inset-0 flex items-center justify-center px-6">
      <div className="bg-white w-full h-96 md:h-[34rem] md:w-auto rounded-lg  space-y-8 md:space-y-16 p-10 md:p-16">
        <div className="w-full space-y-14 md:space-y-24">
          <div className="flex justify-end cursor-pointer">
            <span>{closeIcon}</span>
          </div>
          <h1 className="font-bold text-lg md:text-2xl text-center">
            SHARE MY PROFILE
          </h1>
        </div>
        <div className="flex  md:px-8  justify-center gap-4 md:gap-10 ">
          <FacebookShareButton url={currentURL}>
            <FacebookIcon size={50} round={true} />
          </FacebookShareButton>
          <LinkedinShareButton url={currentURL}>
            <LinkedinIcon size={50} round={true} />
          </LinkedinShareButton>
          <TwitterShareButton url={currentURL}>
            <TwitterIcon size={50} round={true} />
          </TwitterShareButton>
          <WhatsappShareButton url={currentURL}>
            <WhatsappIcon size={50} round={true} />
          </WhatsappShareButton>
        </div>
      </div>
    </div>
  );
};

export default ShareModal;
