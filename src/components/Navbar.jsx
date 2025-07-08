import { useEffect, useState } from "react";
import Logo from "../assets/pngwing.com.png";
import { IoIosMenu } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";
import { LiaTimesSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [login, setLogin] = useState(!true);
  const [mobilenav, setMobilenav] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  const handleLogin = () => {
    setLogin(true);
  };

  const toggleNavbar = () => {
    setMobilenav(!mobilenav);
  };

  return (
    <>
      <nav className="flex justify-between px-10 py-4 shadow-lg">
        <div className="flex gap-6 items-center font-bold">
          <img className="w-40" src={Logo} alt="" />
          <ul className="lg:flex gap-10 hidden">
            <Link to="/product">
              <li>Product</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>

            <li>Resources</li>
            <Link to="/todo">
              {" "}
              <li>To-App</li>
            </Link>
          </ul>
        </div>

        <div className="flex gap-6 font-bold items-center">
          {login ? (
            <span>Hello User</span>
          ) : (
            <button
              onClick={handleLogin}
              className="border-2 border-gray-600 px-3 py-1 rounded-xl lg:flex hidden"
            >
              Log in
            </button>
          )}
          <button className="lg:block hidden border-2 border-blue-500 px-3 py-1 rounded-xl bg-[#00A2FF] text-white  hover:bg-white hover:text-[#00A2FF] cursor-pointer">
            Signup free
          </button>
          {mobilenav ? (
            <LiaTimesSolid
              onClick={toggleNavbar}
              className="lg:hidden block text-3xl z-50"
            />
          ) : (
            <IoIosMenu
              onClick={toggleNavbar}
              className="lg:hidden block text-3xl z-50"
            />
          )}
        </div>
      </nav>

      {mobilenav && (
        <aside
          className=" flex flex-col gap-4 px-4 py-12 bg-white shadow-lg w-[70%] h-[100vh] absolute right-0 top-0"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <ul className="space-y-6">
            <Link to="/product">
              <li>Product</li>
            </Link>

            <li>About</li>
            <li>Resources</li>
            <Link to="/todo">
              <li>Todo app</li>
            </Link>
          </ul>
          <button
            onClick={handleLogin}
            className="border-2 border-gray-600 px-3 py-1 rounded-xl "
          >
            Log in
          </button>
          <button className=" border-2 border-blue-500 px-3 py-1 rounded-xl bg-[#00A2FF] text-white  hover:bg-white hover:text-[#00A2FF] cursor-pointer">
            Signup free
          </button>
        </aside>
      )}
    </>
  );
};

export default Navbar;
