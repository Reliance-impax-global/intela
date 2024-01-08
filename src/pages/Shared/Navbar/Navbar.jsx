import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
// import background from "../../../assets/images/background-image.png";
import gradientOverlay from "../../../assets/images/baygrond.png";
const Navbar = () => {
  return (
    <div
      // className="relative bg-cover z-30 pt-2"
      // style={{
      //   backgroundImage: `url(${background})`,
      // }}
      className="bg-[#031D49] pt-5"
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${gradientOverlay})`,
          opacity: 0,
        }}
      ></div>
      <div className="navbar text-white">
        <div className="navbar-start md:mx-20">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#132A50] rounded-box w-52"
            >
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li className="bg-[#132A50]">
                <Link to="services">SERVICES</Link>
                <ul className="p-2">
                  <li>
                    <Link to="/software-development">SOFTWARE DEVELOPMENT</Link>
                  </li>
                  <li>
                    <Link to="/web-development">WEB DEVELOPMENT</Link>
                  </li>
                  <li>
                    <Link to="/ui-ux-design">UI & UX DESIGN</Link>
                  </li>
                  <li>
                    <Link to="/web-hosting-security">WEB HOSTING SECURITY</Link>
                  </li>
                </ul>
              </li>
              <li className="bg-[#132A50]">
                <Link to="solution">SOLUTION</Link>
                <ul className="p-2">
                  <li>
                    <Link to="/unified-communication">
                      Unified Communication
                    </Link>
                  </li>
                  <li>
                    <Link to="/network-security">Network & Security</Link>
                  </li>
                  <li>
                    <Link to="/application">Application</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/blog">BLOGS</Link>
              </li>
              <li>
                <Link to="/about">ABOUT</Link>
              </li>
              <li>
                <Link to="/contact">CONTACT</Link>
              </li>
            </ul>
          </div>
          <div className="ml-10 z-50">
            <img
              className="w-[200px] md:w-[222px] md:h-[55px] z-50"
              src={logo}
              alt="Logo"
            />
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <details className="z-40">
                <summary>
                  <Link to="/services">SERVICES</Link>
                </summary>
                <ul className="p-2 bg-[#132A50]">
                  <li>
                    <Link to="/software-development">SOFTWARE DEVELOPMENT</Link>
                  </li>
                  <li>
                    <Link to="/web-development">WEB DEVELOPMENT</Link>
                  </li>
                  <li>
                    <Link to="/ui-ux-design">UI & UX DESIGN</Link>
                  </li>
                  <li>
                    <Link to="/web-hosting-security">WEB HOSTING SECURITY</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details className="z-40">
                <summary>
                  <Link to="/solution">SOLUTION</Link>
                </summary>
                <ul className="p-2 bg-[#132A50]">
                  <li>
                    <Link to="/unified-communication">
                      Unified Communication
                    </Link>
                  </li>
                  <li>
                    <Link to="/network-security">Network & Security</Link>
                  </li>
                  <li>
                    <Link to="/application">Application</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link to="/blog">BLOGS</Link>
            </li>
            <li>
              <Link to="/about">ABOUT</Link>
            </li>
            <li>
              <Link to="/contact">CONTACT</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end md:me-20 z-50">
          <a className="btn bg-[#BD981B] w-[100px] md:w-[111px]">Free Call</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
