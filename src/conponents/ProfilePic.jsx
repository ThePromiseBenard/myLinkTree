import ProfileImage from "../assets/Profile Picture.jpg";
import { AiOutlineTwitter, AiOutlineCamera } from "react-icons/ai";

const ProfilePic = () => {
  return (
    <div className="space-y-4 flex items-center justify-center flex-col">
      <div className="relative h-36 md:h-44 w-36 md:w-44 rounded-full cursor-pointer">
        <img
          className="h-36 md:h-44 w-36 md:w-44 rounded-full"
          src={ProfileImage}
          alt="profile picture"
          id="profile_img"
        />
        <div className="text-white absolute w-full h-full rounded-full inset-0 opacity-0 hover:bg-black/50 hover:opacity-100  flex items-end justify-center transition-all delay-200 ease-in">
          <AiOutlineCamera size={44} />
        </div>
      </div>
      <div className="text-center">
        <div className="flex items-center gap-1" id="twitter">
          <AiOutlineTwitter size={34} />
          <a
            href="https://twitter.com/ThePromiseBenrd"
            target="_blank"
            className="text-lg md:text-xl font-bold text-black"
          >
            @thepromisebenrd
          </a>
        </div>

        <div id="slack" className=" gap-1 hidden">
          <p className="text-lg md:text-xl font-bold text-black">
            thepromisebenard
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePic;
