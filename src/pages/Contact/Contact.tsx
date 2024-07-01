import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";

const schema = yup.object({
  name: yup.string().required("Please fill out this field."),
  email: yup
    .string()
    .required("Please fill out this field.")
    .email("Please enter an email address.")
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter an email address."),
  phone: yup.string(),
  message: yup.string().required("Please fill out this field."),
});

type Inputs = {
  name: string;
  email: string;
  phone?: string;
  message: string;
};

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  const [formSuccess, setFormSuccess] = useState(false);

  if (Object.keys(errors).length > 0 && formSuccess) {
    setFormSuccess(false);
  }

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    reset();
    setFormSuccess(true);
  };

  return (
    <main>
      <section className="mb-[70px]">
        <div className="h-[139px]"></div>
        <div className="py-[30px] bg-[#da853d]">
          <div className="container mx-auto max-w-[1300px] flex flex-col gap-3">
            <span className="text-[40px] font-raleway font-semibold leading-none text-white">
              Contact
            </span>
            <div className="flex gap-2 text-sm text-white">
              <span className="text-white font-medium">Home</span>/
              <span className="text-white font-medium">Contact</span>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto max-w-[1300px] flex gap-[30px]">
        <div className="flex flex-col gap-4 flex-1">
          <span className="text-[26px] font-raleway font-semibold leading-none">
            Give Us A Message
          </span>
          <div className="w-[40px] h-[4px] bg-[#838C48] mb-1"></div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-3"
          >
            <div className="flex bg-white rounded-sm focus-within:border-[#838C48] border border-[#e2d6c1]">
              <div className="flex h-[48px] rounded-none border-r border-[#e2d6c1] justify-center items-center px-[14px]">
                <svg
                  className="w-[14px] h-[14px]"
                  overflow="visible"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  fill="#808080"
                >
                  <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                </svg>
              </div>
              <input
                className="px-4 bg-transparent text-black w-full outline-none flex-1"
                placeholder="Your Name"
                type="text"
                {...register("name")}
              />
              <div className="flex items-center px-[10px] justify-end text-sm text-[#CC0000]">
                {errors.name?.message}
              </div>
            </div>
            <div className="flex bg-white rounded-sm focus-within:border-[#838C48] border border-[#e2d6c1]">
              <div className="flex h-[48px] rounded-none border-r border-[#e2d6c1] justify-center items-center px-[14px]">
                <svg
                  className="w-[14px] h-[14px]"
                  overflow="visible"
                  aria-hidden="true"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#808080"
                >
                  <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
                </svg>
              </div>
              <input
                className="px-4 bg-transparent text-black w-full outline-none flex-1"
                placeholder="Email"
                type="text"
                {...register("email")}
              />
              <div className="flex items-center px-[10px] justify-end text-sm text-[#CC0000]">
                {errors.email?.message}
              </div>
            </div>
            <div className="flex bg-white rounded-sm focus-within:border-[#838C48] border border-[#e2d6c1]">
              <div className="flex h-[48px] rounded-none border-r border-[#e2d6c1] justify-center items-center px-[14px]">
                <svg
                  className="w-[14px] h-[14px]"
                  overflow="visible"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                  fill="#808080"
                >
                  <path d="M80 0C44.7 0 16 28.7 16 64V448c0 35.3 28.7 64 64 64H304c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H80zM192 400a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
                </svg>
              </div>
              <input
                className="px-4 bg-transparent text-black w-full outline-none flex-1"
                placeholder="Phone"
                type="text"
                {...register("phone")}
              />
              <div className="flex items-center px-[10px] justify-end text-sm text-[#CC0000]">
                {errors.phone?.message}
              </div>
            </div>
            <div className="flex bg-white rounded-sm focus-within:border-[#838C48] border border-[#e2d6c1]">
              <div className="flex rounded-none border-r border-[#e2d6c1] px-[14px] pt-4">
                <svg
                  overflow="visible"
                  className="w-[14px] h-[14px]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                  fill="#808080"
                >
                  <path d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z" />
                </svg>
              </div>
              <textarea
                className="px-4 py-[15px] bg-transparent text-black w-full outline-none resize-none flex-1"
                placeholder="Message"
                rows={5}
                cols={40}
                {...register("message")}
              />
              <div className="flex items-end px-[10px] pb-[18px] justify-end text-sm text-[#CC0000]">
                {errors.message?.message}
              </div>
            </div>
            <button
              type="submit"
              className="text-sm font-bold bg-[#838C48] border-2 border-[#838C48]  text-white px-[21px] py-[9.8px] rounded-sm hover:bg-[#da853d]
             hover:border-[#da853d] transition duration-[400ms] self-end mt-[12px] !outline-none"
            >
              SEND EMAIL
            </button>
            {Object.keys(errors).length > 0 && (
              <div className="flex bg-[#FFCCCC] rounded-sm border-[#ff9999] border items-center">
                <svg
                  className="h-[20px] w-auto px-4"
                  overflow="visible"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="#d01313"
                >
                  <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
                </svg>
                <span className="flex items-center py-[17px] justify-end text-sm text-[#d01313]">
                  One or more fields have an error. Please check and try again.
                </span>
              </div>
            )}
            {formSuccess && (
              <div className="flex bg-[#eafac0] rounded-sm border-[#b1cf67] border items-center">
                <svg
                  className="h-[20px] w-auto px-4"
                  overflow="visible"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="#7ba411"
                >
                  <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                </svg>
                <span className="flex items-center py-[17px] justify-end text-sm text-[#7ba411]">
                  Thank you for your message. It has been sent.
                </span>
              </div>
            )}
          </form>
        </div>
        <div className="flex flex-col gap-4 flex-1 max-w-[400px]">
          <span className="text-[26px] font-raleway font-semibold leading-none">
            Contact Info
          </span>
          <div className="w-[40px] h-[4px] bg-[#838C48] mb-1"></div>
          <ul className="flex flex-col gap-[22.5px] text-sm">
            <li className="flex flex-col gap-6">
              <div className="flex items-center gap-[20px]">
                <div className="h-full flex items-center ml-[15px] flex-1 max-w-[25px]">
                  <svg
                    aria-hidden="true"
                    overflow="visible"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#da853d"
                  >
                    <path d="M444.52 3.52L28.74 195.42c-47.97 22.39-31.98 92.75 19.19 92.75h175.91v175.91c0 51.17 70.36 67.17 92.75 19.19l191.9-415.78c15.99-38.39-25.59-79.97-63.97-63.97z"></path>
                  </svg>
                </div>
                <span className="leading-[22px] text-[#808080] flex-1">
                  The Design Themes Inc. Mary Jane St, Sydney 2233 Australia.
                </span>
              </div>
              <div className="flex">
                <hr className="border-t border-[#da853d] min-w-[60px]"></hr>
                <hr className="border-t w-full"></hr>
              </div>
            </li>
            <li className="flex flex-col gap-6">
              <div className="flex items-center gap-[20px]">
                <div className="h-full flex items-center ml-[15px] flex-1 max-w-[25px]">
                  <svg
                    aria-hidden="true"
                    overflow="visible"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#da853d"
                  >
                    <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
                  </svg>
                </div>
                <a
                  className="text-sm flex-1 text-[#303030] font-normal"
                  href="tel:+1%20200%20258%202145"
                >
                  +1 200 258 2145
                </a>
              </div>
              <div className="flex">
                <hr className="border-t border-[#da853d] min-w-[60px]"></hr>
                <hr className="border-t w-full"></hr>
              </div>
            </li>
            <li className="flex flex-col gap-6">
              <div className="flex items-center gap-[20px]">
                <div className="h-full flex items-center ml-[15px] flex-1 max-w-[25px]">
                  <svg
                    aria-hidden="true"
                    overflow="visible"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#da853d"
                  >
                    <path d="M480 160V77.25a32 32 0 0 0-9.38-22.63L425.37 9.37A32 32 0 0 0 402.75 0H160a32 32 0 0 0-32 32v448a32 32 0 0 0 32 32h320a32 32 0 0 0 32-32V192a32 32 0 0 0-32-32zM288 432a16 16 0 0 1-16 16h-32a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h32a16 16 0 0 1 16 16zm0-128a16 16 0 0 1-16 16h-32a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h32a16 16 0 0 1 16 16zm128 128a16 16 0 0 1-16 16h-32a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h32a16 16 0 0 1 16 16zm0-128a16 16 0 0 1-16 16h-32a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h32a16 16 0 0 1 16 16zm0-112H192V64h160v48a16 16 0 0 0 16 16h48zM64 128H32a32 32 0 0 0-32 32v320a32 32 0 0 0 32 32h32a32 32 0 0 0 32-32V160a32 32 0 0 0-32-32z"></path>
                  </svg>
                </div>
                <a
                  className="text-sm flex-1 text-[#303030] font-normal"
                  href="tel:%20+1%20100%20458%202345"
                >
                  +1 100 458 2345
                </a>
              </div>
              <div className="flex">
                <hr className="border-t border-[#da853d] min-w-[60px]"></hr>
                <hr className="border-t w-full"></hr>
              </div>
            </li>
            <li className="flex flex-col gap-6">
              <div className="flex items-center gap-[20px]">
                <div className="h-full flex items-center ml-[15px] flex-1 max-w-[25px]">
                  <svg
                    className="h-[25px]"
                    overflow="visible"
                    aria-hidden="true"
                    viewBox="0 0 320 512"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#da853d"
                  >
                    <path d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z"></path>
                  </svg>
                </div>
                <a
                  className="text-sm flex-1 text-[#303030] font-normal"
                  href="tel:+91%2012345%2067890"
                >
                  +91 12345 67890
                </a>
              </div>
              <div className="flex">
                <hr className="border-t border-[#da853d] min-w-[60px]"></hr>
                <hr className="border-t w-full"></hr>
              </div>
            </li>
            <li className="flex flex-col gap-6">
              <div className="flex items-center gap-[20px]">
                <div className="h-full flex items-center ml-[15px] flex-1 max-w-[25px]">
                  <svg
                    aria-hidden="true"
                    overflow="visible"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#da853d"
                  >
                    <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
                  </svg>
                </div>
                <a
                  className="text-sm flex-1 text-[#303030] font-normal"
                  href="mailto:super@email.com"
                >
                  super@email.com
                </a>
              </div>
              <div className="flex">
                <hr className="border-t border-[#da853d] min-w-[60px]"></hr>
                <hr className="border-t w-full"></hr>
              </div>
            </li>
            <li className="flex flex-col gap-6 ">
              <div className="flex items-center gap-[20px]">
                <div className="h-full flex items-center ml-[15px] flex-1 max-w-[25px]">
                  <svg
                    aria-hidden="true"
                    overflow="visible"
                    viewBox="0 0 496 512"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#da853d"
                  >
                    <path d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm82.29 357.6c-3.9 3.88-7.99 7.95-11.31 11.28-2.99 3-5.1 6.7-6.17 10.71-1.51 5.66-2.73 11.38-4.77 16.87l-17.39 46.85c-13.76 3-28 4.69-42.65 4.69v-27.38c1.69-12.62-7.64-36.26-22.63-51.25-6-6-9.37-14.14-9.37-22.63v-32.01c0-11.64-6.27-22.34-16.46-27.97-14.37-7.95-34.81-19.06-48.81-26.11-11.48-5.78-22.1-13.14-31.65-21.75l-.8-.72a114.792 114.792 0 0 1-18.06-20.74c-9.38-13.77-24.66-36.42-34.59-51.14 20.47-45.5 57.36-82.04 103.2-101.89l24.01 12.01C203.48 89.74 216 82.01 216 70.11v-11.3c7.99-1.29 16.12-2.11 24.39-2.42l28.3 28.3c6.25 6.25 6.25 16.38 0 22.63L264 112l-10.34 10.34c-3.12 3.12-3.12 8.19 0 11.31l4.69 4.69c3.12 3.12 3.12 8.19 0 11.31l-8 8a8.008 8.008 0 0 1-5.66 2.34h-8.99c-2.08 0-4.08.81-5.58 2.27l-9.92 9.65a8.008 8.008 0 0 0-1.58 9.31l15.59 31.19c2.66 5.32-1.21 11.58-7.15 11.58h-5.64c-1.93 0-3.79-.7-5.24-1.96l-9.28-8.06a16.017 16.017 0 0 0-15.55-3.1l-31.17 10.39a11.95 11.95 0 0 0-8.17 11.34c0 4.53 2.56 8.66 6.61 10.69l11.08 5.54c9.41 4.71 19.79 7.16 30.31 7.16s22.59 27.29 32 32h66.75c8.49 0 16.62 3.37 22.63 9.37l13.69 13.69a30.503 30.503 0 0 1 8.93 21.57 46.536 46.536 0 0 1-13.72 32.98zM417 274.25c-5.79-1.45-10.84-5-14.15-9.97l-17.98-26.97a23.97 23.97 0 0 1 0-26.62l19.59-29.38c2.32-3.47 5.5-6.29 9.24-8.15l12.98-6.49C440.2 193.59 448 223.87 448 256c0 8.67-.74 17.16-1.82 25.54L417 274.25z"></path>
                  </svg>
                </div>
                <a
                  className="text-sm flex-1 text-[#303030] font-normal"
                  href="https://google.com"
                >
                  google.com
                </a>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section className="py-20">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7879.54835463818!2d151.20863970282565!3d-33.86538604635096!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12af005785288d%3A0x73d19c011b64aea6!2sETP%20SITE!5e0!3m2!1svi!2s!4v1719802347496!5m2!1svi!2s"
          width="100%"
          height="500"
          style={{ border: "0" }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </main>
  );
};

export default Contact;
