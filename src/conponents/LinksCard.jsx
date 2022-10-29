import Links from "./Links";

const LinksCard = () => {
  return (
    <div className="w-full flex flex-col gap-4 md:gap-10 items-center justify-center">
      <Links url="/#">thepromisebenard.com (comming soon)</Links>

      <Links url="https://training.zuri.team/" id="btn__zuri">
        Zuri's Team
      </Links>

      <Links url="http://books.zuri.team " id="books">
        Zuri's Books
      </Links>

      <Links
        url="https://books.zuri.team/python-for-beginners?ref_id=thepromisebenard"
        id="book__python"
      >
        Best Python Books
      </Links>

      <Links url="https://background.zuri.team" id="pitch">
        Talent Hunt
      </Links>

      <Links url="https://books.zuri.team/design-rules" id="book__design">
        Zuri's Design Book
      </Links>
    </div>
  );
};

export default LinksCard;
