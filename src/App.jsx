import ProfilePic from "./conponents/ProfilePic";
import LinksCard from "./conponents/LinksCard";

function App() {
  return (
    <div className="container px-6 mx-auto gap-8 flex flex-col items-center justify-center pb-20 py-10">
      <ProfilePic />
      <LinksCard/>
    </div>
  );
}

export default App;
