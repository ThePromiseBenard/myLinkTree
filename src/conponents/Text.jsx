const Text = ({ Children, level }) => {
  switch (level) {
    case 1:
      return <p className="md:text-xl font-bold text-black">{Children}</p>;

      break;
    case 2:
      return <p className="md:text-lg font-medium text-black">{Children}</p>;
      break;

    default:
      return <p className="text-base font-normal text-gray-600">{Children}</p>;
      break;
  }
};

export default Text;
