import ProfileCard from "./conponents/ProfileCard";
import LinksCard from "./conponents/LinksCard";
import Footer from "./conponents/Footer";
import IconsHolder from "./conponents/IconsHolder";
import ShareModal from "./conponents/ShareModal";

function App() {
  return (
    <div className="container px-6 mx-auto gap-8 flex flex-col items-center justify-center pb-20 py-8">
      <ProfileCard />
      <LinksCard />
      <IconsHolder />
      <Footer />
    </div>
  );
}

export default App;
