import logo from "../../assets/images/lms-logo.png";
import mailIcon from "../../assets/images/mail-icon.svg";
import phoneIcon from "../../assets/images/phone-icon.svg";
import phone2Icon from "../../assets/images/tablephone-icon.svg";
import arrowIcon from "../../assets/images/arrow2-icon.svg";
import twitter from "../../assets/images/twitter.svg";
import facebook from "../../assets/images/facebook.svg";
import youtube from "../../assets/images/youtube.svg";
import skype from "../../assets/images/skype.svg";
import arrowIcon2 from "../../assets/images/arrow3-icon.svg";

const Footer = () => {
  return (
    <footer>
      <section className="flex flex-col bg-[#f5e9d4] justify-center items-center mt-[60px]">
        <div className="flex justify-center">
          <div className="mt-[-55px] bg-[#fdf6ea] rounded-full">
            <img className="p-2" src={logo} alt="" />
          </div>
        </div>
        <div className="flex py-[60px] container mx-auto max-w-[1300px] justify-center gap-6 max-lg:px-5 max-lg:flex-col">
          <div className="flex flex-col gap-4 items-start max-lg:items-center">
            <span className="text-xl font-raleway font-medium">About Us</span>
            <div className="flex flex-col gap-3 max-w-[270px] max-lg:max-w-full max-lg:text-center">
              <p className="text-[#808080] text-sm leading-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                lobortis diam.
              </p>
              <p className="text-[#808080] text-sm leading-6">
                Duis tellus enim, vestibulum eget varius id, vulputate et mi.
                Nullam feugiat, diam quis interdum varius
              </p>
            </div>
            <div className="flex flex-1 justify-center items-start">
              <button
                className="text-sm font-bold bg-transparent text-[#838c48] hover:bg-[#838c48] transition duration-[400ms]
               hover:text-white hover:border-[#838c48] border-2 border-[#838c48] px-[21px] py-[9.8px] rounded-sm"
              >
                START LEARNING NOW
              </button>
            </div>
          </div>
          <div className="flex gap-6 flex-1">
            <div className="flex flex-col gap-4 text-base flex-1">
              <span className="text-xl font-raleway font-medium">
                Popular Courses
              </span>
              <div className="flex flex-col gap-2">
                <div className="flex flex-col">
                  <span className="font-raleway font-medium text-black">
                    Power Electronics
                  </span>
                  <span className="text-[#838c48] font-medium">Free</span>
                </div>
                <hr className="h-[2px] bg-[#e7cda0]"></hr>
                <div className="flex flex-col">
                  <span className="font-raleway font-medium text-black">
                    Introduction to Calculus
                  </span>
                  <span className="text-[#838c48] font-medium">Free</span>
                </div>
                <hr className="h-[2px] bg-[#e7cda0]"></hr>
                <div className="flex flex-col">
                  <span className="font-raleway font-medium text-black">
                    Basic Laws and Policies
                  </span>
                  <span className="text-[#838c48] font-medium">Free</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 text-base flex-1">
              <span className="text-xl font-raleway font-medium">
                Quick Links
              </span>
              <ul className="flex flex-col gap-3 text-sm">
                <li className="flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <img className="h-[8px] w-auto" src={arrowIcon2} alt="" />
                    <span className="text-[#808080]">All Courses</span>
                  </div>
                  <hr className="h-[2px] bg-[#e7cda0]"></hr>
                </li>
                <li className="flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <img className="h-[8px] w-auto" src={arrowIcon2} alt="" />
                    <span className="text-[#808080]">Summer Sessions</span>
                  </div>
                  <hr className="h-[2px] bg-[#e7cda0]"></hr>
                </li>
                <li className="flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <img className="h-[8px] w-auto" src={arrowIcon2} alt="" />
                    <span className="text-[#808080]">Professional Courses</span>
                  </div>
                  <hr className="h-[2px] bg-[#e7cda0]"></hr>
                </li>
                <li className="flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <img className="h-[8px] w-auto" src={arrowIcon2} alt="" />
                    <span className="text-[#808080]">Privacy Policy</span>
                  </div>
                  <hr className="h-[2px] bg-[#e7cda0]"></hr>
                </li>
                <li className="flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <img className="h-[8px] w-auto" src={arrowIcon2} alt="" />
                    <span className="text-[#808080]">Terms of Use</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-4 text-base flex-1">
              <span className="text-xl font-raleway font-medium">
                Contact Us
              </span>
              <ul className="flex flex-col gap-3 text-sm max-w-[200px]">
                <li className="flex flex-col gap-3">
                  <div className="flex gap-2 items-start">
                    <img className="h-[16px] w-[16px]" src={arrowIcon} alt="" />
                    <span className="leading-[22px] text-[#808080]">
                      The Design Themes Inc. Mary Jane St, Sydney 2233
                      Australia.
                    </span>
                  </div>
                  <hr className="h-[2px] bg-[#e7cda0]"></hr>
                </li>
                <li className="flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <img className="h-[16px] w-[16px]" src={phoneIcon} alt="" />
                    <span className="text-[#808080]">{`+11 (2) 7654 2233`}</span>
                  </div>
                  <hr className="h-[2px] bg-[#e7cda0]"></hr>
                </li>
                <li className="flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <img
                      className="h-[16px] w-[16px]"
                      src={phone2Icon}
                      alt=""
                    />
                    <span className="text-[#808080]">{`+11 (5) 7654 2244`}</span>
                  </div>
                  <hr className="h-[2px] bg-[#e7cda0]"></hr>
                </li>
                <li className="flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <img className="h-[16px] w-[16px]" src={mailIcon} alt="" />
                    <span className="text-[#808080]">lms@gmail.com</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="text-white bg-[#838c48] py-5 max-lg:px-5">
        <div className="flex py-[10px] justify-between items-center container mx-auto max-w-[1300px]">
          <div className="flex gap-2 items-center">
            <span className="text-sm text-white">
              Copyright © 2020 LMS Theme All Rights Reserved
            </span>
            <div className="bg-white h-[17.625px] w-[2px]"></div>
            <span className="text-sm text-white">Design Themes</span>
          </div>
          <div className="flex gap-6">
            <img className="h-[18px] w-auto" src={twitter} alt="" />
            <img className="h-[18px] w-auto" src={youtube} alt="" />
            <img className="h-[18px] w-auto" src={facebook} alt="" />
            <img className="h-[18px] w-auto" src={skype} alt="" />
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
