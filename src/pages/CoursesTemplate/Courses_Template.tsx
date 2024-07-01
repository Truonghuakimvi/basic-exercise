const Courses_Template = () => {
  return (
    <main>
      <section className="mb-[70px]">
        <div className="h-[139px]"></div>
        <div className="py-[30px] bg-[#da853d]">
          <div className="container mx-auto max-w-[1300px] flex flex-col gap-3">
            <span className="text-[40px] font-raleway font-semibold leading-none text-white">
              Courses-Template
            </span>
            <div className="flex gap-2 text-sm text-white">
              <span className="text-white font-medium">Home</span>/
              <span className="text-white font-medium">Courses-Template</span>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto max-w-[1300px] pb-[70px]">
        <div className="flex flex-col gap-[15px] max-w-[275px] mb-5">
          <div className="bg-[#f5e9d4] p-[30px]">
            <div className="bg-white flex">
              <input
                className="bg-transparent w-full py-[10px] pr-10 pl-[15px] outline-none"
                placeholder="Search Course"
              />
              <button className="bg-transparent !outline-none mx-[15px]">
                <svg
                  className="w-[14px] h-[25px]"
                  overflow="visible"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                </svg>
              </button>
            </div>
          </div>
          <div className="bg-[#f5e9d4] py-[30px] px-[25px] flex flex-col gap-3 items-start">
            <span className="border-b-2 border-[#303030] pb-[5px] text-base font-medium">
              Course Categories
            </span>
            <ul className="flex flex-col gap-5">
              <li className="flex items-center gap-2">
                <input
                  className="h-[13px] w-[13px]"
                  type="checkbox"
                  id="checkbox1"
                />
                <label className="text-sm font-semibold" htmlFor="checkbox1">
                  Education
                </label>
              </li>
              <li className="flex items-center gap-2">
                <input
                  className="h-[13px] w-[13px]"
                  type="checkbox"
                  id="checkbox2"
                />
                <label className="text-sm font-semibold" htmlFor="checkbox2">
                  Engineering
                </label>
              </li>
              <li className="flex items-center gap-2">
                <input
                  className="h-[13px] w-[13px]"
                  type="checkbox"
                  id="checkbox3"
                />
                <label className="text-sm font-semibold" htmlFor="checkbox3">
                  Health
                </label>
              </li>
              <li className="flex items-center gap-2">
                <input
                  className="h-[13px] w-[13px]"
                  type="checkbox"
                  id="checkbox4"
                />
                <label className="text-sm font-semibold" htmlFor="checkbox4">
                  Law
                </label>
              </li>
              <li className="flex items-center gap-2 mb-5">
                <input
                  className="h-[13px] w-[13px]"
                  type="checkbox"
                  id="checkbox5"
                />
                <label className="text-sm font-semibold" htmlFor="checkbox5">
                  Mathematics
                </label>
              </li>
            </ul>
          </div>
          <div className="bg-[#f5e9d4] py-[30px] px-[25px] flex flex-col gap-3 items-start">
            <span className="border-b-2 border-[#303030] pb-[5px] text-base font-medium">
              Cost
            </span>
            <ul className="flex flex-col gap-5">
              <li className="flex items-center gap-2">
                <input className="h-[13px] w-[13px]" type="radio" id="radio1" />
                <label className="text-sm font-semibold" htmlFor="radio1">
                  All
                </label>
              </li>
              <li className="flex items-center gap-2">
                <input className="h-[13px] w-[13px]" type="radio" id="radio1" />
                <label className="text-sm font-semibold" htmlFor="radio1">
                  Free
                </label>
              </li>
              <li className="flex items-center gap-2 mb-4">
                <input className="h-[13px] w-[13px]" type="radio" id="radio1" />
                <label className="text-sm font-semibold" htmlFor="radio1">
                  Paid
                </label>
              </li>
            </ul>
          </div>
          <div className="bg-[#f5e9d4] py-[30px] px-[25px] flex flex-col gap-3 items-start">
            <span className="border-b-2 border-[#303030] pb-[5px] text-base font-medium">
              Start Date :
            </span>
            <div className="bg-white flex">
              <input
                className="bg-transparent w-full py-[10px] pr-10 pl-[15px] outline-none"
                placeholder="Start Date"
              />
              <button className="bg-transparent !outline-none mx-[15px]">
                <svg
                  className="w-[14px] h-[25px]"
                  overflow="visible"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Courses_Template;
