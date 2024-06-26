import bgImage from "../../assets/images/fullscreen-slider.jpg";
import arrowIcon from "../../assets/images/arrow-icon.svg";
import topicIcon from "../../assets/images/topic-icon.svg";
import topicIcon2 from "../../assets/images/topic2-icon.svg";
import topicIcon3 from "../../assets/images/topic3-icon.svg";
import topicIcon4 from "../../assets/images/topic4-icon.svg";
import greaterIcon from "../../assets/images/greater-icon.svg";
import lesserIcon from "../../assets/images/lesser-icon.svg";
import clockIcon from "../../assets/images/clock-icon.svg";

const Home = () => {
  return (
    <main className="flex flex-col">
      <section className="relative">
        <div className="flex flex-col h-[30%] w-full bg-gradient-to-t from-[rgba(243,234,216,0)] to-[#f9edd7] absolute top-0 left-0 z-10"></div>
        <img className="self-start w-full" src={bgImage} alt="" />
        <div className="absolute inset-0 flex items-end justify-center z-20 pb-[150px] w-full">
          <div className="text-center text-white flex flex-col items-center gap-24 w-full">
            <section className="flex flex-col gap-6">
              <div className="flex bg-white rounded-3xl w-[468px]">
                <input
                  className="px-6 bg-transparent text-black w-full outline-none"
                  placeholder="Keywords"
                  type="text"
                />
                <button
                  className="bg-[#818853] text-white rounded-3xl px-[20px] py-[12px]"
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
                  <p className="text-xl text-[#818853] font-medium leading-none pb-1">
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
            <section className="flex gap-36 text-[#2b2b2b] w-full px-80 justify-center">
              <div className="flex flex-col items-center gap-3 p-[10px] flex-1">
                <h1 className="font-extrabold text-responsive font-raleway leading-tight">
                  332
                </h1>
                <span className="h-[3px] w-[130px] bg-[#818853]"></span>
                <h5 className="text-xl font-medium">Courses</h5>
              </div>
              <div className="flex flex-col items-center gap-3 p-[10px] flex-1">
                <h1 className="font-extrabold text-responsive font-raleway leading-tight">
                  1403
                </h1>
                <span className="h-[3px] w-[130px] bg-[#818853]"></span>
                <h5 className="text-xl font-medium">Members</h5>
              </div>
              <div className="flex flex-col items-center gap-3 p-[10px] flex-1">
                <h1 className="font-extrabold text-responsive font-raleway leading-tight">
                  60
                </h1>
                <span className="h-[3px] w-[130px] bg-[#818853]"></span>
                <h5 className="text-xl font-medium">Authors</h5>
              </div>
              <div className="flex flex-col items-center gap-3 p-[10px] flex-1">
                <h1 className="font-extrabold text-responsive font-raleway leading-tight">
                  120
                </h1>
                <span className="h-[3px] w-[130px] bg-[#818853]"></span>
                <h5 className="text-xl font-medium">Subjects</h5>
              </div>
            </section>
          </div>
        </div>
      </section>
      <section className="flex py-[70px] justify-center items-center">
        <div className="flex w-full mx-60">
          <div className="flex flex-col items-center justify-center gap-4 flex-1">
            <div className="bg-[#F3E9D6] rounded-full h-[150px] w-[150px]">
              <img className="p-8" src={topicIcon} alt="" />
            </div>
            <span className="text-xl">Best Stimulations</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 flex-1">
            <div className="bg-[#F3E9D6] rounded-full h-[150px] w-[150px]">
              <img className="p-8" src={topicIcon2} alt="" />
            </div>
            <span className="text-xl">Group Seminars</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 flex-1">
            <div className="bg-[#F3E9D6] rounded-full h-[150px] w-[150px]">
              <img className="p-8" src={topicIcon3} alt="" />
            </div>
            <span className="text-xl">Analysed Syllabus</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 flex-1">
            <div className="bg-[#F3E9D6] rounded-full h-[150px] w-[150px]">
              <img className="p-8" src={topicIcon4} alt="" />
            </div>
            <span className="text-xl">Pratical Training</span>
          </div>
        </div>
      </section>
      <section className="flex flex-col mx-[16.4%]">
        <div className="flex justify-between pb-10">
          <div className="flex flex-col gap-1">
            <span className="text-[30px] font-raleway font-semibold">
              COURSES
            </span>
            <div className="w-[40px] h-[4px] bg-[#818853]"></div>
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
        <div className="flex gap-6">
          <div className="flex flex-col gap-6 items-start max-w-[374px]">
            <span className="text-2xl font-medium">About Courses</span>
            <p className="text-gray-500">
              Student Registration and Administration Nemo enim ipsam voluptatem
              quia voluptas sit atur aut odit aut fugit, sed quia consequuntur
              magni res eos qui ratione voluptatem sequi nesciunt.
              <br />
              <br />
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised believable.
            </p>
            <button className="bg-transparent hover:bg-[#818853] transition duration-[400ms] hover:text-white hover:border-[#818853] border-2 border-black px-[21px] py-[9.8px] rounded-sm">
              VIEW ALL COURSES
            </button>
          </div>
          <div className="flex gap-6 pb-[30px]">
            <div className="flex flex-col gap-3 whitespace-nowrap overflow-hidden">
              <img
                src="https://dtlmselementor.wpengine.com/wp-content/uploads/2017/11/Courses-listing-image-6.jpg"
                alt=""
              />
              <span className="text-2xl text-[#e0934f] font-medium">Free</span>
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
            <div className="flex flex-col gap-3 whitespace-nowrap overflow-hidden">
              <img
                src="https://dtlmselementor.wpengine.com/wp-content/uploads/2017/11/Courses-listing-image-7.jpg"
                alt=""
              />
              <span className="text-2xl text-[#e0934f] font-medium">$40</span>
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
    </main>
  );
};

export default Home;
