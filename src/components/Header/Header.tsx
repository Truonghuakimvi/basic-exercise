import { useEffect, useState } from "react";
import logo from "../../assets/images/lms-logo.png";
import cart from "../../assets/images/cart-icon.svg";
import userIcon from "../../assets/images/user-icon.svg";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`font-sans fixed top-0 left-0 w-full z-30 py-[20px] transition duration-300 ease-in-out ${
        isScrolled ? "bg-[#fcf6eb] shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="flex justify-center gap-8 tracking-wide">
        <img src={logo} alt="Logo" />
        <div className="flex items-center w-[994.5px] h-[99px] justify-end">
          <ul className="flex pr-[20px] items-center">
            <li className="py-[11px] px-[22px] text-sm font-medium border-2 border-black rounded-sm">
              <span>HOME</span>
            </li>
            <li className="py-2 px-[22px] text-sm font-medium">COURSES</li>
            <li className="py-2 px-[22px] text-sm font-medium">PAGES</li>
            <li className="py-2 px-[22px] text-sm font-medium">BLOG</li>
            <li className="py-2 px-[22px] text-sm font-medium">GALLERY</li>
            <li className="py-2 px-[22px] text-sm font-medium">SHOP</li>
            <li className="py-2 px-[22px] text-sm font-medium">CONTACT</li>
          </ul>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="h-[40px] w-[40px] border-black border-2 flex items-center rounded-[3px]">
                <img
                  className="mx-[12.25px] my-[14px]"
                  src={userIcon}
                  alt="User Icon"
                />
              </div>
              <span className="text-sm font-medium">Login</span>
              <span className="text-sm font-medium">|</span>
              <span className="text-sm font-medium">Register</span>
            </div>
            <div className="h-[35px] w-[35px]">
              <img
                className="mx-[10.5px] my-[11.281px]"
                src={cart}
                alt="Cart Icon"
              />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
