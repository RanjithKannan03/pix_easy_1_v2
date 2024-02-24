import { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdPlay } from "react-icons/io";
import { GoPlus } from "react-icons/go";
function NavBar() {
  const [active, setActive] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
        setActive(true);
      } else {
        setActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <nav
        className={`
         w-full flex items-center justify-between py-5 px-10 fixed top-0 z-20 ${
           active ? "bg-[#1A1A1A]" : "bg-transparent overflow-hidden text-white"
         }`}
      >
        <div className="flex">
          {active ? (
            <svg
              width="92"
              height="29"
              viewBox="0 0 92 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-white"
            >
              <path
                d="M0 23.8647H8.70726L11.4154 8.66794H2.70819L0 23.8647ZM12.3358 8.6614H26.7045L24.7379 20.0638H20.7981L24.0294 23.8647L17.8449 29L10.3097 20.0638L12.3358 8.6614ZM24.9233 23.8647H33.6305L36.3387 8.66794H27.6315L24.9233 23.8647ZM32.8625 7.90255C30.5516 7.90255 28.7373 6.13625 28.7373 3.91857C28.7373 1.7663 30.5516 0 32.8625 0C35.1734 0 37.0472 1.7663 37.0472 3.91857C37.0472 6.14279 35.1667 7.90255 32.8625 7.90255ZM34.5576 23.8647H43.2052L45.5426 11.1866C46.2511 11.1538 46.5292 11.337 46.4365 11.7949L44.1918 23.8647H52.9587L54.9915 12.4622L51.7602 8.6614H37.2591L34.5576 23.8647ZM53.8791 23.8647H66.493L71.0751 20.0638L71.4459 18.0555L68.2146 14.2547H72.1213L73.1079 8.6614H60.4939L55.9119 12.4622L55.5411 14.4706L58.7723 18.2387H54.8922L53.8791 23.8647ZM82.0336 18.2387H81.047L82.1859 11.7622C82.2786 11.3043 82.6163 11.1211 83.2917 11.1538L82.0336 18.2387ZM91.8202 8.6614H74.0349L72.0021 20.0638L75.2003 23.8647H84.7087L81.4774 20.0638H89.7874L91.8202 8.6614Z"
                fill="currentColor"
              ></path>
            </svg>
          ) : (
            <svg
              width="92"
              height="29"
              viewBox="0 0 92 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 23.8647H8.70726L11.4154 8.66794H2.70819L0 23.8647ZM12.3358 8.6614H26.7045L24.7379 20.0638H20.7981L24.0294 23.8647L17.8449 29L10.3097 20.0638L12.3358 8.6614ZM24.9233 23.8647H33.6305L36.3387 8.66794H27.6315L24.9233 23.8647ZM32.8625 7.90255C30.5516 7.90255 28.7373 6.13625 28.7373 3.91857C28.7373 1.7663 30.5516 0 32.8625 0C35.1734 0 37.0472 1.7663 37.0472 3.91857C37.0472 6.14279 35.1667 7.90255 32.8625 7.90255ZM34.5576 23.8647H43.2052L45.5426 11.1866C46.2511 11.1538 46.5292 11.337 46.4365 11.7949L44.1918 23.8647H52.9587L54.9915 12.4622L51.7602 8.6614H37.2591L34.5576 23.8647ZM53.8791 23.8647H66.493L71.0751 20.0638L71.4459 18.0555L68.2146 14.2547H72.1213L73.1079 8.6614H60.4939L55.9119 12.4622L55.5411 14.4706L58.7723 18.2387H54.8922L53.8791 23.8647ZM82.0336 18.2387H81.047L82.1859 11.7622C82.2786 11.3043 82.6163 11.1211 83.2917 11.1538L82.0336 18.2387ZM91.8202 8.6614H74.0349L72.0021 20.0638L75.2003 23.8647H84.7087L81.4774 20.0638H89.7874L91.8202 8.6614Z"
                fill="currentColor"
              ></path>
            </svg>
          )}
          <div
            className={`ml-5 flex space-x-5 ${
              active ? "text-white" : "text-white"
            } `}
          >
            <div>Home</div>
            <div>Artist</div>
            <div>Schedule</div>
            <div>Label</div>
            <div>Shop</div>
            <div>Channel</div>
            <div>Search</div>
            <IoSearchOutline size={23} />
          </div>
        </div>

        <div className="w-96 bg-black flex h-12 rounded-l-full rounded-r-full p-1 items-center">
            <div className = " flex items-center "> 
            <img src="https://img.imageboss.me/rinse-fm/cover:smart/600x600/format:webp/120224-Rinse-Playlist-Cover-Website-Spotify.png"  alt="" loading="lazy" className= "object-contain h-11 w-11 rounded-l-full" />
            </div>
            <div className= "flex flex-col px-2 py-1 ml-3">
                <div className= "flex text-gray-400">
                    <div className= "text-[11px]">UK</div>
                    <div className = "text-[7px] mt-1 pl-1 pb-[1px]">2:30</div>
                </div>
                <div className="text-xs font-semibold text-white text-nowrap">
                        Ben Hauke Presents Club...
                </div>
            </div> 
            <div className= " flex text-[8px] text-white w-14 h-4 rounded-l-full rounded-r-full border border-white bg-transparent items-center justify-center font-semibold">
                <div className= "h-2 w-2 bg-white rounded-full"></div>
                <div className="ml-1 flex flex-row text-nowrap text-[10px]"> ON AIR </div>
            </div>

            <div className= "w-[1px] ml-2 bg-gray-400 h-full">
                
            </div>
            <div className= "w-9 h-9 rounded-full bg-white flex  flex-row items-center justify-center ml-2 px-auto">
                <IoMdPlay size={24} className= "ml-1 text-black"/>
            </div>
            <div>
            <GoPlus size={23} className="ml-1 text-gray-400"/>
            </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;