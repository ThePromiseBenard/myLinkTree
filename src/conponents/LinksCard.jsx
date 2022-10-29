import Links from "./Links";

const LinksCard = () => {
  return (
    <div className="w-full flex flex-col gap-4 md:gap-10 items-center justify-center">
      <Links subText="Link to my upcoming portfolio website" url="/#">
        thepromisebenard.com (comming soon)
      </Links>

      <Links
        subText="Meet the wonderful Zuri team"
        url="https://training.zuri.team/"
        id="btn__zuri"
      >
        Zuri's Team
      </Links>

      <Links
        subText="Take a tour of Zuri's Book store"
        url="http://books.zuri.team "
        id="books"
      >
        Zuri's Books
      </Links>

      <Links
        subText="Grab a copy of my best selling beginner's friendly python book"
        url="https://books.zuri.team/python-for-beginners?ref_id=thepromisebenard"
        id="book__python"
      >
        Best Python Book
      </Links>

      <Links
        subText="If you have been looking for how to put your tech skills to test, Then sign up for Talent Hunt"
        url="https://background.zuri.team"
        id="pitch"
      >
        Talent Hunt
      </Links>

      <Links
        subText="Zuri's design book would get you up to speed. Grab a copy NOW!"
        url="https://books.zuri.team/design-rules"
        id="book__design"
      >
        Zuri's Design Book
      </Links>
    </div>
  );
};

export default LinksCard;
