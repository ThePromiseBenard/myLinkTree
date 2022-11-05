import ProfileImage from "../assets/Profile Picture.jpg";
import { AiOutlineTwitter, AiOutlineCamera } from "react-icons/ai";
import ShareIcon from "./ShareIcon";

const ProfileCard = () => {
  return (
    <div className="space-y-4 flex items-center justify-center w-full max-w-[700px] ml-6">
      <div className="flex items-center justify-center flex-col  md:flex-auto">
        <div className="relative h-20 w-20 rounded-full cursor-pointer">
          <img
            className="h-20 w-20 rounded-full"
            src={ProfileImage}
            alt="profile picture"
            id="profile_img"
          />
          <div className="text-white absolute w-full h-full rounded-full inset-0 opacity-0 hover:bg-black/50 hover:opacity-100  flex items-end justify-center transition-all delay-200 ease-in">
            <AiOutlineCamera size={20} />
          </div>
        </div>
        <div className="text-center">
          <a
            href="https://twitter.com/ThePromiseBenrd"
            target="_blank"
            className="flex items-center gap-1 group"
            id="twitter"
          >
            <AiOutlineTwitter
              size={34}
              className="group-hover:text-blue-400 transition-all delay-200 ease-in"
            />
            <p className="text-lg md:text-xl font-bold text-black">
              @thepromisebenrd
            </p>
          </a>

          <div id="slack" className=" gap-1 hidden">
            <p className="text-lg md:text-xl font-bold text-black">
              @thepromisebenard
            </p>
          </div>
        </div>
      </div>
      <div>
        <ShareIcon />
      </div>
    </div>
  );
};

export default ProfileCard;
