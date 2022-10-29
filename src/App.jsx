import LinkCard from "./conponents/LinkCard";
import ProfilePic from "./conponents/ProfilePic";
import Text from "./conponents/Text";
function App() {
  return (
    <div className="container px-6 mx-auto gap-8 flex flex-col items-center justify-center py-20">
      <ProfilePic />
      <LinkCard/>
     
    </div>
  );
}

export default App;
