import { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
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
           active ? "bg-gray-800" : "bg-gray-800 overflow-hidden"
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
              active ? "text-white" : "text-black"
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

        <div className="w-96 bg-black h-12 rounded-l-full rounded-r-full p-2">
            <div className>
            <img src="https://img.imageboss.me/rinse-fm/cover:smart/600x600/format:webp/120224-Rinse-Playlist-Cover-Website-Spotify.png"  alt="" loading="lazy" className= "object-cover h-10 w-10 rounded-l-full" />
            </div>
         
        </div>
      </nav>
    </>
  );
}

export default NavBar;