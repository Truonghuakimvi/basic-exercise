import bgImage from "../../assets/images/fullscreen-slider.jpg";
import arrowIcon from "../../assets/images/arrow-icon.svg";
import topicIcon from "../../assets/images/topic-icon.svg";
import topicIcon2 from "../../assets/images/topic2-icon.svg";
import topicIcon3 from "../../assets/images/topic3-icon.svg";
import topicIcon4 from "../../assets/images/topic4-icon.svg";
import greaterIcon from "../../assets/images/greater-icon.svg";
import lesserIcon from "../../assets/images/lesser-icon.svg";
import clockIcon from "../../assets/images/clock-icon.svg";
import fileIcon from "../../assets/images/file-icon.svg";
import markIcon from "../../assets/images/bookmark-icon.svg";
import parallaxImage from "../../assets/images/parallax-light.jpg";
import htmlIcon from "../../assets/images/html-icon.svg";
import cssIcon from "../../assets/images/css-icon.svg";
import androidIcon from "../../assets/images/android-icon.svg";
import paperplaneIcon from "../../assets/images/paperplane-icon.svg";
import cart2Icon from "../../assets/images/cart2.icon.svg";
import listIcon from "../../assets/images/list.icon.svg";
import glassIcon from "../../assets/images/magnifying-glass.svg";
import monitorIcon from "../../assets/images/monitor.icon.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { data } from "./Courses";
import { Timeline } from "./Timeline";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <main>
      <section className="relative">
        <div
          className="flex flex-col h-[250px] w-full bg-gradient-to-t from-[rgba(243,234,216,0)] to-[#f9edd7] absolute top-0 
          left-0 z-10"
        ></div>
        <div className="self-start w-full h-[1000px] max-2xl:h-[800px] max-xl:h-[700px] overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={bgImage}
            alt="Slider Image"
          />
        </div>
        <div className="absolute inset-0 flex items-end justify-center z-20 pb-[200px] max-2xl:pb-[150px] w-full">
          <div className="text-center text-white flex flex-col items-center gap-20 max-2xl:gap-8 w-full container mx-auto max-w-[1300px]">
            <section className="flex flex-col gap-6">
              <div className="flex bg-white rounded-[3px] w-[468px]">
                <input
                  className="px-4 bg-transparent text-black w-full outline-none"
                  placeholder="Keywords"
                  type="text"
                />
                <button className="bg-[#838C48] text-white rounded-[3px] rounded-l-none px-[16px] py-[15px]">
                  <svg
                    className="h-[19px] w-auto"
                    overflow="visible"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="white"
                  >
                    <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                  </svg>
                </button>
              </div>
              <div className="flex flex-col gap-4">
                <h1 className="text-xl font-semibold mb-4 italic">
                  We have the largest collection of courses
                </h1>
                <div className="flex justify-center items-center gap-2">
                  <p className="text-xl text-[#838C48] font-semibold leading-none pb-1">
                    View All Courses
                  </p>
                  <img
                    className="max-h-[20px] max-w-[20px]"
                    src={arrowIcon}
                    alt=""
                  />
                </div>
              </div>
            </section>
            <section className="flex text-[#2b2b2b] w-full justify-center">
              <div className="flex flex-col items-center gap-3 p-[10px] flex-1">
                <h1 className="font-extrabold text-responsive font-raleway leading-tight">
                  332
                </h1>
                <span className="h-[4px] w-[130px] bg-[#838C48]"></span>
                <h5 className="text-xl font-semibold font-raleway">Courses</h5>
              </div>
              <div className="flex flex-col items-center gap-3 p-[10px] flex-1">
                <h1 className="font-extrabold text-responsive font-raleway leading-tight">
                  1403
                </h1>
                <span className="h-[3px] w-[130px] bg-[#838C48]"></span>
                <h5 className="text-xl font-semibold font-raleway">Members</h5>
              </div>
              <div className="flex flex-col items-center gap-3 p-[10px] flex-1">
                <h1 className="font-extrabold text-responsive font-raleway leading-tight">
                  60
                </h1>
                <span className="h-[3px] w-[130px] bg-[#838C48]"></span>
                <h5 className="text-xl font-semibold font-raleway">Authors</h5>
              </div>
              <div className="flex flex-col items-center gap-3 p-[10px] flex-1">
                <h1 className="font-extrabold text-responsive font-raleway leading-tight">
                  120
                </h1>
                <span className="h-[3px] w-[130px] bg-[#838C48]"></span>
                <h5 className="text-xl font-semibold font-raleway">Subjects</h5>
              </div>
            </section>
          </div>
        </div>
      </section>
      <section className="flex py-[70px] justify-center items-center">
        <div className="flex w-full container mx-auto max-w-[1300px]">
          <div className="flex flex-col items-center justify-center gap-4 flex-1">
            <div className="bg-[#f5e9d4] rounded-full h-[150px] w-[150px] max-lg:h-[100px] max-lg:w-[100px]">
              <img className="p-8 max-lg:p-5" src={topicIcon} alt="" />
            </div>
            <span className="text-xl font-raleway font-medium">
              Best Stimulations
            </span>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 flex-1">
            <div className="bg-[#f5e9d4] rounded-full h-[150px] w-[150px] max-lg:h-[100px] max-lg:w-[100px]">
              <img className="p-8 max-lg:p-5" src={topicIcon2} alt="" />
            </div>
            <span className="text-xl font-raleway font-medium">
              Group Seminars
            </span>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 flex-1">
            <div className="bg-[#f5e9d4] rounded-full h-[150px] w-[150px] max-lg:h-[100px] max-lg:w-[100px]">
              <img className="p-8 max-lg:p-5" src={topicIcon3} alt="" />
            </div>
            <span className="text-xl font-raleway font-medium">
              Analysed Syllabus
            </span>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 flex-1">
            <div className="bg-[#f5e9d4] rounded-full h-[150px] w-[150px] max-lg:h-[100px] max-lg:w-[100px]">
              <img className="p-8 max-lg:p-5" src={topicIcon4} alt="" />
            </div>
            <span className="text-xl font-raleway font-medium">
              Pratical Training
            </span>
          </div>
        </div>
      </section>
      <section className="flex flex-col container mx-auto max-w-[1300px] max-lg:px-5">
        <div className="flex justify-between pb-10">
          <div className="flex flex-col gap-1">
            <span className="text-[30px] font-raleway font-semibold">
              COURSES
            </span>
            <div className="w-[40px] h-[4px] bg-[#838C48]"></div>
          </div>
          <div className="hidden gap-4 lg:flex">
            <motion.button
              className="flex h-[45px] w-[45px] bg-transparent border-black border-2 rounded-sm justify-center items-center swiper-button-prev focus:outline-none"
              whileHover={{
                backgroundColor: "#838C48",
                color: "white",
                borderColor: "#838C48",
                transition: { duration: 0.4 },
              }}
            >
              <motion.svg
                className="p-[17px] transition duration-[400ms]"
                whileHover={{
                  fill: "white",
                }}
                xmlns="http://www.w3.org/2000/svg"
                shapeRendering="geometricPrecision"
                textRendering="geometricPrecision"
                imageRendering="optimizeQuality"
                fillRule="evenodd"
                clipRule="evenodd"
                viewBox="0 0 319 511.61"
                fill="black"
              >
                <path d="m270.08 5.89 43.04 43.04c7.85 7.86 7.83 20.72 0 28.54L134.77 255.82l178.35 178.35c7.85 7.86 7.8 20.73 0 28.54l-43.04 43.04c-7.83 7.82-20.71 7.82-28.54 0L49.29 313.49l-.37-.36-43.04-43.04c-7.82-7.83-7.86-20.68 0-28.54l43.04-43.04.37-.36L241.54 5.89c7.85-7.85 20.68-7.85 28.54 0z" />
              </motion.svg>
            </motion.button>
            <motion.button
              className="flex h-[45px] w-[45px] bg-transparent border-black border-2 rounded-sm justify-center items-center swiper-button-next focus:outline-none"
              whileHover={{
                backgroundColor: "#838C48",
                color: "white",
                borderColor: "#838C48",
                transition: { duration: 0.4 },
              }}
            >
              <motion.svg
                className="p-[17px] transition duration-[400ms]"
                whileHover={{
                  fill: "white",
                }}
                xmlns="http://www.w3.org/2000/svg"
                shapeRendering="geometricPrecision"
                textRendering="geometricPrecision"
                imageRendering="optimizeQuality"
                fillRule="evenodd"
                clipRule="evenodd"
                viewBox="0 0 319 511.61"
                fill="black"
                transform="scale(-1,1)"
              >
                <path d="m270.08 5.89 43.04 43.04c7.85 7.86 7.83 20.72 0 28.54L134.77 255.82l178.35 178.35c7.85 7.86 7.8 20.73 0 28.54l-43.04 43.04c-7.83 7.82-20.71 7.82-28.54 0L49.29 313.49l-.37-.36-43.04-43.04c-7.82-7.83-7.86-20.68 0-28.54l43.04-43.04.37-.36L241.54 5.89c7.85-7.85 20.68-7.85 28.54 0z" />
              </motion.svg>
            </motion.button>
          </div>
        </div>
        <div className="flex gap-6 justify-between max-lg:flex-col">
          <div className="flex flex-col gap-8 items-start max-w-[360px] flex-shrink-0 max-lg:max-w-full">
            <span className="text-[26px] font-semibold font-raleway">
              About Courses
            </span>
            <div className="flex flex-col gap-8">
              <p className="text-[#808080] text-sm leading-6">
                Student Registration and Administration Nemo enim ipsam
                voluptatem quia voluptas sit atur aut odit aut fugit, sed quia
                consequuntur magni res eos qui ratione voluptatem sequi
                nesciunt.
              </p>
              <p className="text-[#808080] text-sm leading-6">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised believable.
              </p>
            </div>
            <div className="flex flex-1 justify-center items-start max-lg:justify-between max-lg:w-full">
              <button className="text-sm font-bold bg-transparent border-2 border-black text-black px-[21px] py-[9.8px] rounded-sm hover:bg-[#838C48] hover:text-white hover:border-[#838C48] transition duration-[400ms]">
                VIEW ALL COURSES
              </button>
              <div className="hidden max-lg:block">
                <div className="flex gap-4">
                  <motion.button
                    className="flex h-[45px] w-[45px] bg-transparent border-black border-2 rounded-sm justify-center items-center swiper-button-prev focus:outline-none"
                    whileHover={{
                      backgroundColor: "#838C48",
                      color: "white",
                      borderColor: "#838C48",
                      transition: { duration: 0.4 },
                    }}
                  >
                    <motion.svg
                      className="p-[17px] transition duration-[400ms]"
                      whileHover={{
                        fill: "white",
                      }}
                      xmlns="http://www.w3.org/2000/svg"
                      shapeRendering="geometricPrecision"
                      textRendering="geometricPrecision"
                      imageRendering="optimizeQuality"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      viewBox="0 0 319 511.61"
                      fill="black"
                    >
                      <path d="m270.08 5.89 43.04 43.04c7.85 7.86 7.83 20.72 0 28.54L134.77 255.82l178.35 178.35c7.85 7.86 7.8 20.73 0 28.54l-43.04 43.04c-7.83 7.82-20.71 7.82-28.54 0L49.29 313.49l-.37-.36-43.04-43.04c-7.82-7.83-7.86-20.68 0-28.54l43.04-43.04.37-.36L241.54 5.89c7.85-7.85 20.68-7.85 28.54 0z" />
                    </motion.svg>
                  </motion.button>
                  <motion.button
                    className="flex h-[45px] w-[45px] bg-transparent border-black border-2 rounded-sm justify-center items-center swiper-button-next focus:outline-none"
                    whileHover={{
                      backgroundColor: "#838C48",
                      color: "white",
                      borderColor: "#838C48",
                      transition: { duration: 0.4 },
                    }}
                  >
                    <motion.svg
                      className="p-[17px] transition duration-[400ms]"
                      whileHover={{
                        fill: "white",
                      }}
                      xmlns="http://www.w3.org/2000/svg"
                      shapeRendering="geometricPrecision"
                      textRendering="geometricPrecision"
                      imageRendering="optimizeQuality"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      viewBox="0 0 319 511.61"
                      fill="black"
                      transform="scale(-1,1)"
                    >
                      <path d="m270.08 5.89 43.04 43.04c7.85 7.86 7.83 20.72 0 28.54L134.77 255.82l178.35 178.35c7.85 7.86 7.8 20.73 0 28.54l-43.04 43.04c-7.83 7.82-20.71 7.82-28.54 0L49.29 313.49l-.37-.36-43.04-43.04c-7.82-7.83-7.86-20.68 0-28.54l43.04-43.04.37-.36L241.54 5.89c7.85-7.85 20.68-7.85 28.54 0z" />
                    </motion.svg>
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
          <Swiper
            className="flex flex-1 max-w-full"
            spaceBetween={25}
            slidesPerView={2}
            loop={true}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            modules={[Navigation]}
          >
            {data.map((course, index) => {
              const sumOfVotes = course.votes.reduce(
                (acc, current) => acc + current
              );
              const averageRating = (sumOfVotes / course.votes.length).toFixed(
                2
              );

              return (
                <SwiperSlide key={index + 1}>
                  <div className="flex flex-col gap-4 flex-1">
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
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>
      <div className="flex justify-center pt-[60px] pb-7 container mx-auto max-w-[1300px] max-lg:p-10">
        <Swiper
          spaceBetween={80}
          slidesPerView={2}
          loop={true}
          breakpoints={{
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
        >
          <SwiperSlide>
            <div className="flex-1">
              <img
                className="w-full h-auto"
                src="https://dtlmselementor.wpengine.com/wp-content/uploads/2023/11/lms-banner1.jpg"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex-1">
              <img
                className="w-full h-auto"
                src="https://dtlmselementor.wpengine.com/wp-content/uploads/2023/11/lms-banner2.jpg"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex-1">
              <img
                className="w-full h-auto"
                src="https://dtlmselementor.wpengine.com/wp-content/uploads/2023/11/lms-banner3.jpg"
                alt=""
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <section className="flex flex-col  pt-[60px] pb-[70px] container mx-auto max-w-[1300px]">
        <div className="flex flex-col justify-center items-center gap-3 pb-[40px]">
          <span className="text-3xl font-semibold font-raleway">BLOG</span>
          <div className="w-[40px] h-[4px] bg-[#838C48]"></div>
        </div>
        <Swiper
          className="flex justify-center items-center w-full"
          spaceBetween={0}
          slidesPerView={2}
          autoplay={{ delay: 4000 }}
          breakpoints={{
            1280: {
              slidesPerView: 3,
            },
          }}
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <div className="flex flex-col p-[15px] gap-6">
              <img
                className="w-full h-full object-cover"
                src="https://dtlmselementor.wpengine.com/wp-content/uploads/2023/11/blog12.jpg"
                alt=""
              />
              <div className="flex justify-start gap-4">
                <div className="flex flex-col border-black border-2 rounded-sm items-center justify-center">
                  <div className="px-2 py-[10px]">
                    <span className="text-base font-medium">30 Thu</span>
                  </div>
                  <div className="bg-black h-[2px] w-full"></div>
                  <div className="px-2 py-2">
                    <img className="h-[25px]" src={fileIcon} alt="" />
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-3">
                  <span className="text-xl font-semibold font-raleway">
                    Contrary to popular
                  </span>
                  <div className="flex gap-3 items-center">
                    <span className="text-sm text-[#808080]">dtlmsele</span>|
                    <img
                      className="h-[12px] w-auto mt-[2px]"
                      src={markIcon}
                      alt=""
                    />
                    <span className="text-sm text-[#808080]">blog, chat</span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col p-[15px] gap-6">
              <img
                className="w-full h-full object-cover"
                src="https://dtlmselementor.wpengine.com/wp-content/uploads/2023/11/blog7.jpg"
                alt=""
              />
              <div className="flex justify-start gap-4">
                <div className="flex flex-col border-black border-2 rounded-sm items-center justify-center">
                  <div className="px-2 py-[10px]">
                    <span className="text-base font-medium">30 Thu</span>
                  </div>
                  <div className="bg-black h-[2px] w-full"></div>
                  <div className="px-2 py-2">
                    <img className="h-[25px]" src={fileIcon} alt="" />
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-3">
                  <span className="text-xl font-semibold font-raleway">
                    Omnis voluptas assumenda
                  </span>
                  <div className="flex gap-3 text-[#808080] items-center">
                    <span className="text-sm text-[#808080]">dtlmsele</span>|
                    <img
                      className="h-[12px] w-auto mt-[2px]"
                      src={markIcon}
                      alt=""
                    />
                    <span className="text-sm text-[#808080]">blog, chat</span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col p-[15px] gap-6">
              <img
                className="w-full h-full object-cover"
                src="https://dtlmselementor.wpengine.com/wp-content/uploads/2023/11/blog11.jpg"
                alt=""
              />
              <div className="flex justify-start gap-4">
                <div className="flex flex-col border-black border-2 rounded-sm items-center justify-center">
                  <div className="px-2 py-[10px]">
                    <span className="text-base font-medium">30 Thu</span>
                  </div>
                  <div className="bg-black h-[2px] w-full"></div>
                  <div className="px-2 py-2">
                    <img className="h-[25px]" src={fileIcon} alt="" />
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-3">
                  <span className="text-xl font-semibold font-raleway">
                    Piece of classical
                  </span>
                  <div className="flex gap-3 text-[#808080] items-center">
                    <span className="text-sm text-[#808080]">dtlmsele</span>|
                    <img
                      className="h-[12px] w-auto mt-[2px]"
                      src={markIcon}
                      alt=""
                    />
                    <span className="text-sm text-[#808080]">blog, chat</span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      <section>
        <div
          className="bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${parallaxImage})` }}
        >
          <div className="flex items-center justify-center py-[100px] container mx-auto max-w-[1300px] max-lg:flex-col max-lg:py-20 max-lg:gap-7">
            <div className="flex flex-1 w-full">
              <div className="flex flex-col items-center justify-center flex-1">
                <div className="bg-[#F2672E] rounded-full mb-4">
                  <img
                    className="h-[32px] w-[32px] m-[30px]"
                    src={htmlIcon}
                    alt=""
                  />
                </div>
                <span className="text-xl font-raleway">HTML</span>
              </div>
              <div className="flex flex-col items-center justify-center flex-1">
                <div className="bg-[#306FB5] rounded-full mb-4">
                  <img
                    className="h-[32px] w-[32px] m-[30px]"
                    src={cssIcon}
                    alt=""
                  />
                </div>
                <span className="text-xl font-raleway">CSS</span>
              </div>
              <div className="flex flex-col items-center justify-center flex-1">
                <div className="bg-[#A5BE51] rounded-full mb-4">
                  <img
                    className="h-[32px] w-[32px] m-[30px]"
                    src={androidIcon}
                    alt=""
                  />
                </div>
                <span className="text-xl font-raleway">Android</span>
              </div>
            </div>
            <div className="flex flex-1 w-full">
              <div className="flex flex-col items-center justify-center flex-1">
                <div className="bg-[#4989BB] rounded-full mb-4">
                  <img
                    className="h-[32px] w-[32px] m-[30px]"
                    src={paperplaneIcon}
                    alt=""
                  />
                </div>
                <span className="text-xl font-raleway">Photoshop</span>
              </div>
              <div className="flex flex-col items-center justify-center flex-1">
                <div className="bg-[#E5a329] rounded-full mb-4">
                  <img
                    className="h-[32px] w-[32px] m-[30px]"
                    src={paperplaneIcon}
                    alt=""
                  />
                </div>
                <span className="text-xl font-raleway">JQuery</span>
              </div>
              <div className="flex flex-col items-center justify-center flex-1">
                <div className="bg-[#C0281B] rounded-full mb-4">
                  <img
                    className="h-[32px] w-[32px] m-[30px]"
                    src={paperplaneIcon}
                    alt=""
                  />
                </div>
                <span className="text-xl font-raleway">Ruby</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-[70px] pb-[50px] container mx-auto max-w-[1300px] max-lg:px-5">
        <div className="flex justify-between pb-10">
          <div className="flex flex-col gap-1">
            <span className="text-[30px] font-raleway font-semibold">
              UPCOMING EVENTS
            </span>
            <div className="w-[40px] h-[4px] bg-[#838C48]"></div>
          </div>
          <div className="flex gap-4">
            <button className="flex h-[45px] w-[45px] bg-transparent border-black border-2 rounded-sm justify-center items-center">
              <img className="p-[16px]" src={lesserIcon} />
            </button>
            <button className="flex h-[45px] w-[45px] bg-transparent border-black border-2 rounded-sm justify-center items-center">
              <img className="p-[16px]" src={greaterIcon} />
            </button>
          </div>
        </div>
        <div className="flex gap-8 mx-w-[50%] pb-[20px]">
          <img
            className="max-w-[173px] h-auto"
            src="https://dtlmselementor.wpengine.com/wp-content/uploads/2023/11/event.jpg"
            alt=""
          />
          <div className="flex flex-col gap-5 text-sm text-[#808080] max-w-[350px]">
            <span className="text-xl text-black leading-none font-raleway font-medium">
              Welcoming 25th Batch
            </span>
            <div className="flex flex-col gap-2">
              <span className="text-[#808080]">
                December 12, 2024 @ 8:00 am - December 13, 2025 @ 5:00 pm
              </span>
              <span className="text-[#808080]">
                Peppard Hill, United States
              </span>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div
          className="bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url(https://dtlmselementor.wpengine.com/wp-content/uploads/2023/11/blog7.jpg)`,
          }}
        >
          <div className="py-[100px] bg-[rgba(218,133,61,0.9)] flex flex-col items-center justify-center">
            <div className="text-center flex flex-col gap-10 items-center justify-center container mx-auto max-w-[1300px]">
              <span className="text-3xl font-semibold text-white font-raleway">
                GET IN TOUCH WITH US
              </span>
              <p className="text-sm max-w-[1000px] text-white">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which Ipsum slightly
                believable
              </p>
              <div className="flex bg-white rounded-sm w-[561px]">
                <input
                  className="px-[14px] py-[20px] bg-transparent text-black w-full outline-none text-sm"
                  placeholder="Your Email Address"
                  type="text"
                />
                <button
                  className="bg-[#838C48] text-white rounded-l-none rounded-sm px-[24px] py-[18px] text-base"
                  onClick={() => {}}
                >
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto max-w-[1300px] px-5 py-[70px] flex flex-col gap-[50px] overflow-hidden">
        <div className="flex flex-col items-center gap-3">
          <span className="text-3xl font-raleway font-semibold">
            OUR PROCESS
          </span>
          <div className="w-[40px] h-[4px] bg-[#838C48]"></div>
        </div>
        <section>
          <Timeline
            title="Step 01"
            subtitle="Search for your course"
            icon={glassIcon}
            isLeft={true}
            isTop={true}
          />
          <Timeline
            title="Step 02"
            subtitle="Take a Sample Lesson"
            icon={monitorIcon}
          />
          <Timeline
            title="Step 03"
            subtitle="Preview the Syllabus"
            icon={listIcon}
            isLeft={true}
          />
          <Timeline
            title="Step 04"
            subtitle="Purchase the Course"
            icon={cart2Icon}
            isBot={true}
          />
        </section>
      </section>
    </main>
  );
};

export default Home;
