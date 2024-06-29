import { useEffect, useState } from "react";
import logo from "../../assets/images/lms-logo.png";
import cart from "../../assets/images/cart-icon.svg";
import userIcon from "../../assets/images/user-icon.svg";
import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = location.pathname === "/";

  return (
    <header
      className={`flex justify-center top-0 left-0 w-full z-30 py-[20px] transition duration-300 ease-in-out fixed ${
        isHome
          ? isScrolled && "bg-[#fdf6ea] shadow-md"
          : "bg-[#fdf6ea] shadow-md"
      }`}
    >
      <nav className="flex w-full justify-between gap-8 tracking-wide container mx-auto max-w-[1300px]">
        <img src={logo} alt="Logo" />
        <div className="flex items-center h-[99px] justify-end">
          <ul className="flex pr-[20px] items-center">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `py-3 px-[22px] text-sm text-[#303030] border-2 rounded-sm font-semibold ${
                    isActive ? "border-black" : "border-transparent"
                  } hover:text-current`
                }
              >
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/course"
                className={({ isActive }) =>
                  `py-3 px-[22px] text-sm text-[#303030] border-2 rounded-sm font-semibold ${
                    isActive ? "border-black" : "border-transparent"
                  } hover:text-current`
                }
              >
                COURSE
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/pages"
                className={({ isActive }) =>
                  `py-3 px-[22px] text-sm text-[#303030] border-2 rounded-sm font-semibold ${
                    isActive ? "border-black" : "border-transparent"
                  } hover:text-current`
                }
              >
                PAGES
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  `py-3 px-[22px] text-sm text-[#303030] border-2 rounded-sm font-semibold ${
                    isActive ? "border-black" : "border-transparent"
                  } hover:text-current`
                }
              >
                BLOG
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/gallery"
                className={({ isActive }) =>
                  `py-3 px-[22px] text-sm text-[#303030] border-2 rounded-sm font-semibold ${
                    isActive ? "border-black" : "border-transparent"
                  } hover:text-current`
                }
              >
                GALLERY
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/shop"
                className={({ isActive }) =>
                  `py-3 px-[22px] text-sm text-[#303030] border-2 rounded-sm font-semibold ${
                    isActive ? "border-black" : "border-transparent"
                  } hover:text-current`
                }
              >
                SHOP
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `py-3 px-[22px] text-sm text-[#303030] border-2 rounded-sm font-semibold ${
                    isActive ? "border-black" : "border-transparent"
                  } hover:text-current`
                }
              >
                CONTACT
              </NavLink>
            </li>
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
              <span className="text-sm font-semibold text-black">Login</span>
              <span className="text-sm font-semibold text-black">|</span>
              <span className="text-sm font-semibold text-black">Register</span>
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
