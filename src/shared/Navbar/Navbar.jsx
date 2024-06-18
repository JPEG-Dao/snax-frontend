import { IoMenu, IoClose } from "react-icons/io5";
import { useState, useEffect } from "react";
import logo from "@/assets/banner/Frame 431.png";
import logoSm from "@/assets/banner/Frame4.png";
import { Link } from "react-scroll";
import { Button } from "@/components/ui/button";

import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";

const NavBar = () => {

  const { setVisible } = useWalletModal();
  const { connected, publicKey, disconnect } = useWallet();


  const [open, setOpen] = useState(false);
  const [color, setColor] = useState(false);
  const [activeLink, setActiveLink] = useState("home");


  // Determine which section is currently in view based on scroll position
  useEffect(() => {
    const changeActiveLink = () => {
      const scrollPosition = window.scrollY;

      const homeSection = document.getElementById("home");
      const aboutTokenSection = document.getElementById("aboutToken");
      const tokenomicsSection = document.getElementById("tokenomics");
      const buySection = document.getElementById("buy");
      const roadmapSection = document.getElementById("roadmap");

      if (
        homeSection.offsetTop <= scrollPosition &&
        homeSection.offsetTop + homeSection.offsetHeight > scrollPosition
      ) {
        setActiveLink("home");
      } else if (
        aboutTokenSection.offsetTop <= scrollPosition &&
        aboutTokenSection.offsetTop + aboutTokenSection.offsetHeight >
        scrollPosition
      ) {
        setActiveLink("aboutToken");
      } else if (
        tokenomicsSection.offsetTop <= scrollPosition &&
        tokenomicsSection.offsetTop + tokenomicsSection.offsetHeight >
        scrollPosition
      ) {
        setActiveLink("tokenomics");
      } else if (
        buySection.offsetTop <= scrollPosition &&
        buySection.offsetTop + buySection.offsetHeight > scrollPosition
      ) {
        setActiveLink("buy");
      } else if (
        roadmapSection.offsetTop <= scrollPosition &&
        roadmapSection.offsetTop + roadmapSection.offsetHeight > scrollPosition
      ) {
        setActiveLink("roadmap");
      }
    };

    window.addEventListener("scroll", changeActiveLink);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("scroll", changeActiveLink);
    };
  }, []);


  // Change color of navbar based on scroll position
  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 0) {
        setColor(true);
      } else {
        setColor(false);
      }
    };
    window.addEventListener("scroll", changeColor);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

  return (
    <div className={color ? 'sticky  bg-[#174843] top-0 z-50 duration-300 shadow-sm py-1' : 'pt-0 shadow-sm bg-[#174843] duration-300'}>
      <div className="max-w-[1680px] mx-auto xl:px-24 lg:px-16 md:px-10 sm:px-2 px-4">
        <div className="w-full top-0 left-0 z-10">
          <div className={`md:flex justify-between items-center ${color ? 'py-3' : 'py-5 2xl:py-7'}`}>

            <Link to="home" smooth={true} offset={-30} duration={600} className="cursor-pointer">
              <img src={logo} alt="Logo" className="mr-3 ml-5 md:ml-0 hidden lg:block" />
              <img src={logoSm} alt="Logo" className="w-[40px] mr-3 ml-5 md:ml-0 block lg:hidden" />
            </Link>

            <div onClick={() => setOpen(!open)} className="text-4xl absolute right-8 top-[20px] cursor-pointer md:hidden">
              {
                open ? <IoClose className="text-[#32867f]" /> : <IoMenu className="text-[#32867f]" />
              }
            </div>

            <ul className={`md:flex md:items-center md:py-3 pt-5 pb-7 space-x-5 xl:space-x-8 2xl:space-x-10 space-y-4 md:space-y-0 absolute md:static md:z-auto z-[-1px] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-linear opacity-0 md:opacity-100 rounded-[5px] px-4 ${open ? 'top-[70px] opacity-100 bg-[#1c5752] z-10' : 'top-[-490px]'}`}>

              <li>
                <Link to="home" smooth={true} offset={-30} duration={600} className={`xl:text-[18px] ml-5 md:ml-4 cursor-pointer lg:leading-[27px] lg:tracking-[0.72px] ${activeLink === "home" ? 'bg-clip-text text-transparent bg-gradient-to-l from-[#F8B515] to-[#0FC1C7] hover:from-[#F8B515] hover:to-[#0FC1C7]' : 'bg-clip-text text-transparent bg-gradient-to-l from-[#E0E0E0] to-[#E0E0E0] hover:from-[#F8B515] hover:to-[#0FC1C7] duration-300'}`} onClick={() => setActiveLink("home")}>Home</Link>
              </li>

              <li>
                <Link to="about" smooth={true} offset={50} duration={600} className={`xl:text-[18px] duration-300 cursor-pointer lg:leading-[27px] lg:tracking-[0.72px] ${activeLink === "about" ? 'bg-clip-text text-transparent bg-gradient-to-l from-[#F8B515] to-[#0FC1C7] hover:from-[#F8B515] hover:to-[#0FC1C7]' : 'bg-clip-text text-transparent bg-gradient-to-l from-[#E0E0E0] to-[#E0E0E0] hover:from-[#F8B515] hover:to-[#0FC1C7] duration-300'}`} onClick={() => setActiveLink("about")}>About</Link>
              </li>

              <li>
                <Link to="tokenomics" smooth={true} offset={-50} duration={600} className={`xl:text-[18px] duration-300 cursor-pointer lg:leading-[27px] lg:tracking-[0.72px] ${activeLink === "tokenomics" ? 'bg-clip-text text-transparent bg-gradient-to-l from-[#F8B515] to-[#0FC1C7] hover:from-[#F8B515] hover:to-[#0FC1C7]' : 'bg-clip-text text-transparent bg-gradient-to-l from-[#E0E0E0] to-[#E0E0E0] hover:from-[#F8B515] hover:to-[#0FC1C7] duration-300'}`} onClick={() => setActiveLink("tokenomics")}>Tokenomics</Link>
              </li>

              <li>
                <Link to="buy" smooth={true} offset={-170} duration={600} className={`xl:text-[18px] duration-300 cursor-pointer lg:leading-[27px] lg:tracking-[0.72px] ${activeLink === "buy" ? 'bg-clip-text text-transparent bg-gradient-to-l from-[#F8B515] to-[#0FC1C7] hover:from-[#F8B515] hover:to-[#0FC1C7]' : 'bg-clip-text text-transparent bg-gradient-to-l from-[#E0E0E0] to-[#E0E0E0] hover:from-[#F8B515] hover:to-[#0FC1C7] duration-300'}`} onClick={() => setActiveLink("buy")}>How to buy</Link>
              </li>

              <li>
                <Link to="roadmap" smooth={true} offset={-120} duration={600} className={`xl:text-[18px] duration-300 cursor-pointer lg:leading-[27px] lg:tracking-[0.72px] ${activeLink === "roadmap" ? 'bg-clip-text text-transparent bg-gradient-to-l from-[#F8B515] to-[#0FC1C7] hover:from-[#F8B515] hover:to-[#0FC1C7]' : 'bg-clip-text text-transparent bg-gradient-to-l from-[#E0E0E0] to-[#E0E0E0] hover:from-[#F8B515] hover:to-[#0FC1C7] duration-300'}`} onClick={() => setActiveLink("roadmap")}>Roadmap</Link>
              </li>

              <div className="block md:hidden">
                <Link to="home" smooth={true} offset={-30} duration={600}>
                  <Button className="bg-gradient-to-l from-[#F8B515] hover:from-[#f8b415ec] to-[#0FC1C7] hover:to-[#0fc1c7e8] text-[#000] xl:text-[20px] lg:leading-[30px] lg:tracking-[0.8px] font-normal rounded-[10px]" onClick={() => { connected ? disconnect() : setVisible(true) }}>{connected ? `${publicKey?.toString().substring(0, 6)}...${publicKey?.toString().substring(publicKey?.toString().length - 6)}` : "Connect"}</Button>
                </Link>
              </div>
            </ul>

            <div className="md:block hidden">
              <Link to="home" smooth={true} offset={-30} duration={600}>
                <Button className="bg-gradient-to-l from-[#F8B515] hover:from-[#f8b415ec] to-[#0FC1C7] hover:to-[#0fc1c7e8] text-[#000] xl:text-[20px] lg:leading-[30px] lg:tracking-[0.8px] font-normal rounded-[10px]" onClick={() => { connected ? disconnect() : setVisible(true) }}>{connected ? `${publicKey?.toString().substring(0, 6)}...${publicKey?.toString().substring(publicKey?.toString().length - 6)}` : "Connect"}</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
