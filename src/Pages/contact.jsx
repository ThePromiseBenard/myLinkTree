const Contact = () => {
  return (
    <div className="container px-6 mx-auto gap-8 flex flex-col items-center justify-center  py-10 md:py-44">
      <div className="space-y-4 w-full md:w-[720px]">
        <h2 className=" text-3xl md:text-4xl font-semibold capitalize">
          Contact Me
        </h2>
        <p className=" text-slate-800/60 text-lg md:text-xl">
          Hi there, contact me to ask me about anything you have in mind.
        </p>
      </div>

      <form action="" className="w-full md:w-[720px] space-y-4 md:space-y-8">
        <div className="flex flex-wrap gap-4 md:gap-10 items-center">
          <div className="gap-1 flex flex-col flex-1">
            <label
              htmlFor=""
              className="capitalize text-sm md:text-base text-gray-700 font-medium"
            >
              first name
            </label>
            <input
              id="first_name"
              type="text"
              className="border border-gray-300 py-2 px-3 rounded-lg"
              placeholder="Enter your first name"
            />
          </div>
          <div className="gap-1 flex flex-col flex-1">
            <label
              htmlFor=""
              className="capitalize text-sm md:text-base text-gray-700 font-medium"
            >
              last name
            </label>
            <input
              id="last_name"
              type="text"
              className="border border-gray-300 py-2 px-3 rounded-lg"
              placeholder="Enter your last name"
            />
          </div>
        </div>
        <div className="gap-1 flex flex-col flex-1">
          <label
            htmlFor=""
            className="capitalize text-sm md:text-base text-gray-700 font-medium"
          >
            email
          </label>
          <input
            id="email"
            type="email"
            className="border border-gray-300 py-2 px-3 rounded-lg"
            placeholder="yourname@email.com"
          />
        </div>
        <div className="gap-1 flex flex-col flex-1">
          <label
            htmlFor=""
            className="capitalize text-sm md:text-base text-gray-700 font-medium"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="border border-gray-300 pt-2 pb-16 px-3 rounded-lg"
            placeholder="yourname@email.com"
          ></textarea>
        </div>
        <div className="flex items-start md:items-center gap-2 md:gap-4">
          <input
            type="checkbox"
            className="mt-1md:mt-0  md:p-2 border-gray-300 rounded focus:ring-0 text-gray-600 transition-all delay-75 ease-out "
          />
          <label className="text-gray-700/60 text-sm ">
            You agree to providing your data to Promise who may contact you.
          </label>
        </div>
      </form>
    </div>
  );
};

export default Contact;
