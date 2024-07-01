import facebook from "../../assets/images/facebook.svg";

const Teacher = () => {
  return (
    <main>
      <section className="mb-[70px]">
        <div className="h-[139px]"></div>
        <div className="py-[30px] bg-[#da853d]">
          <div className="container mx-auto max-w-[1300px] flex flex-col gap-3">
            <span className="text-[40px] font-raleway font-semibold leading-none text-white">
              Teachers
            </span>
            <div className="flex gap-2 text-sm text-white">
              <span className="text-white font-medium">Home</span>/
              <span className="text-white font-medium">Teachers</span>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto max-w-[1300px] flex gap-5 justify-start items-start">
        <div className="flex flex-col max-w-[270px] gap-5">
          <div className="flex flex-col border-4 border-[#f5e9d4] shadow-[0_0_0_1px_#e2d6c1] gap-6 justify-center items-start p-5">
            <div className="flex flex-col gap-3">
              <span className="text-xl font-raleway font-semibold">
                Categories
              </span>
              <div className="w-[35px] h-[3px] bg-[#838c48]"></div>
            </div>
            <ul className="w-full">
              <li className="text-sm pb-[12px] border-b">Uncategorized (7)</li>
            </ul>
          </div>
          <div className="flex flex-col border-4 border-[#f5e9d4] shadow-[0_0_0_1px_#e2d6c1] gap-6 justify-center items-start p-5">
            <div className="flex flex-col gap-3">
              <span className="text-xl font-raleway font-semibold">
                Recent Comments
              </span>
              <div className="w-[35px] h-[3px] bg-[#838c48]"></div>
            </div>
            <ul className="w-full flex flex-col gap-3">
              <li className="text-sm pb-[12px] border-b text-[#808080]">
                <span className="font-raleway font-semibold">dtlmsele</span> on{" "}
                <span className="font-raleway font-semibold">
                  Application Developement
                </span>
              </li>
              <li className="text-sm pb-[12px] border-b text-[#808080]">
                <span className="text-[#808080]">dummy</span> on{" "}
                <span className="font-raleway font-semibold">
                  Power Electronics
                </span>
              </li>
              <li className="text-sm pb-[12px] border-b text-[#808080]">
                <span className="text-[#808080]">kowsi</span> on{" "}
                <span className="font-raleway font-semibold">
                  Video Game Technologies
                </span>
              </li>
              <li className="text-sm pb-[12px] border-b text-[#808080]">
                <span className="text-[#808080]">ram</span> on{" "}
                <span className="font-raleway font-semibold">
                  Advanced Programming
                </span>
              </li>
              <li className="text-sm text-[#808080]">
                <span className="text-[#808080]">ram</span> on{" "}
                <span className="font-raleway font-semibold">
                  Processing Digital Signal
                </span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col border-4 border-[#f5e9d4] shadow-[0_0_0_1px_#e2d6c1] gap-6 justify-center items-start p-5">
            <div className="flex flex-col gap-3">
              <span className="text-xl font-raleway font-semibold">
                Archives
              </span>
              <div className="w-[35px] h-[3px] bg-[#838c48]"></div>
            </div>
            <ul className="w-full">
              <li className="text-sm pb-[12px] border-b">November 2023</li>
            </ul>
          </div>
          <div className="flex flex-col border-4 border-[#f5e9d4] shadow-[0_0_0_1px_#e2d6c1] gap-6 justify-center items-start p-5">
            <div className="flex flex-col gap-3">
              <span className="text-xl font-raleway font-semibold">Tags</span>
              <div className="w-[35px] h-[3px] bg-[#838c48]"></div>
            </div>
            <div className="flex gap-[10px] w-full flex-wrap">
              <button className="bg-transparent border-2 border-black rounded-[3px] px-[15px] py-[7px] text-sm">
                BLOG
              </button>
              <button className="bg-transparent border-2 border-black rounded-[3px] px-[15px] py-[7px] text-sm">
                CHAT
              </button>
              <button className="bg-transparent border-2 border-black rounded-[3px] px-[15px] py-[7px] text-sm">
                TIPS
              </button>
            </div>
          </div>
          <div className="flex flex-col border-4 border-[#f5e9d4] shadow-[0_0_0_1px_#e2d6c1] gap-6 justify-center items-start p-5 mb-[70px]">
            <ul className="w-full flex flex-col gap-3">
              <li className="flex flex-col text-sm gap-2 pb-[12px] border-b">
                <span className="text-base font-raleway font-medium">
                  Contrary to popular
                </span>
                <div className="flex items-center gap-3">
                  <svg
                    className="h-[13px] w-[13px]"
                    overflow="visible"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="#808080"
                  >
                    <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                  </svg>
                  <span className="text-[#808080] text-[13px]">30 Thu</span>
                  <svg
                    className="h-[13px] w-[13px]"
                    overflow="visible"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="#808080"
                  >
                    <path d="M123.6 391.3c12.9-9.4 29.6-11.8 44.6-6.4c26.5 9.6 56.2 15.1 87.8 15.1c124.7 0 208-80.5 208-160s-83.3-160-208-160S48 160.5 48 240c0 32 12.4 62.8 35.7 89.2c8.6 9.7 12.8 22.5 11.8 35.5c-1.4 18.1-5.7 34.7-11.3 49.4c17-7.9 31.1-16.7 39.4-22.7zM21.2 431.9c1.8-2.7 3.5-5.4 5.1-8.1c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208s-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6c-15.1 6.6-32.3 12.6-50.1 16.1c-.8 .2-1.6 .3-2.4 .5c-4.4 .8-8.7 1.5-13.2 1.9c-.2 0-.5 .1-.7 .1c-5.1 .5-10.2 .8-15.3 .8c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c4.1-4.2 7.8-8.7 11.3-13.5c1.7-2.3 3.3-4.6 4.8-6.9c.1-.2 .2-.3 .3-.5z" />
                  </svg>
                  <span className="text-[#808080] text-[13px]">0</span>
                </div>
              </li>
              <li className="flex flex-col text-sm gap-2 pb-[12px] border-b">
                <span className="text-base font-raleway font-medium">
                  Omnis voluptas assumenda
                </span>
                <div className="flex items-center gap-3">
                  <svg
                    className="h-[13px] w-[13px]"
                    overflow="visible"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="#808080"
                  >
                    <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                  </svg>
                  <span className="text-[#808080] text-[13px]">30 Thu</span>
                  <svg
                    className="h-[13px] w-[13px]"
                    overflow="visible"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="#808080"
                  >
                    <path d="M123.6 391.3c12.9-9.4 29.6-11.8 44.6-6.4c26.5 9.6 56.2 15.1 87.8 15.1c124.7 0 208-80.5 208-160s-83.3-160-208-160S48 160.5 48 240c0 32 12.4 62.8 35.7 89.2c8.6 9.7 12.8 22.5 11.8 35.5c-1.4 18.1-5.7 34.7-11.3 49.4c17-7.9 31.1-16.7 39.4-22.7zM21.2 431.9c1.8-2.7 3.5-5.4 5.1-8.1c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208s-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6c-15.1 6.6-32.3 12.6-50.1 16.1c-.8 .2-1.6 .3-2.4 .5c-4.4 .8-8.7 1.5-13.2 1.9c-.2 0-.5 .1-.7 .1c-5.1 .5-10.2 .8-15.3 .8c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c4.1-4.2 7.8-8.7 11.3-13.5c1.7-2.3 3.3-4.6 4.8-6.9c.1-.2 .2-.3 .3-.5z" />
                  </svg>
                  <span className="text-[#808080] text-[13px]">0</span>
                </div>
              </li>
              <li className="flex flex-col text-sm gap-2 pb-[12px] border-b">
                <span className="text-base font-raleway font-medium">
                  Piece of classical
                </span>
                <div className="flex items-center gap-3">
                  <svg
                    className="h-[13px] w-[13px]"
                    overflow="visible"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="#808080"
                  >
                    <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                  </svg>
                  <span className="text-[#808080] text-[13px]">30 Thu</span>
                  <svg
                    className="h-[13px] w-[13px]"
                    overflow="visible"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="#808080"
                  >
                    <path d="M123.6 391.3c12.9-9.4 29.6-11.8 44.6-6.4c26.5 9.6 56.2 15.1 87.8 15.1c124.7 0 208-80.5 208-160s-83.3-160-208-160S48 160.5 48 240c0 32 12.4 62.8 35.7 89.2c8.6 9.7 12.8 22.5 11.8 35.5c-1.4 18.1-5.7 34.7-11.3 49.4c17-7.9 31.1-16.7 39.4-22.7zM21.2 431.9c1.8-2.7 3.5-5.4 5.1-8.1c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208s-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6c-15.1 6.6-32.3 12.6-50.1 16.1c-.8 .2-1.6 .3-2.4 .5c-4.4 .8-8.7 1.5-13.2 1.9c-.2 0-.5 .1-.7 .1c-5.1 .5-10.2 .8-15.3 .8c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c4.1-4.2 7.8-8.7 11.3-13.5c1.7-2.3 3.3-4.6 4.8-6.9c.1-.2 .2-.3 .3-.5z" />
                  </svg>
                  <span className="text-[#808080] text-[13px]">0</span>
                </div>
              </li>
              <li className="flex flex-col text-sm gap-2 pb-[12px] border-b">
                <span className="text-base font-raleway font-medium">
                  Latin professor at Hampden
                </span>
                <div className="flex items-center gap-3">
                  <svg
                    className="h-[13px] w-[13px]"
                    overflow="visible"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="#808080"
                  >
                    <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                  </svg>
                  <span className="text-[#808080] text-[13px]">30 Thu</span>
                  <svg
                    className="h-[13px] w-[13px]"
                    overflow="visible"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="#808080"
                  >
                    <path d="M123.6 391.3c12.9-9.4 29.6-11.8 44.6-6.4c26.5 9.6 56.2 15.1 87.8 15.1c124.7 0 208-80.5 208-160s-83.3-160-208-160S48 160.5 48 240c0 32 12.4 62.8 35.7 89.2c8.6 9.7 12.8 22.5 11.8 35.5c-1.4 18.1-5.7 34.7-11.3 49.4c17-7.9 31.1-16.7 39.4-22.7zM21.2 431.9c1.8-2.7 3.5-5.4 5.1-8.1c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208s-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6c-15.1 6.6-32.3 12.6-50.1 16.1c-.8 .2-1.6 .3-2.4 .5c-4.4 .8-8.7 1.5-13.2 1.9c-.2 0-.5 .1-.7 .1c-5.1 .5-10.2 .8-15.3 .8c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c4.1-4.2 7.8-8.7 11.3-13.5c1.7-2.3 3.3-4.6 4.8-6.9c.1-.2 .2-.3 .3-.5z" />
                  </svg>
                  <span className="text-[#808080] text-[13px]">0</span>
                </div>
              </li>
              <li className="flex flex-col text-sm gap-2">
                <span className="text-base font-raleway font-medium">
                  Latin words Ipsum
                </span>
                <div className="flex items-center gap-3">
                  <svg
                    className="h-[13px] w-[13px]"
                    overflow="visible"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="#808080"
                  >
                    <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                  </svg>
                  <span className="text-[#808080] text-[13px]">30 Thu</span>
                  <svg
                    className="h-[13px] w-[13px]"
                    overflow="visible"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="#808080"
                  >
                    <path d="M123.6 391.3c12.9-9.4 29.6-11.8 44.6-6.4c26.5 9.6 56.2 15.1 87.8 15.1c124.7 0 208-80.5 208-160s-83.3-160-208-160S48 160.5 48 240c0 32 12.4 62.8 35.7 89.2c8.6 9.7 12.8 22.5 11.8 35.5c-1.4 18.1-5.7 34.7-11.3 49.4c17-7.9 31.1-16.7 39.4-22.7zM21.2 431.9c1.8-2.7 3.5-5.4 5.1-8.1c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208s-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6c-15.1 6.6-32.3 12.6-50.1 16.1c-.8 .2-1.6 .3-2.4 .5c-4.4 .8-8.7 1.5-13.2 1.9c-.2 0-.5 .1-.7 .1c-5.1 .5-10.2 .8-15.3 .8c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c4.1-4.2 7.8-8.7 11.3-13.5c1.7-2.3 3.3-4.6 4.8-6.9c.1-.2 .2-.3 .3-.5z" />
                  </svg>
                  <span className="text-[#808080] text-[13px]">0</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-wrap gap-5">
          <div className="flex flex-col gap-[15px] bg-[#f5e9d4] p-[10px] self-start">
            <img
              className="max-h-[262px]"
              src="https://dtlmselementor.wpengine.com/wp-content/uploads/2023/11/Teacher-image-3.jpg"
              alt=""
            />
            <div className="flex flex-col pt-[30px] pb-5 justify-center items-center gap-3">
              <span className="text-base font-raleway font-semibold uppercase leading-none text-[#DA853D]">
                damie glendell
              </span>
              <span className="text-sm font-raleway">Co-Director</span>
              <div className="h-[2px] w-[40px] bg-[#838c48]"></div>
              <div className="flex gap-8 py-2">
                <svg
                  className="h-[14px] w-auto"
                  overflow="visible"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  fill="#303030"
                >
                  <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                </svg>
                <svg
                  className="h-[14px] w-auto"
                  overflow="visible"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="#303030"
                >
                  <path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" />
                </svg>
                <svg
                  className="h-[14px] w-auto"
                  overflow="visible"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  fill="#303030"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[15px] bg-[#f5e9d4] p-[10px] self-start">
            <img
              className="max-h-[262px]"
              src="https://dtlmselementor.wpengine.com/wp-content/uploads/2023/11/Teacher-image-2.jpg"
              alt=""
            />
            <div className="flex flex-col pt-[30px] pb-5 justify-center items-center gap-3">
              <span className="text-base font-raleway font-semibold uppercase leading-none text-[#DA853D]">
                james catwin
              </span>
              <span className="text-sm font-raleway">Art Director</span>
              <div className="h-[2px] w-[40px] bg-[#838c48]"></div>
              <div className="flex gap-8 py-2">
                <svg
                  className="h-[14px] w-auto"
                  overflow="visible"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  fill="#303030"
                >
                  <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                </svg>
                <svg
                  className="h-[14px] w-auto"
                  overflow="visible"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="#303030"
                >
                  <path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" />
                </svg>
                <svg
                  className="h-[14px] w-auto"
                  overflow="visible"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  fill="#303030"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[15px] bg-[#f5e9d4] p-[10px] self-start">
            <img
              className="max-h-[262px]"
              src="https://dtlmselementor.wpengine.com/wp-content/uploads/2023/11/Teacher-image-1.jpg"
              alt=""
            />
            <div className="flex flex-col pt-[30px] pb-5 justify-center items-center gap-3">
              <span className="text-base font-raleway font-semibold uppercase leading-none text-[#DA853D]">
                Jenny Sheen
              </span>
              <span className="text-sm font-raleway">
                Digital Media Programming
              </span>
              <div className="h-[2px] w-[40px] bg-[#838c48]"></div>
              <div className="flex gap-8 py-2">
                <svg
                  className="h-[14px] w-auto"
                  overflow="visible"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  fill="#303030"
                >
                  <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                </svg>
                <svg
                  className="h-[14px] w-auto"
                  overflow="visible"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="#303030"
                >
                  <path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" />
                </svg>
                <svg
                  className="h-[14px] w-auto"
                  overflow="visible"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  fill="#303030"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[15px] bg-[#f5e9d4] p-[10px] self-start">
            <img
              className="max-h-[262px]"
              src="https://dtlmselementor.wpengine.com/wp-content/uploads/2023/11/Teacher-image-4.jpg"
              alt=""
            />
            <div className="flex flex-col pt-[30px] pb-5 justify-center items-center gap-3">
              <span className="text-base font-raleway font-semibold uppercase leading-none text-[#DA853D]">
                jim morrison
              </span>
              <span className="text-sm font-raleway">Chief Programmer</span>
              <div className="h-[2px] w-[40px] bg-[#838c48]"></div>
              <div className="flex gap-8 py-2">
                <svg
                  className="h-[14px] w-auto"
                  overflow="visible"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  fill="#303030"
                >
                  <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                </svg>
                <svg
                  className="h-[14px] w-auto"
                  overflow="visible"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="#303030"
                >
                  <path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" />
                </svg>
                <svg
                  className="h-[14px] w-auto"
                  overflow="visible"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  fill="#303030"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Teacher;
