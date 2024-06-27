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

const Home = () => {
  return (
    <main className="flex flex-col">
      <section className="relative">
        <div className="flex flex-col h-[30%] w-full bg-gradient-to-t from-[rgba(243,234,216,0)] to-[#f9edd7] absolute top-0 left-0 z-10"></div>
        <img className="self-start w-full" src={bgImage} alt="" />
        <div className="absolute inset-0 flex items-end justify-center z-20 pb-[150px] w-full">
          <div className="text-center text-white flex flex-col items-center gap-24 w-full container mx-auto">
            <section className="flex flex-col gap-6">
              <div className="flex bg-white rounded-3xl w-[468px]">
                <input
                  className="px-6 bg-transparent text-black w-full outline-none"
                  placeholder="Keywords"
                  type="text"
                />
                <button
                  className="bg-[#838c48] text-white rounded-3xl px-[20px] py-[12px]"
                  onClick={() => {}}
                >
                  Search
                </button>
              </div>
              <div className="flex flex-col gap-4">
                <h1 className="text-xl font-medium mb-4 text-black italic">
                  We have the largest collection of courses
                </h1>
                <div className="flex justify-center items-center gap-2">
                  <p className="text-xl text-[#838c48] font-medium leading-none pb-1">
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
            <section className="flex text-[#303030] w-full justify-center">
              <div className="flex flex-col items-center gap-3 p-[10px] flex-1">
                <h1 className="font-extrabold text-responsive font-raleway leading-tight">
                  332
                </h1>
                <span className="h-[3px] w-[130px] bg-[#838c48]"></span>
                <h5 className="text-xl font-medium">Courses</h5>
              </div>
              <div className="flex flex-col items-center gap-3 p-[10px] flex-1">
                <h1 className="font-extrabold text-responsive font-raleway leading-tight">
                  1403
                </h1>
                <span className="h-[3px] w-[130px] bg-[#838c48]"></span>
                <h5 className="text-xl font-medium">Members</h5>
              </div>
              <div className="flex flex-col items-center gap-3 p-[10px] flex-1">
                <h1 className="font-extrabold text-responsive font-raleway leading-tight">
                  60
                </h1>
                <span className="h-[3px] w-[130px] bg-[#838c48]"></span>
                <h5 className="text-xl font-medium">Authors</h5>
              </div>
              <div className="flex flex-col items-center gap-3 p-[10px] flex-1">
                <h1 className="font-extrabold text-responsive font-raleway leading-tight">
                  120
                </h1>
                <span className="h-[3px] w-[130px] bg-[#838c48]"></span>
                <h5 className="text-xl font-medium">Subjects</h5>
              </div>
            </section>
          </div>
        </div>
      </section>
      <section className="flex py-[70px] justify-center items-center">
        <div className="flex w-full container mx-auto">
          <div className="flex flex-col items-center justify-center gap-4 flex-1">
            <div className="bg-[#F5E9D4] rounded-full h-[150px] w-[150px]">
              <img className="p-8" src={topicIcon} alt="" />
            </div>
            <span className="text-xl">Best Stimulations</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 flex-1">
            <div className="bg-[#F5E9D4] rounded-full h-[150px] w-[150px]">
              <img className="p-8" src={topicIcon2} alt="" />
            </div>
            <span className="text-xl">Group Seminars</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 flex-1">
            <div className="bg-[#F5E9D4] rounded-full h-[150px] w-[150px]">
              <img className="p-8" src={topicIcon3} alt="" />
            </div>
            <span className="text-xl">Analysed Syllabus</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 flex-1">
            <div className="bg-[#F5E9D4] rounded-full h-[150px] w-[150px]">
              <img className="p-8" src={topicIcon4} alt="" />
            </div>
            <span className="text-xl">Pratical Training</span>
          </div>
        </div>
      </section>
      <section className="flex flex-col container mx-auto">
        <div className="flex justify-between pb-10">
          <div className="flex flex-col gap-1">
            <span className="text-[30px] font-raleway font-semibold">
              COURSES
            </span>
            <div className="w-[40px] h-[4px] bg-[#838c48]"></div>
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
        <div className="flex gap-6 justify-center">
          <div className="flex flex-col gap-6 items-start max-w-[390px] flex-shrink-0">
            <span className="text-2xl font-medium">About Courses</span>
            <p className="text-[#808080]">
              Student Registration and Administration Nemo enim ipsam voluptatem
              quia voluptas sit atur aut odit aut fugit, sed quia consequuntur
              magni res eos qui ratione voluptatem sequi nesciunt.
              <br />
              <br />
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised believable.
            </p>
            <div className="flex flex-1 justify-center items-start">
              <button className="bg-transparent hover:bg-[#838c48] transition duration-[400ms] hover:text-white hover:border-[#838c48] border-2 border-black px-[21px] py-[9.8px] rounded-sm">
                VIEW ALL COURSES
              </button>
            </div>
          </div>
          <div className="flex gap-6 pb-[30px] flex-1">
            <div className="flex flex-col gap-3 whitespace-nowrap overflow-hidden flex-1">
              <img
                src="https://dtlmselementor.wpengine.com/wp-content/uploads/2017/11/Courses-listing-image-6.jpg"
                alt=""
              />
              <span className="text-2xl text-[#da853d] font-medium">Free</span>
              <span className="font-raleway text-xl font-medium">
                Emerging Trends and Technologies
              </span>
              <div className="flex gap-2 text-[#777777]">
                <span>Engineering</span>|<span>4 Curriculum</span>
              </div>
              <div className="bg-black h-[2px]"></div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <img className="h-[15px] w-[15px]" src={clockIcon} alt="" />
                  <span className="font-raleway">1m 17d 3h</span>
                </div>
                <span>4 votes, average: 3.00 out of 5, rated</span>
              </div>
            </div>
            <div className="flex flex-col gap-3 whitespace-nowrap overflow-hidden flex-1">
              <img
                src="https://dtlmselementor.wpengine.com/wp-content/uploads/2017/11/Courses-listing-image-7.jpg"
                alt=""
              />
              <span className="text-2xl text-[#da853d] font-medium">$40</span>
              <span className="font-raleway text-xl font-medium">
                Fitness Training Program
              </span>
              <div className="flex gap-2 text-[#777777]">
                <span>Health</span>|<span>7 Curriculum</span>
              </div>
              <div className="bg-black h-[2px]"></div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <img className="h-[15px] w-[15px]" src={clockIcon} alt="" />
                  <span className="font-raleway">1m 5d 50h</span>
                </div>
                <span>4 votes, average: 3.00 out of 5, rated</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex gap-5 justify-center pt-[60px] pb-8 container mx-auto">
        <div className="flex-1">
          <img
            className="w-full h-auto"
            src="https://dtlmselementor.wpengine.com/wp-content/uploads/2023/11/lms-banner1.jpg"
            alt=""
          />
        </div>
        <div className="flex-1">
          <img
            className="w-full h-auto"
            src="https://dtlmselementor.wpengine.com/wp-content/uploads/2023/11/lms-banner2.jpg"
            alt=""
          />
        </div>
        <div className="flex-1">
          <img
            className="w-full h-auto"
            src="https://dtlmselementor.wpengine.com/wp-content/uploads/2023/11/lms-banner3.jpg"
            alt=""
          />
        </div>
      </section>
      <section className="flex flex-col  pt-[60px] pb-[70px] container mx-auto">
        <div className="flex flex-col justify-center items-center gap-3 pb-[40px]">
          <span className="text-3xl font-medium">BLOG</span>
          <div className="w-[40px] h-[4px] bg-[#838c48]"></div>
        </div>
        <div className="flex justify-center items-center gap-2">
          <div className="flex flex-col flex-1 p-[15px] gap-6">
            <img
              className="w-full h-full object-cover"
              src="https://dtlmselementor.wpengine.com/wp-content/uploads/2023/11/blog12.jpg"
              alt=""
            />
            <div className="flex justify-start gap-4">
              <div className="flex flex-col border-black border-2 rounded-sm items-center justify-center">
                <div className="px-2 py-[10px]">
                  <span className="text-base">30 Thu</span>
                </div>
                <div className="bg-black h-[2px] w-full"></div>
                <div className="px-2 py-2">
                  <img className="h-[25px]" src={fileIcon} alt="" />
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-2">
                <span className="text-xl font-medium">Contrary to popular</span>
                <div className="flex gap-3 text-[#808080] items-center">
                  <span>dtlmsele</span>|
                  <img
                    className="h-[15px] w-auto mt-[2px]"
                    src={markIcon}
                    alt=""
                  />
                  <span>blog, chat</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-1 p-[15px] gap-6">
            <img
              className="w-full h-full object-cover"
              src="https://dtlmselementor.wpengine.com/wp-content/uploads/2023/11/blog7.jpg"
              alt=""
            />
            <div className="flex justify-start gap-4">
              <div className="flex flex-col border-black border-2 rounded-sm items-center justify-center">
                <div className="px-2 py-[10px]">
                  <span className="text-base">30 Thu</span>
                </div>
                <div className="bg-black h-[2px] w-full"></div>
                <div className="px-2 py-2">
                  <img className="h-[25px]" src={fileIcon} alt="" />
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-2">
                <span className="text-xl font-medium">
                  Omnis voluptas assumenda
                </span>
                <div className="flex gap-3 text-[#808080] items-center">
                  <span>dtlmsele</span>|
                  <img
                    className="h-[15px] w-auto mt-[2px]"
                    src={markIcon}
                    alt=""
                  />
                  <span>blog, chat</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-1 p-[15px] gap-6">
            <img
              className="w-full h-full object-cover"
              src="https://dtlmselementor.wpengine.com/wp-content/uploads/2023/11/blog11.jpg"
              alt=""
            />
            <div className="flex justify-start gap-4">
              <div className="flex flex-col border-black border-2 rounded-sm items-center justify-center">
                <div className="px-2 py-[10px]">
                  <span className="text-base">30 Thu</span>
                </div>
                <div className="bg-black h-[2px] w-full"></div>
                <div className="px-2 py-2">
                  <img className="h-[25px]" src={fileIcon} alt="" />
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-2">
                <span className="text-xl font-medium">Piece of classical</span>
                <div className="flex gap-3 text-[#808080] items-center">
                  <span>dtlmsele</span>|
                  <img
                    className="h-[15px] w-auto mt-[2px]"
                    src={markIcon}
                    alt=""
                  />
                  <span>blog, chat</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div
          className="bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${parallaxImage})` }}
        >
          <div className="flex items-center justify-center py-[100px] gap-10 container mx-auto flex-wrap">
            <div className="flex flex-col items-center justify-center p-8">
              <div className="bg-[#E1703F] rounded-full mb-4">
                <img
                  className="h-[32px] w-[32px] m-[30px]"
                  src={htmlIcon}
                  alt=""
                />
              </div>
              <span className="text-xl">HTML</span>
            </div>
            <div className="flex flex-col items-center justify-center p-8">
              <div className="bg-[#306FB5] rounded-full mb-4">
                <img
                  className="h-[32px] w-[32px] m-[30px]"
                  src={cssIcon}
                  alt=""
                />
              </div>
              <span className="text-xl">CSS</span>
            </div>
            <div className="flex flex-col items-center justify-center p-8">
              <div className="bg-[#A5BE51] rounded-full mb-4">
                <img
                  className="h-[32px] w-[32px] m-[30px]"
                  src={androidIcon}
                  alt=""
                />
              </div>
              <span className="text-xl">Android</span>
            </div>
            <div className="flex flex-col items-center justify-center p-8">
              <div className="bg-[#4989BB] rounded-full mb-4">
                <img
                  className="h-[32px] w-[32px] m-[30px]"
                  src={paperplaneIcon}
                  alt=""
                />
              </div>
              <span className="text-xl">Photoshop</span>
            </div>
            <div className="flex flex-col items-center justify-center p-8">
              <div className="bg-[#DBA645] rounded-full mb-4">
                <img
                  className="h-[32px] w-[32px] m-[30px]"
                  src={paperplaneIcon}
                  alt=""
                />
              </div>
              <span className="text-xl">JQuery</span>
            </div>
            <div className="flex flex-col items-center justify-center p-8">
              <div className="bg-[#C0281B] rounded-full mb-4">
                <img
                  className="h-[32px] w-[32px] m-[30px]"
                  src={paperplaneIcon}
                  alt=""
                />
              </div>
              <span className="text-xl">Ruby</span>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-[70px] pb-[50px] container mx-auto">
        <div className="flex justify-between pb-10">
          <div className="flex flex-col gap-1">
            <span className="text-[30px] font-raleway font-semibold">
              UPCOMING EVENTS
            </span>
            <div className="w-[40px] h-[4px] bg-[#838c48]"></div>
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
          <div className="flex flex-col gap-5 text-sm text-[#808080]">
            <span className="text-xl text-black leading-none">
              Welcoming 25th Batch
            </span>
            <span>
              December 12, 2024 @ 8:00 am - December 13, 2025 @ 5:00 pm
            </span>
            <span>Peppard Hill, United States</span>
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
          <div className="py-[100px] bg-[rgba(218,133,61,0.9)] flex flex-col items-center justify-center text-white">
            <div className="text-center flex flex-col gap-10 items-center justify-center container mx-auto">
              <span className="text-3xl font-medium">GET IN TOUCH WITH US</span>
              <p className="text-sm max-w-[1000px]">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which Ipsum slightly
                believable
              </p>
              <div className="flex bg-white rounded-sm w-[561px]">
                <input
                  className="px-6 bg-transparent text-black w-full outline-none"
                  placeholder="Your Email Address"
                  type="text"
                />
                <button
                  className="bg-[#838c48] text-white rounded-sm px-[24px] py-[18px] text-base"
                  onClick={() => {}}
                >
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="h-[1000px]"></div>
      </section>
    </main>
  );
};

export default Home;
