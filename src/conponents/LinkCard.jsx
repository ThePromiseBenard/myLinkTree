const LinkCard = ({url, children}) => {
  return (
    <a href="" className="w-full max-w-[900px]">
      <div className=" py-4 rounded-lg text-center bg-gray-200 ">
        <p className="md:text-lg font-medium text-black">Link</p>
      </div>
    </a>
  );
};

export default LinkCard;
