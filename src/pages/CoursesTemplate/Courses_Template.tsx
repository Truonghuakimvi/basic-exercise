import clockIcon from "../../assets/images/clock-icon.svg";
import { data } from "../Home/Courses";
import { useEffect, useRef, useState } from "react";

const Courses_Template = () => {
  const [isList, setIsList] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [searchInput, setSearchInput] = useState<string>("");
  const [courseSearchInput, setCourseSearchInput] = useState<string>("");
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const sortOptions = [
    { label: "Recent Courses", value: "recent" },
    { label: "Highest Rated", value: "highestRated" },
    { label: "Most Members", value: "members" },
    { label: "Alphabetical", value: "alphabetical" },
  ];

  const filteredSortOptions = sortOptions.filter((option) =>
    option.label.toLowerCase().includes(searchInput.toLowerCase())
  );

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const [filterType, setFilterType] = useState<"all" | "free" | "paid">("all");
  const [categoryFilters, setCategoryFilters] = useState<string[]>([]);
  const [sortOrder, setSortOrder] = useState<
    "alphabetical" | "recent" | "highestRated" | "members"
  >("recent");

  const toggleCategoryFilter = (category: string) => {
    if (categoryFilters.includes(category)) {
      setCategoryFilters(categoryFilters.filter((item) => item != category));
    } else {
      setCategoryFilters([...categoryFilters, category]);
    }
  };

  const filteredCourses = data
    .filter((course) => {
      const matchesPrice =
        filterType == "all" ||
        (filterType == "free" && course.price == 0) ||
        (filterType == "paid" && course.price > 0);

      const matchesCategory =
        categoryFilters.length == 0 ||
        categoryFilters.includes(course.category);

      const matchesTitle = course.title
        .toLowerCase()
        .includes(courseSearchInput.toLowerCase());

      return matchesPrice && matchesCategory && matchesTitle;
    })
    .sort((a, b) => {
      if (sortOrder == "alphabetical") {
        return a.title.localeCompare(b.title);
      } else if (sortOrder == "highestRated") {
        const avgRatingA =
          a.votes.reduce((sum, vote) => sum + vote, 0) / a.votes.length;
        const avgRatingB =
          b.votes.reduce((sum, vote) => sum + vote, 0) / b.votes.length;
        return avgRatingB - avgRatingA;
      }
      return 0;
    });

  const handleSortChange = (
    order: "alphabetical" | "recent" | "highestRated" | "members"
  ) => {
    setSortOrder(order);
    setIsOpen(false);
  };

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
                value={courseSearchInput}
                onChange={(e) => setCourseSearchInput(e.target.value)}
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
                  checked={categoryFilters.includes("Education")}
                  onChange={() => toggleCategoryFilter("Education")}
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
                  checked={categoryFilters.includes("Engineering")}
                  onChange={() => toggleCategoryFilter("Engineering")}
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
                  checked={categoryFilters.includes("Health")}
                  onChange={() => toggleCategoryFilter("Health")}
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
                  checked={categoryFilters.includes("Law")}
                  onChange={() => toggleCategoryFilter("Law")}
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
                  checked={categoryFilters.includes("Mathematics")}
                  onChange={() => toggleCategoryFilter("Mathematics")}
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
                  checked={filterType == "all"}
                  onChange={() => setFilterType("all")}
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
                  checked={filterType == "free"}
                  onChange={() => setFilterType("free")}
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
                  checked={filterType == "paid"}
                  onChange={() => setFilterType("paid")}
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
              <button
                onClick={() => setIsList(false)}
                className={`flex gap-2 items-center border-2 rounded-[5px] py-[10px] px-5 group !outline-none transition duration-[400ms] ${
                  !isList
                    ? "bg-[#838C48] border-[#838C48]"
                    : "bg-transparent border-[#303030] hover:bg-[#838C48] hover:border-[#838C48]"
                }`}
              >
                <svg
                  className={`h-[15px] w-auto group-hover:fill-white ${
                    !isList && "fill-white"
                  }`}
                  overflow="visible"
                  xmlns="http://www.w3.org/2000/svg"
                  shape-rendering="geometricPrecision"
                  text-rendering="geometricPrecision"
                  image-rendering="optimizeQuality"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  viewBox="0 0 512 486.68"
                >
                  <path d="M10.208 0h108.173c5.615 0 10.207 4.593 10.207 10.208v100.159c0 5.615-4.592 10.208-10.207 10.208H10.208C4.593 120.575 0 115.982 0 110.367V10.208C0 4.593 4.593 0 10.208 0zm387.687 366.105h99.621c7.967 0 14.484 6.517 14.484 14.484v91.607c0 7.967-6.517 14.484-14.484 14.484h-99.621c-7.967 0-14.484-6.517-14.484-14.484v-91.607c0-7.967 6.517-14.484 14.484-14.484zm-191.706 0h99.621c7.967 0 14.484 6.517 14.484 14.484v91.607c0 7.967-6.517 14.484-14.484 14.484h-99.621c-7.967 0-14.483-6.517-14.483-14.484v-91.607c0-7.967 6.516-14.484 14.483-14.484zm-191.705 0h99.621c7.967 0 14.483 6.517 14.483 14.484v91.607c0 7.967-6.516 14.484-14.483 14.484H14.484C6.517 486.68 0 480.163 0 472.196v-91.607c0-7.967 6.517-14.484 14.484-14.484zm379.135-183.052h108.173c5.615 0 10.208 4.593 10.208 10.207v100.16c0 5.614-4.593 10.208-10.208 10.208H393.619c-5.615 0-10.208-4.594-10.208-10.208V193.26c0-5.614 4.593-10.207 10.208-10.207zm-191.706 0h108.173c5.615 0 10.208 4.593 10.208 10.207v100.16c0 5.614-4.593 10.208-10.208 10.208H201.913c-5.614 0-10.207-4.594-10.207-10.208V193.26c0-5.614 4.593-10.207 10.207-10.207zm-191.705 0h108.173c5.615 0 10.207 4.593 10.207 10.207v100.16c0 5.614-4.592 10.208-10.207 10.208H10.208C4.593 303.628 0 299.034 0 293.42V193.26c0-5.614 4.593-10.207 10.208-10.207zM393.619 0h108.173C507.407 0 512 4.593 512 10.208v100.159c0 5.615-4.593 10.208-10.208 10.208H393.619c-5.615 0-10.208-4.593-10.208-10.208V10.208C383.411 4.593 388.004 0 393.619 0zM201.913 0h108.173c5.615 0 10.208 4.593 10.208 10.208v100.159c0 5.615-4.593 10.208-10.208 10.208H201.913c-5.614 0-10.207-4.593-10.207-10.208V10.208C191.706 4.593 196.299 0 201.913 0z" />
                </svg>
                <span
                  className={`text-sm font-semibold group-hover:text-white ${
                    isList ? "text-black" : "text-white"
                  }`}
                >
                  GRID
                </span>
              </button>
              <button
                onClick={() => setIsList(true)}
                className={`flex gap-2 items-center border-2 rounded-[5px] py-[10px] px-5 group !outline-none transition duration-[400ms] ${
                  isList
                    ? "bg-[#838C48] border-[#838C48]"
                    : "bg-transparent border-[#303030] hover:bg-[#838C48] hover:border-[#838C48]"
                }`}
              >
                <svg
                  className={`h-[15px] w-auto group-hover:fill-white ${
                    isList && "fill-white"
                  }`}
                  overflow="visible"
                  xmlns="http://www.w3.org/2000/svg"
                  shape-rendering="geometricPrecision"
                  text-rendering="geometricPrecision"
                  image-rendering="optimizeQuality"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  viewBox="0 0 512 474.051"
                >
                  <path d="M11.216 0H88.37c6.169 0 11.216 5.047 11.216 11.216v70.947c0 6.17-5.047 11.217-11.216 11.217H11.216C5.047 93.38 0 88.333 0 82.163V11.216C0 5.047 5.047 0 11.216 0zm152.662 380.672h336.906c6.169 0 11.216 5.05 11.216 11.216v70.947c0 6.166-5.051 11.216-11.216 11.216H163.878c-6.166 0-11.217-5.046-11.217-11.216v-70.947c0-6.169 5.047-11.216 11.217-11.216zm-152.662 0H88.37c6.169 0 11.216 5.047 11.216 11.216v70.947c0 6.17-5.047 11.216-11.216 11.216H11.216C5.047 474.051 0 469.005 0 462.835v-70.947c0-6.169 5.047-11.216 11.216-11.216zm152.662-190.336h336.906c6.169 0 11.216 5.05 11.216 11.216v70.947c0 6.166-5.051 11.216-11.216 11.216H163.878c-6.166 0-11.217-5.046-11.217-11.216v-70.947c0-6.17 5.047-11.216 11.217-11.216zm-152.662 0H88.37c6.169 0 11.216 5.046 11.216 11.216v70.947c0 6.17-5.047 11.216-11.216 11.216H11.216C5.047 283.715 0 278.669 0 272.499v-70.947c0-6.17 5.047-11.216 11.216-11.216zM163.878 0h336.906C506.953 0 512 5.051 512 11.216v70.947c0 6.166-5.051 11.217-11.216 11.217H163.878c-6.166 0-11.217-5.047-11.217-11.217V11.216C152.661 5.047 157.708 0 163.878 0z" />
                </svg>
                <span
                  className={`text-sm font-semibold group-hover:text-white ${
                    !isList ? "text-black" : "text-white"
                  }`}
                >
                  LIST
                </span>
              </button>
            </div>
            <div className="flex gap-2 flex-1 justify-end">
              <span className="flex items-center">Order by : </span>
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={toggleDropdown}
                  className="flex bg-white rounded-none border border-[#e2d6c1] h-full !outline-none"
                >
                  <span className="py-[15px] pl-[15px] pr-10 text-sm text-[#999999]">
                    Select Order
                  </span>
                  <div className="h-full border-l border-[#e2d6c1] px-5">
                    <svg
                      className="h-full w-[13px]"
                      overflow="visible"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                      fill="#e2d6c1"
                      transform={isOpen ? "rotate(180)" : undefined}
                    >
                      <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
                    </svg>
                  </div>
                </button>
                {isOpen && (
                  <div className="origin-top absolute mt-2 w-full shadow-lg bg-white p-2">
                    <div>
                      <input
                        type="text"
                        className="w-full px-4 py-3 text-base text-[#999999] border border-[#e2d6c1] rounded-none focus:outline-none"
                        placeholder="Search..."
                        value={searchInput}
                        onChange={(e) => {
                          setSearchInput(e.target.value);
                        }}
                      />
                    </div>
                    <div className="pt-3 py-1">
                      {filteredSortOptions.map((option) => (
                        <button
                          key={option.value}
                          className={`w-full rounded-none px-4 py-2 text-sm text-left transition duration-[400ms] !outline-none
                            ${
                              sortOrder === option.value
                                ? "bg-[#838C48] text-white"
                                : "text-[#999999] hover:bg-[#838C48] hover:text-white"
                            }`}
                          onClick={() =>
                            handleSortChange(
                              option.value as
                                | "alphabetical"
                                | "recent"
                                | "highestRated"
                                | "members"
                            )
                          }
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div
            className={`${
              isList
                ? "flex flex-col gap-[45px]"
                : "grid gap-[30px] grid-cols-3 max-xl:grid-cols-2"
            }`}
          >
            {filteredCourses.map((course, index) => {
              const sumOfVotes = course.votes.reduce(
                (acc, current) => acc + current,
                0
              );
              const averageRating = (sumOfVotes / course.votes.length).toFixed(
                2
              );

              return (
                <div
                  key={index + 1}
                  className={`${
                    isList ? "flex gap-[35px]" : "flex flex-col gap-4"
                  }`}
                >
                  <div className={`flex-1 ${isList && "max-w-[340px]"}`}>
                    <img className="w-full" src={course.image} alt="" />
                  </div>
                  <div
                    className={`flex flex-col gap-5 flex-1 ${
                      isList && "pt-5 pr-[35px]"
                    }`}
                  >
                    <div className="flex flex-col gap-2 flex-1">
                      <span className="text-xl text-[#da853d] font-medium">
                        {course.price ? "$" + course.price : "Free"}
                      </span>
                      <div className="flex-1 flex items-center">
                        <span className="font-raleway text-xl font-medium ">
                          {course.title}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2 text-sm">
                      <span className="text-[#777777]">{course.category}</span>|
                      <span className="text-[#777777]">
                        {course.curriculumNums} Curriculum
                      </span>
                    </div>
                    {isList && (
                      <p className="text-sm text-[#808080] leading-[26px] font-medium">
                        Donec eu congue sem. Fusce ut eu est semper augue
                        accumsan. Integer consequat ultricies arcu a feugiat. In
                        hac habitasse platea dictumst. Donec vel efficitur
                        mauris, et tempor ipsum
                      </p>
                    )}
                    <div className="bg-black h-[2px]"></div>
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        <img
                          className="h-[16px] w-auto"
                          src={clockIcon}
                          alt=""
                        />
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
