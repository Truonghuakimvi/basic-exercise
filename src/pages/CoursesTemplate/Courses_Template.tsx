import clockIcon from "../../assets/images/clock-icon.svg";
import { ICourse, data } from "../Home/Courses";
import { useState } from "react";

const Courses_Template = () => {
  const [courses, setCourses] = useState<ICourse[]>(data);

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
      <section className="flex gap-[30px] container mx-auto max-w-[1300px] pb-[70px]">
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
                <input
                  className="h-[13px] w-[13px]"
                  type="radio"
                  id="radio1"
                  name="radio"
                />
                <label className="text-sm font-semibold" htmlFor="radio1">
                  All
                </label>
              </li>
              <li className="flex items-center gap-2">
                <input
                  className="h-[13px] w-[13px]"
                  type="radio"
                  id="radio2"
                  name="radio"
                />
                <label className="text-sm font-semibold" htmlFor="radio2">
                  Free
                </label>
              </li>
              <li className="flex items-center gap-2 mb-4">
                <input
                  className="h-[13px] w-[13px]"
                  type="radio"
                  id="radio3"
                  name="radio"
                />
                <label className="text-sm font-semibold" htmlFor="radio3">
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
        <div className="flex flex-col flex-1 gap-[30px]">
          <div className="flex">
            <div className="flex gap-2 flex-1 items-center">
              <button className="bg-transparent flex gap-2 items-center border-2 border-[#303030] rounded-[5px] py-[10px] px-5">
                <img
                  className="h-[15px] w-[18px]"
                  src="https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/apps-grid-icon.png"
                />
                <span className="text-sm font-semibold">GRID</span>
              </button>
              <button className="bg-transparent flex gap-2 items-center border-2 border-[#303030] rounded-[5px] py-[10px] px-5">
                <img
                  className="h-[15px] w-auto"
                  src="https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/content-view-detail-list-icon.png"
                />
                <span className="text-sm font-semibold">LIST</span>
              </button>
            </div>
            <div className="flex gap-2 flex-1 justify-end">
              <span className="flex items-center">Order by : </span>
              <button className="flex bg-white rounded-[3px] border border-[#e2d6c1]">
                <span className="py-[15px] pl-[15px] pr-10 text-sm text-[#999999]">
                  Select Order
                </span>
                <div className="flex h-full border-l border-[#e2d6c1] p-3">
                  <svg
                    className="h-full w-auto mx-1"
                    overflow="visible"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                    fill="#e2d6c1"
                  >
                    <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
          <div className="grid gap-[30px] grid-cols-3 max-xl:grid-cols-2 items-start">
            {courses.map((course, index) => {
              const sumOfVotes = course.votes.reduce(
                (acc, current) => acc + current,
                0
              );
              const averageRating = (sumOfVotes / course.votes.length).toFixed(
                2
              );

              return (
                <div key={index + 1} className="flex flex-col gap-4">
                  <div className="flex-1">
                    <img className="w-full" src={course.image} alt="" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-xl text-[#da853d] font-medium">
                      {course.price ? "$" + course.price : "Free"}
                    </span>
                    <span className="font-raleway text-xl font-medium">
                      {course.title}
                    </span>
                  </div>
                  <div className="flex gap-2 text-sm">
                    <span className="text-[#777777]">{course.category}</span>|
                    <span className="text-[#777777]">
                      {course.curriculumNums} Curriculum
                    </span>
                  </div>
                  <div className="bg-black h-[2px]"></div>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <img className="h-[16px] w-auto" src={clockIcon} alt="" />
                      <span className="font-raleway font-base">
                        {course.duration.months
                          ? course.duration.months + "m "
                          : ""}
                        {course.duration.days
                          ? course.duration.days + "d "
                          : ""}
                        {course.duration.hours
                          ? course.duration.hours + "h "
                          : ""}
                        {course.duration.minutes
                          ? course.duration.minutes + "m "
                          : ""}
                      </span>
                    </div>
                    <span className="text-sm text-[#808080]">
                      <strong className="text-[#808080]">
                        {course.votes.length}
                      </strong>{" "}
                      votes, average:{" "}
                      <strong className="text-[#808080]">
                        {averageRating}
                      </strong>{" "}
                      out of 5 {course.isRated && ", rated"}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Courses_Template;
