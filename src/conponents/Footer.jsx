import ZuriLogo from "../assets/Zuri Logo.png";
import IngressiveLogo from "../assets/Ingrsessive Logo.png";

const Footer = () => {
  return (
    <div className="mt-20 border-t-2 pt-6 w-full ">
      <div className="flex flex-wrap   gap-4 justify-between md:items-center">
        <div>
          <img className="w-32" src={ZuriLogo} alt="" />
        </div>
        <p className="text-base text-gray-400 font-normal">
          HNG Internship 9 Frontend Task
        </p>
        <div>
          <img className="w-32" src={IngressiveLogo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
