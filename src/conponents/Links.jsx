import { clsx } from "clsx";
import ReactTooltip from "react-tooltip";
import { Link } from "react-router-dom";

const Links = ({ url, children, id, className, subText }) => {
  return (
    <div className={clsx("w-full max-w-[700px]", className)}>
      {id === "contact" ? (
        <Link data-tip={subText}  to={url} id={id}>
          <button className=" py-4 rounded-lg text-center bg-gray-200 w-full md:text-lg font-medium text-black hover:bg-gray-400 transition-colors delay-200 ease-in ">
            {children}
          </button>
          <ReactTooltip />
        </Link>
      ) : (
        <a data-tip={subText} target="_blank" href={url} id={id}>
          <button className=" py-4 rounded-lg text-center bg-gray-200 w-full md:text-lg font-medium text-black hover:bg-gray-400 transition-colors delay-200 ease-in ">
            {children}
          </button>
          <ReactTooltip />
        </a>
      )}
    </div>
  );
};

export default Links;
