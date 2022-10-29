import ProfileImage from "../assets/Profile Picture.jpeg";


const ProfilePic = () => {
  return (
    <div className="space-y-4">
      <img
        className="h-32 w-32 rounded-full"
        src={ProfileImage}
        alt="profile picture"
        id="profile_img"
      />
      <p className="text-lg md:text-xl font-bold text-black">Promise Benard</p>
    </div>
  );
};

export default ProfilePic;
