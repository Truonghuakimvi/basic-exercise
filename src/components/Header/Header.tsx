import { useEffect, useState } from "react";
import logo from "../../assets/images/lms-logo.png";
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
              <div className="flex items-center gap-2 group">
                <div className="h-[40px] w-[40px] border-black border-2 rounded-[3px] p-[11px] group-hover:border-[#da853d] transition duration-[400ms]">
                  <svg
                    className="w-full h-full group-hover:fill-[#da853d] transition duration-[400ms]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                  </svg>
                </div>
                <span className="text-sm font-semibold text-black group-hover:text-[#da853d] transition duration-[400ms]">
                  Login
                </span>
              </div>
              <span className="text-sm font-semibold text-black">|</span>
              <span className="text-sm font-semibold text-black hover:text-[#da853d] transition duration-[400ms]">
                Register
              </span>
            </div>
            <div className="h-[35px] w-[35px] p-[10px]">
              <svg
                className="w-full h-full hover:fill-[#da853d] transition duration-[400ms]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
              </svg>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
