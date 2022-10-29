import ProfileImage from "../assets/Profile Picture.jpeg";

const ProfilePic = () => {
  return (
    <div className=" rounded-full ">
      <img
        className="h-32 w-32 rounded-full"
        src={ProfileImage}
        alt="profile picture"
        id="profile_img"
      />
    </div>
  );
};

export default ProfilePic;
