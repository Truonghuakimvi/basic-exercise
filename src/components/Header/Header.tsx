import { useEffect, useState } from "react";
import logo from "../../assets/images/lms-logo.png";
import { NavLink, useLocation } from "react-router-dom";
import Hamburger from "hamburger-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const [isOpen, setOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<number | null>(null);
  const isHome = location.pathname === "/";

  const sidebarItems = [
    {
      title: "Home",
      items: [{ name: "Home" }, { name: "Home II" }],
    },
    {
      title: "Courses",
      items: [{ name: "Courses" }, { name: "Courses-Template" }],
    },
    {
      title: "Pages",
      items: [{ name: "Pages" }, { name: "BuddyPress" }],
    },
    {
      title: "Blog",
      items: [{ name: "Blog" }, { name: "I Column" }],
    },
    {
      title: "Gallery",
      items: [{ name: "Gallery" }, { name: "I Column" }],
    },
    {
      title: "Shop",
      items: [{ name: "Shop" }, { name: "Popular Products" }],
    },
    {
      title: "Contact",
      items: [
        { name: "Contact" },
        { name: "Contact - layout-2" },
        { name: "Contact - layout-3" },
      ],
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubMenuToggle = (index: number) => {
    setOpenSubMenu(openSubMenu === index ? null : index);
  };

  return (
    <>
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 z-40 ${
          isOpen ? "opacity-50" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      ></div>
      <header
        className={`flex justify-center fixed top-0 left-0 w-full z-30 py-[20px] transition duration-300 ease-in-out ${
          isHome
            ? isScrolled && "bg-[#fdf6ea] shadow-md"
            : "bg-[#fdf6ea] shadow-md"
        }`}
      >
        <nav className="flex w-full justify-center max-xl:justify-between max-xl:px-5 gap-[134px] container mx-auto max-w-[1300px]">
          <img src={logo} alt="Logo" />
          <div className="flex items-center h-[99px] justify-end">
            <div className="flex items-center xl:hidden pr-[16px]">
              <Hamburger size={23} toggled={isOpen} toggle={setOpen} />
              <span className="text-[18px] max-lg:hidden">Menu</span>
            </div>
            <ul className="flex pr-[20px] items-center max-xl:hidden">
              <li className="relative group">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `py-3 px-[21px] text-sm text-[#303030] border-2 rounded-sm font-semibold ${
                      isActive ? "border-black" : "border-transparent"
                    } hover:text-[#da853d] transition duration-300`
                  }
                >
                  HOME
                </NavLink>
                <div
                  className="absolute left-1/2 transform -translate-x-1/2 pb-2 mt-[3px] group-hover:opacity-100 opacity-0 
              transition duration-300 w-full flex justify-center"
                >
                  <svg
                    className="h-[20px] w-[20px]"
                    overflow="visible"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                  >
                    <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"></path>
                  </svg>
                </div>
                <ul
                  className="absolute left-0 mt-7 w-48 2xl:w-52 bg-[#fdf6ea] border-t-[3px] border-[#e2d6c1] shadow-lg p-4 
              opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto"
                >
                  <li>
                    <NavLink
                      to="/subpage"
                      className="block px-4 py-3 rounded-[3px] text-sm text-[#303030] hover:bg-[#F3E9D6] 
                    hover:text-[#303030] font-raleway font-normal transition duration-300"
                    >
                      Home II
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/subpage"
                      className="block px-4 py-3 rounded-[3px] text-sm text-[#303030] hover:bg-[#F3E9D6] 
                    hover:text-[#303030] font-raleway font-normal transition duration-300"
                    >
                      Home – Landing Page
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/subpage"
                      className="block px-4 py-3 rounded-[3px] text-sm text-[#303030] hover:bg-[#F3E9D6] 
                    hover:text-[#303030] font-raleway font-normal transition duration-300"
                    >
                      Home – Subscription
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/subpage"
                      className="block px-4 py-3 rounded-[3px] text-sm text-[#303030] hover:bg-[#F3E9D6] 
                    hover:text-[#303030] font-raleway font-normal transition duration-300"
                    >
                      Home – Course-Search
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/subpage"
                      className="block px-4 py-3 rounded-[3px] text-sm text-[#303030] hover:bg-[#F3E9D6] 
                    hover:text-[#303030] font-raleway font-normal transition duration-300"
                    >
                      Zoom Meeting
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/subpage"
                      className="block px-4 py-3 rounded-[3px] text-sm text-[#303030] hover:bg-[#F3E9D6] 
                    hover:text-[#303030] font-raleway font-normal transition duration-300"
                    >
                      Home – kids
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/subpage"
                      className="block px-4 py-3 rounded-[3px] text-sm text-[#303030] hover:bg-[#F3E9D6] 
                    hover:text-[#303030] font-raleway font-normal transition duration-300"
                    >
                      Points System
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="relative group">
                <NavLink
                  to="/courses"
                  className={({ isActive }) =>
                    `py-3 px-[21px] text-sm text-[#303030] border-2 rounded-sm font-semibold ${
                      isActive ? "border-black" : "border-transparent"
                    } hover:text-[#da853d] transition duration-300`
                  }
                >
                  COURSES
                </NavLink>
                <div
                  className="absolute left-1/2 transform -translate-x-1/2 pb-2 mt-[3px] group-hover:opacity-100 opacity-0 
              transition duration-300 w-full flex justify-center"
                >
                  <svg
                    className="h-[20px] w-[20px]"
                    overflow="visible"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                  >
                    <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"></path>
                  </svg>
                </div>
                <ul
                  className="absolute left-0 mt-7 w-48 bg-[#fdf6ea] border-t-[3px] border-[#e2d6c1] shadow-lg 
              p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto"
                >
                  <li>
                    <NavLink
                      to="/courses-template"
                      className="block px-4 py-3 rounded-[3px] text-sm text-[#303030] hover:bg-[#F3E9D6] 
                    hover:text-[#303030] font-raleway font-normal transition duration-300"
                    >
                      Courses-Template
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/subpage"
                      className="block px-4 py-3 rounded-[3px] text-sm text-[#303030] hover:bg-[#F3E9D6] 
                    hover:text-[#303030] font-raleway font-normal transition duration-300"
                    >
                      Lessons
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/subpage"
                      className="block px-4 py-3 rounded-[3px] text-sm text-[#303030] hover:bg-[#F3E9D6] 
                    hover:text-[#303030] font-raleway font-normal transition duration-300"
                    >
                      Search-Course
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/subpage"
                      className="block px-4 py-3 rounded-[3px] text-sm text-[#303030] hover:bg-[#F3E9D6] 
                    hover:text-[#303030] font-raleway font-normal transition duration-300"
                    >
                      Membership
                    </NavLink>
                  </li>
                  <li className="relative group/sub">
                    <NavLink
                      to="/subpage"
                      className="block px-4 py-3 rounded-[3px] text-sm text-[#303030] hover:bg-[#F3E9D6] 
                    hover:text-[#303030] font-raleway font-normal transition duration-300"
                    >
                      Courses Detail
                    </NavLink>
                    <ul
                      className="absolute left-full top-0 mt-0 w-48 bg-[#fdf6ea] border-t-[3px] border-[#e2d6c1] 
                  shadow-lg p-4 opacity-0 group-hover/sub:opacity-100 transition duration-300"
                    >
                      <li>
                        <NavLink
                          to="/subpage"
                          className="block px-4 py-3 rounded-[3px] text-sm text-[#303030] hover:bg-[#F3E9D6] 
                        hover:text-[#303030] font-raleway font-normal transition duration-300"
                        >
                          Detail Type - 1
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/subpage"
                          className="block px-4 py-3 rounded-[3px] text-sm text-[#303030] hover:bg-[#F3E9D6] 
                        hover:text-[#303030] font-raleway font-normal transition duration-300"
                        >
                          Detail Type - 2
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/subpage"
                          className="block px-4 py-3 rounded-[3px] text-sm text-[#303030] hover:bg-[#F3E9D6] 
                        hover:text-[#303030] font-raleway font-normal transition duration-300"
                        >
                          Detail Type - 3
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/subpage"
                          className="block px-4 py-3 rounded-[3px] text-sm text-[#303030] hover:bg-[#F3E9D6] 
                        hover:text-[#303030] font-raleway font-normal transition duration-300"
                        >
                          Detail Type - 4
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="relative group">
                <NavLink
                  to="/pages"
                  className={({ isActive }) =>
                    `py-3 px-[21px] text-sm text-[#303030] border-2 rounded-sm font-semibold ${
                      isActive ? "border-black" : "border-transparent"
                    } hover:text-current`
                  }
                >
                  PAGES
                </NavLink>
                <div
                  className="absolute left-1/2 transform -translate-x-1/2 pb-2 mt-[3px] group-hover:opacity-100 opacity-0 
              transition duration-300 w-full flex justify-center"
                >
                  <svg
                    className="h-[20px] w-[20px]"
                    overflow="visible"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                  >
                    <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"></path>
                  </svg>
                </div>
                <ul
                  className="absolute left-0 mt-7 w-48 bg-[#fdf6ea] border-t-[3px] border-[#e2d6c1] shadow-lg 
              p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto"
                >
                  <li>
                    <NavLink
                      to="/courses-template"
                      className="block px-4 py-3 rounded-[3px] text-sm text-[#303030] hover:bg-[#F3E9D6] 
                hover:text-[#303030] font-raleway font-normal transition duration-300"
                    >
                      BuddyPress
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/subpage"
                      className="block px-4 py-3 rounded-[3px] text-sm text-[#303030] hover:bg-[#F3E9D6] 
                hover:text-[#303030] font-raleway font-normal transition duration-300"
                    >
                      Event
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/subpage"
                      className="block px-4 py-3 rounded-[3px] text-sm text-[#303030] hover:bg-[#F3E9D6] 
                hover:text-[#303030] font-raleway font-normal transition duration-300"
                    >
                      Headers
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/subpage"
                      className="block px-4 py-3 rounded-[3px] text-sm text-[#303030] hover:bg-[#F3E9D6] 
                hover:text-[#303030] font-raleway font-normal transition duration-300"
                    >
                      Side-Navigation
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/subpage"
                      className="block px-4 py-3 rounded-[3px] text-sm text-[#303030] hover:bg-[#F3E9D6] 
                hover:text-[#303030] font-raleway font-normal transition duration-300"
                    >
                      About
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/teachers"
                      className="block px-4 py-3 rounded-[3px] text-sm text-[#303030] hover:bg-[#F3E9D6] 
                hover:text-[#303030] font-raleway font-normal transition duration-300"
                    >
                      Teachers
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/subpage"
                      className="block px-4 py-3 rounded-[3px] text-sm text-[#303030] hover:bg-[#F3E9D6] 
                hover:text-[#303030] font-raleway font-normal transition duration-300"
                    >
                      Teachers Profile
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className="relative group">
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    `py-3 px-[21px] text-sm text-[#303030] border-2 rounded-sm font-semibold ${
                      isActive ? "border-black" : "border-transparent"
                    } hover:text-current`
                  }
                >
                  BLOG
                </NavLink>
                <div
                  className="absolute left-1/2 transform -translate-x-1/2 pb-2 mt-[3px] group-hover:opacity-100 opacity-0 
              transition duration-300 w-full flex justify-center"
                >
                  <svg
                    className="h-[20px] w-[20px]"
                    overflow="visible"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                  >
                    <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"></path>
                  </svg>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-7 flex flex-col gap-5 p-[30px] pointer-events-none group-hover:pointer-events-auto container mx-auto w-[52vw] bg-[#fdf6ea] border-t-[3px] border-[#e2d6c1] shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-5">
                    <div className="flex flex-col gap-5 flex-1">
                      <div className="flex flex-col gap-[6px]">
                        <span className="font-raleway font-semibold">
                          I COLUMN
                        </span>
                        <div className="h-[2px] w-[40px] bg-[#da853d]"></div>
                      </div>
                      <ul>
                        <li>
                          <NavLink
                            to="/blog-post-1"
                            className="block px-4 py-3 rounded-[3px] text-sm text-[#303030] hover:bg-[#F3E9D6] hover:text-[#303030] font-raleway font-normal transition duration-300"
                          >
                            Full Width
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/blog-post-2"
                            className="block px-4 py-3 rounded-[3px] text-sm text-[#303030] hover:bg-[#F3E9D6] hover:text-[#303030] font-raleway font-normal transition duration-300"
                          >
                            With Left Sidebar
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/blog-post-1"
                            className="block px-4 py-3 rounded-[3px] text-sm text-[#303030] hover:bg-[#F3E9D6] hover:text-[#303030] font-raleway font-normal transition duration-300"
                          >
                            With Right Sidebar
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/blog-post-2"
                            className="block px-4 py-3 rounded-[3px] text-sm text-[#303030] hover:bg-[#F3E9D6] hover:text-[#303030] font-raleway font-normal transition duration-300"
                          >
                            With Pagination
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col gap-5 flex-1">
                      <div className="flex flex-col gap-[6px]">
                        <span className="font-raleway font-semibold">
                          II COLUMN
                        </span>
                        <div className="h-[2px] w-[40px] bg-[#da853d]"></div>
                      </div>
                      <ul>
                        <li>
                          <NavLink
                            to="/blog-post-1"
                            className="block px-4 py-3 rounded-[3px] text-sm text-[#303030] hover:bg-[#F3E9D6] hover:text-[#303030] font-raleway font-normal transition duration-300"
                          >
                            Full Width
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/blog-post-2"
                            className="block px-4 py-3 rounded-[3px] text-sm text-[#303030] hover:bg-[#F3E9D6] hover:text-[#303030] font-raleway font-normal transition duration-300"
                          >
                            With Left Sidebar
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/blog-post-1"
                            className="block px-4 py-3 rounded-[3px] text-sm text-[#303030] hover:bg-[#F3E9D6] hover:text-[#303030] font-raleway font-normal transition duration-300"
                          >
                            With Right Sidebar
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/blog-post-2"
                            className="block px-4 py-3 rounded-[3px] text-sm text-[#303030] hover:bg-[#F3E9D6] hover:text-[#303030] font-raleway font-normal transition duration-300"
                          >
                            With Pagination
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col gap-5 flex-1">
                      <div className="flex flex-col gap-[6px]">
                        <span className="font-raleway font-semibold">
                          III COLUMN
                        </span>
                        <div className="h-[2px] w-[40px] bg-[#da853d]"></div>
                      </div>
                      <ul>
                        <li>
                          <NavLink
                            to="/blog-post-1"
                            className="block px-4 py-3 rounded-[3px] text-sm text-[#303030] hover:bg-[#F3E9D6] hover:text-[#303030] font-raleway font-normal transition duration-300"
                          >
                            Full Width
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/blog-post-2"
                            className="block px-4 py-3 rounded-[3px] text-sm text-[#303030] hover:bg-[#F3E9D6] hover:text-[#303030] font-raleway font-normal transition duration-300"
                          >
                            With Left Sidebar
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/blog-post-1"
                            className="block px-4 py-3 rounded-[3px] text-sm text-[#303030] hover:bg-[#F3E9D6] hover:text-[#303030] font-raleway font-normal transition duration-300"
                          >
                            With Right Sidebar
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/blog-post-2"
                            className="block px-4 py-3 rounded-[3px] text-sm text-[#303030] hover:bg-[#F3E9D6] hover:text-[#303030] font-raleway font-normal transition duration-300"
                          >
                            With Pagination
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col gap-5 flex-1">
                      <div className="flex flex-col gap-[6px]">
                        <span className="font-raleway font-semibold">
                          THUMB IMAGE
                        </span>
                        <div className="h-[2px] w-[40px] bg-[#da853d]"></div>
                      </div>
                      <ul>
                        <li>
                          <NavLink
                            to="/blog-post-1"
                            className="block px-4 py-3 rounded-[3px] text-sm text-[#303030] hover:bg-[#F3E9D6] hover:text-[#303030] font-raleway font-normal transition duration-300"
                          >
                            Full Width
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/blog-post-2"
                            className="block px-4 py-3 rounded-[3px] text-sm text-[#303030] hover:bg-[#F3E9D6] hover:text-[#303030] font-raleway font-normal transition duration-300"
                          >
                            With Left Sidebar
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/blog-post-1"
                            className="block px-4 py-3 rounded-[3px] text-sm text-[#303030] hover:bg-[#F3E9D6] hover:text-[#303030] font-raleway font-normal transition duration-300"
                          >
                            With Right Sidebar
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/blog-post-2"
                            className="block px-4 py-3 rounded-[3px] text-sm text-[#303030] hover:bg-[#F3E9D6] hover:text-[#303030] font-raleway font-normal transition duration-300"
                          >
                            With Pagination
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-col gap-[6px]">
                      <span className="font-raleway font-semibold">
                        FULLWIDTH IMAGE
                      </span>
                      <div className="h-[2px] w-[40px] bg-[#da853d]"></div>
                    </div>
                    <div>
                      <img
                        src="https://dtlmselementor.wpengine.com/wp-content/uploads/2023/12/mega-menu-image-1.webp"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </li>
              <li className="relative group">
                <NavLink
                  to="/gallery"
                  className={({ isActive }) =>
                    `py-3 px-[21px] text-sm text-[#303030] border-2 rounded-sm font-semibold ${
                      isActive ? "border-black" : "border-transparent"
                    } hover:text-current`
                  }
                >
                  GALLERY
                </NavLink>
                <div
                  className="absolute left-1/2 transform -translate-x-1/2 pb-2 mt-[3px] group-hover:opacity-100 opacity-0 
              transition duration-300 w-full flex justify-center"
                >
                  <svg
                    className="h-[20px] w-[20px]"
                    overflow="visible"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                  >
                    <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"></path>
                  </svg>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-7 flex flex-col gap-5 p-[30px] pointer-events-none group-hover:pointer-events-auto container mx-auto w-[52vw] bg-[#fdf6ea] border-t-[3px] border-[#e2d6c1] shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-5">
                    <div className="flex flex-col gap-5 flex-1">
                      <div className="flex flex-col gap-[6px]">
                        <span className="font-raleway font-semibold">
                          I COLUMN
                        </span>
                        <div className="h-[2px] w-[40px] bg-[#da853d]"></div>
                      </div>
                      <ul>
                        <li>
                          <NavLink
                            to="/blog-post-1"
                            className="block px-4 py-3 rounded-[3px] text-sm text-[#303030] hover:bg-[#F3E9D6] hover:text-[#303030] font-raleway font-normal transition duration-300"
                          >
                            Full Width
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/blog-post-2"
                            className="block px-4 py-3 rounded-[3px] text-sm text-[#303030] hover:bg-[#F3E9D6] hover:text-[#303030] font-raleway font-normal transition duration-300"
                          >
                            With Left Sidebar
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/blog-post-1"
                            className="block px-4 py-3 rounded-[3px] text-sm text-[#303030] hover:bg-[#F3E9D6] hover:text-[#303030] font-raleway font-normal transition duration-300"
                          >
                            With Right Sidebar
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/blog-post-2"
                            className="block px-4 py-3 rounded-[3px] text-sm text-[#303030] hover:bg-[#F3E9D6] hover:text-[#303030] font-raleway font-normal transition duration-300"
                          >
                            With Pagination
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/blog-post-2"
                            className="block px-4 py-3 rounded-[3px] text-sm text-[#303030] hover:bg-[#F3E9D6] hover:text-[#303030] font-raleway font-normal transition duration-300"
                          >
                            Without Filter
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col gap-5 flex-1">
                      <div className="flex flex-col gap-[6px]">
                        <span className="font-raleway font-semibold">
                          II COLUMN
                        </span>
                        <div className="h-[2px] w-[40px] bg-[#da853d]"></div>
                      </div>
                      <ul>
                        <li>
                          <NavLink
                            to="/blog-post-1"
                            className="block px-4 py-3 rounded-[3px] text-sm text-[#303030] hover:bg-[#F3E9D6] hover:text-[#303030] font-raleway font-normal transition duration-300"
                          >
                            Full Width
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/blog-post-2"
                            className="block px-4 py-3 rounded-[3px] text-sm text-[#303030] hover:bg-[#F3E9D6] hover:text-[#303030] font-raleway font-normal transition duration-300"
                          >
                            With Left Sidebar
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/blog-post-1"
                            className="block px-4 py-3 rounded-[3px] text-sm text-[#303030] hover:bg-[#F3E9D6] hover:text-[#303030] font-raleway font-normal transition duration-300"
                          >
                            With Right Sidebar
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/blog-post-2"
                            className="block px-4 py-3 rounded-[3px] text-sm text-[#303030] hover:bg-[#F3E9D6] hover:text-[#303030] font-raleway font-normal transition duration-300"
                          >
                            With Pagination
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/blog-post-2"
                            className="block px-4 py-3 rounded-[3px] text-sm text-[#303030] hover:bg-[#F3E9D6] hover:text-[#303030] font-raleway font-normal transition duration-300"
                          >
                            Without Filter
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col gap-5 flex-1">
                      <div className="flex flex-col gap-[6px]">
                        <span className="font-raleway font-semibold">
                          III COLUMN
                        </span>
                        <div className="h-[2px] w-[40px] bg-[#da853d]"></div>
                      </div>
                      <ul>
                        <li>
                          <NavLink
                            to="/blog-post-1"
                            className="block px-4 py-3 rounded-[3px] text-sm text-[#303030] hover:bg-[#F3E9D6] hover:text-[#303030] font-raleway font-normal transition duration-300"
                          >
                            Full Width
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/blog-post-2"
                            className="block px-4 py-3 rounded-[3px] text-sm text-[#303030] hover:bg-[#F3E9D6] hover:text-[#303030] font-raleway font-normal transition duration-300"
                          >
                            With Left Sidebar
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/blog-post-1"
                            className="block px-4 py-3 rounded-[3px] text-sm text-[#303030] hover:bg-[#F3E9D6] hover:text-[#303030] font-raleway font-normal transition duration-300"
                          >
                            With Right Sidebar
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/blog-post-2"
                            className="block px-4 py-3 rounded-[3px] text-sm text-[#303030] hover:bg-[#F3E9D6] hover:text-[#303030] font-raleway font-normal transition duration-300"
                          >
                            With Pagination
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/blog-post-2"
                            className="block px-4 py-3 rounded-[3px] text-sm text-[#303030] hover:bg-[#F3E9D6] hover:text-[#303030] font-raleway font-normal transition duration-300"
                          >
                            Without Filter
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col gap-5 flex-1">
                      <div className="flex flex-col gap-[6px]">
                        <span className="font-raleway font-semibold">
                          CONTACT US NOW
                        </span>
                        <div className="h-[2px] w-[40px] bg-[#da853d]"></div>
                      </div>
                      <ul className="flex flex-col gap-3">
                        <li>
                          <input
                            className="block px-4 py-3 rounded-[3px] text-sm text-[#303030] hover:text-[#303030] font-raleway font-normal transition duration-300 border outline-none
                          focus:border-[#838C48] border-[#e2d6c1] w-full"
                            placeholder="Your Name"
                          ></input>
                        </li>
                        <li>
                          <input
                            className="block px-4 py-3 rounded-[3px] text-sm text-[#303030] hover:text-[#303030] font-raleway font-normal transition duration-300 border outline-none
                          focus:border-[#838C48] border-[#e2d6c1] w-full"
                            placeholder="Email"
                          ></input>
                        </li>
                        <li>
                          <textarea
                            className="block px-4 py-3 rounded-[3px] text-sm text-[#303030] hover:text-[#303030] font-raleway font-normal transition duration-300 border outline-none
                          focus:border-[#838C48] border-[#e2d6c1] w-full resize-none"
                            placeholder="Message"
                            rows={6}
                          ></textarea>
                        </li>
                        <li className="flex justify-end">
                          <button
                            type="submit"
                            className="text-sm font-bold bg-[#838C48] border-2 border-[#838C48]  text-white px-[21px] py-[9.8px] rounded-sm hover:bg-[#da853d]
                        hover:border-[#da853d] transition duration-[400ms] mt-[12px] !outline-none"
                          >
                            SEND EMAIL
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li className="relative group">
                <NavLink
                  to="/shop"
                  className={({ isActive }) =>
                    `py-3 px-[21px] text-sm text-[#303030] border-2 rounded-sm font-semibold ${
                      isActive ? "border-black" : "border-transparent"
                    } hover:text-current`
                  }
                >
                  SHOP
                </NavLink>
                <div
                  className="absolute left-1/2 transform -translate-x-1/2 pb-2 mt-[3px] group-hover:opacity-100 opacity-0 
              transition duration-300 w-full flex justify-center"
                >
                  <svg
                    className="h-[20px] w-[20px]"
                    overflow="visible"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                  >
                    <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"></path>
                  </svg>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-7 flex flex-col gap-5 p-[30px] pointer-events-none group-hover:pointer-events-auto container mx-auto w-[52vw] bg-[#fdf6ea] border-t-[3px] border-[#e2d6c1] shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-5">
                    <div className="flex flex-col gap-5 flex-1">
                      <div className="flex flex-col gap-[6px]">
                        <span className="font-raleway font-semibold">
                          POPULAR PRODUCTS
                        </span>
                        <div className="h-[2px] w-[40px] bg-[#da853d]"></div>
                      </div>
                      <ul>
                        <li>
                          <div className="flex justify-between">
                            <div className="flex flex-col gap-2">
                              <span className="text-sm font-semibold font-raleway">
                                Application Development
                              </span>
                              <span className="text-sm text-[#777777]">
                                <s className="text-[12px] text-[#777777]">
                                  $15.00
                                </s>{" "}
                                $12.00
                              </span>
                            </div>
                            <div className="p-[3px] border border-[rgba(48,48,48,0.15)] mt-[5px] ml-[8px]">
                              <img
                                className="h-[42px] w-[42px]"
                                src="https://dtlmselementor.wpengine.com/wp-content/uploads/2023/11/cover2.jpg"
                                alt=""
                              />
                            </div>
                          </div>
                        </li>
                      </ul>
                      <hr className="border-[rgba(48,48,48,0.15)]"></hr>
                      <ul>
                        <li>
                          <div className="flex justify-between">
                            <div className="flex flex-col gap-2">
                              <span className="text-sm font-semibold font-raleway">
                                Application Development
                              </span>
                              <span className="text-sm text-[#777777]">
                                $35.00
                              </span>
                            </div>
                            <div className="p-[3px] border border-[rgba(48,48,48,0.15)] mt-[5px] ml-[8px]">
                              <img
                                className="h-[42px] w-[42px]"
                                src="https://dtlmselementor.wpengine.com/wp-content/uploads/2023/11/note.jpg"
                                alt=""
                              />
                            </div>
                          </div>
                        </li>
                      </ul>
                      <hr className="border-[rgba(48,48,48,0.15)]"></hr>
                      <ul>
                        <li>
                          <div className="flex justify-between">
                            <div className="flex flex-col gap-2">
                              <span className="text-sm font-semibold font-raleway">
                                Application Development
                              </span>
                              <span className="text-sm text-[#777777]">
                                $15.00
                              </span>
                            </div>
                            <div className="p-[3px] border border-[rgba(48,48,48,0.15)] mt-[5px] ml-[8px]">
                              <img
                                className="h-[42px] w-[42px]"
                                src="https://dtlmselementor.wpengine.com/wp-content/uploads/2023/11/note.jpg"
                                alt=""
                              />
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col gap-5 flex-1">
                      <div className="flex flex-col gap-[6px]">
                        <span className="font-raleway font-semibold">
                          SHOP NOW
                        </span>
                        <div className="h-[2px] w-[40px] bg-[#da853d]"></div>
                      </div>
                      <ul>
                        <li>
                          <NavLink
                            to="/blog-post-1"
                            className="block px-4 py-3 rounded-[3px] text-sm text-[#303030] hover:bg-[#F3E9D6] hover:text-[#303030] font-raleway font-normal transition duration-300"
                          >
                            Shop Four Column
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/blog-post-2"
                            className="block px-4 py-3 rounded-[3px] text-sm text-[#303030] hover:bg-[#F3E9D6] hover:text-[#303030] font-raleway font-normal transition duration-300"
                          >
                            Shop Three Column
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/blog-post-1"
                            className="block px-4 py-3 rounded-[3px] text-sm text-[#303030] hover:bg-[#F3E9D6] hover:text-[#303030] font-raleway font-normal transition duration-300"
                          >
                            Shop Two Column
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/blog-post-2"
                            className="block px-4 py-3 rounded-[3px] text-sm text-[#303030] hover:bg-[#F3E9D6] hover:text-[#303030] font-raleway font-normal transition duration-300"
                          >
                            Cart
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/blog-post-2"
                            className="block px-4 py-3 rounded-[3px] text-sm text-[#303030] hover:bg-[#F3E9D6] hover:text-[#303030] font-raleway font-normal transition duration-300"
                          >
                            Checkout
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col gap-5 flex-1">
                      <div className="flex flex-col gap-[6px]">
                        <span className="font-raleway font-semibold">
                          MY ACCOUNT
                        </span>
                        <div className="h-[2px] w-[40px] bg-[#da853d]"></div>
                      </div>
                      <ul>
                        <li>
                          <NavLink
                            to="/blog-post-1"
                            className="block px-4 py-3 rounded-[3px] text-sm text-[#303030] hover:bg-[#F3E9D6] hover:text-[#303030] font-raleway font-normal transition duration-300"
                          >
                            View Order
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/blog-post-2"
                            className="block px-4 py-3 rounded-[3px] text-sm text-[#303030] hover:bg-[#F3E9D6] hover:text-[#303030] font-raleway font-normal transition duration-300"
                          >
                            Order Received
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/blog-post-1"
                            className="block px-4 py-3 rounded-[3px] text-sm text-[#303030] hover:bg-[#F3E9D6] hover:text-[#303030] font-raleway font-normal transition duration-300"
                          >
                            Edit Account
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/blog-post-2"
                            className="block px-4 py-3 rounded-[3px] text-sm text-[#303030] hover:bg-[#F3E9D6] hover:text-[#303030] font-raleway font-normal transition duration-300"
                          >
                            Edit My Address
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li className="relative group">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `py-3 px-[21px] text-sm text-[#303030] border-2 rounded-sm font-semibold ${
                      isActive ? "border-black" : "border-transparent"
                    } hover:text-current`
                  }
                >
                  CONTACT
                </NavLink>
                <div
                  className="absolute left-1/2 transform -translate-x-1/2 pb-2 mt-[3px] group-hover:opacity-100 opacity-0 
              transition duration-300 w-full flex justify-center"
                >
                  <svg
                    className="h-[20px] w-[20px]"
                    overflow="visible"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                  >
                    <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"></path>
                  </svg>
                </div>
                <ul
                  className="absolute left-0 mt-7 w-48 bg-[#fdf6ea] border-t-[3px] border-[#e2d6c1] shadow-lg p-4 
              opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto"
                >
                  <li>
                    <NavLink
                      to="/subpage"
                      className="block px-4 py-3 rounded-[3px] text-sm text-[#303030] hover:bg-[#F3E9D6] 
                    hover:text-[#303030] font-raleway font-normal transition duration-300"
                    >
                      Contact - layout - 2
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/subpage"
                      className="block px-4 py-3 rounded-[3px] text-sm text-[#303030] hover:bg-[#F3E9D6] 
                    hover:text-[#303030] font-raleway font-normal transition duration-300"
                    >
                      Contact - layout - 3
                    </NavLink>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-[10px]">
                <div className="flex items-center gap-[10px] group cursor-pointer">
                  <div
                    className="h-[40px] w-[40px] border-black border-2 rounded-[3px] p-[11px] 
                group-hover:border-[#da853d] transition duration-[400ms]"
                  >
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
                <span
                  className="text-sm font-semibold text-black hover:text-[#da853d] transition duration-[400ms] 
              cursor-pointer"
                >
                  Register
                </span>
              </div>
              <div className="h-[35px] w-[35px] p-[10px] cursor-pointer">
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
      <div
        className={`fixed top-0 right-0 w-[264px] bg-[#fdf6ea] h-full z-50 transition-transform transform duration-500 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end w-full">
          <button onClick={() => setOpen(false)} className="p-3">
            <svg
              className="h-[22px] w-auto"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>
          </button>
        </div>
        <ul>
          {sidebarItems.map((submenu, index) => (
            <li
              key={index}
              className="py-[10px] px-[15px] border-t flex items-center justify-between hover:bg-[#838C48] transition 
          duration-300 group"
              onClick={() => {
                if (openSubMenu === null || openSubMenu !== index) {
                  handleSubMenuToggle(index);
                }
              }}
            >
              <span className="group-hover:text-white transition duration-300">
                {submenu.title}
              </span>
              <svg
                className="h-[17px] w-auto pt-[1px] group-hover:fill-white transition duration-300"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
              </svg>
              <div
                className={`fixed top-0 right-0 w-[264px] bg-[#fdf6ea] h-full z-50 transition-transform transform duration-500 ${
                  openSubMenu === index ? "translate-x-0" : "translate-x-full"
                }`}
              >
                <div className="flex justify-between w-full">
                  <button
                    onClick={() => setOpenSubMenu(null)}
                    className="p-3 pl-4"
                  >
                    <svg
                      className="h-[17px] w-auto"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                      fill="#777777"
                      transform="scale(-1,1)"
                    >
                      <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                    </svg>
                  </button>
                  <button
                    onClick={() => {
                      setOpen(false);
                      setTimeout(() => setOpenSubMenu(null), 500);
                    }}
                    className="p-3"
                  >
                    <svg
                      className="h-[22px] w-auto"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 384 512"
                    >
                      <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                    </svg>
                  </button>
                </div>
                <ul>
                  {submenu.items.map((item, subIndex) => (
                    <li
                      key={subIndex}
                      className="py-[10px] px-[15px] border-t flex items-center justify-between hover:bg-[#838C48] transition 
                  duration-300 group/sub"
                    >
                      <span className="group-hover/sub:text-white transition duration-300">
                        {item.name}
                      </span>
                      <svg
                        className="h-[17px] w-auto pt-[1px] group-hover/sub:fill-white transition duration-300"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                      >
                        <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                      </svg>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Header;
