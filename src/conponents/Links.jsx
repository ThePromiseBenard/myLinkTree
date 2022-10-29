import { clsx } from "clsx";

const Links = ({ url, children, id, className }) => {
  return (
    <a
      target="_blank"
      href={url}
      id={id}
      className={clsx("w-full max-w-[700px]", className)}
    >
      <button className=" py-4 rounded-lg text-center bg-gray-200 w-full md:text-lg font-medium text-black hover:bg-gray-400 transition-colors delay-200 ease-in hover:text-white">
        {children}
      </button>
    </a>
  );
};

export default Links;
