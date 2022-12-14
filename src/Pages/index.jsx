import ProfileCard from "../conponents/ProfileCard";
import LinksCard from "../conponents/LinksCard";
import IconsHolder from "../conponents/IconsHolder";
import Footer from "../conponents/Footer";

const Index = () => {
  return (
    <div className="container px-6 mx-auto gap-8 flex flex-col items-center justify-center  py-8">
      <ProfileCard />
      <LinksCard />
      <IconsHolder />
    </div>
  );
};

export default Index;
