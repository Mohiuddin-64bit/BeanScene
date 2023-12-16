const Navbar = () => {
  return (
    <header className="container ">
      <div className="drawer md:px-12 p-3 px-0 absolute">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full navbar grid grid-cols-3 ">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square custom-btn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="px-2 text-4xl col-span-2 md:col-span-1 mx-2 font-clicker  text-white">
              Bean Scene
            </div>
            <div className="hidden lg:block mx-auto">
              <ul className="menu menu-horizontal">
                <li className="text-white">
                  <a>Home</a>
                </li>
                <li className="text-white">
                  <a>Menu</a>
                </li>
                <li className="text-white">
                  <a>About Us</a>
                </li>
                <li className="text-white">
                  <a>Contact Us</a>
                </li>
              </ul>
            </div>
            <div className="ml-auto hidden md:block">
              <a className="custom-btn">Button</a>
            </div>
          </div>
          {/* Page content here */}
        </div>
        <div className="drawer-side z-50">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="bg-[#FFF9F1] ">
            <div className="flex justify-center min-h-screen">
              <ul className="menu p-4 w-80 text-2xl items-center justify-center min-h-full ">
                {/* Sidebar content here */}
                <li >
                  <a>Home</a>
                </li>
                <li >
                  <a>Menu</a>
                </li>
                <li >
                  <a>About Us</a>
                </li>
                <li >
                  <a>Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
