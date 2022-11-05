import { useFormik } from "formik";
import * as yup from "yup";

const Contact = () => {
  // Formik Logics
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
      terms: "",
    },

    // form validations
    validationSchema: yup.object({
      firstName: yup.string().required("Your first name is required"),
      lastName: yup.string().required("Your last name is required"),
      email: yup
        .string()
        .email("Invalid email address")
        .required("email address is empty"),
      message: yup.string().required("please enter a message"),
      terms: yup
        .array()
        .required(
          "you must agree to providing your data by clicking on the check box"
        ),
    }),

    // submit form
  });
  console.log(formik.values);
  console.log(formik.errors);

  return (
    <div className="container px-6 mx-auto gap-8 flex flex-col items-center justify-center  py-10 md:py-24">
      <div className="space-y-4 w-full md:w-[720px]">
        <h2 className=" text-3xl md:text-4xl font-semibold capitalize">
          Contact Me
        </h2>
        <p className=" text-slate-800/60 text-lg md:text-xl">
          Hi there, contact me to ask me about anything you have in mind.
        </p>
      </div>

      <form
        onSubmit={formik.handleSubmit}
        className="w-full md:w-[720px] space-y-4 md:space-y-8"
      >
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
              value={formik.values.firstName}
              onChange={formik.handleChange}
              name="firstName"
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
              value={formik.values.lastName}
              onChange={formik.handleChange}
              name="lastName"
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
            value={formik.values.email}
            onChange={formik.handleChange}
            name="email"
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
            placeholder="Send me a message and I'll reply you as soon as possible..."
            value={formik.values.message}
            onChange={formik.handleChange}
          ></textarea>
        </div>
        <div className="flex items-start md:items-center gap-2 md:gap-4">
          <input
            type="checkbox"
            className="mt-1 md:mt-0  md:p-2 border-gray-300 rounded focus:ring-0 text-blue-500 transition-all delay-75 ease-out "
            value={formik.values.terms}
            onChange={formik.handleChange}
            name="terms"
          />
          <label className="text-gray-700/60 text-sm ">
            You agree to providing your data to Promise who may contact you.
          </label>
        </div>
        <div>
          <button
            className="bg-blue-500 capitalize w-full text-center text-white font-semibold py-3 rounded-lg"
            type="submit"
            id="btn_submit"
          >
            Send message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
