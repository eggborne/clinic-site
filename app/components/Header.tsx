import { useState, useEffect } from "react";
import logoImage from "../assets/wd-recovery-and-wellness-center.png";
import { Link } from "react-router";
import MainNav from "./MainNav";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 80;

      if (window.scrollY > scrollThreshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>

      <div className="h-18 font-light text-small flex flex-col justify-center gap-1 text-mediumgray px-4 py-2">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-4">
                <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z" clipRule="evenodd" />
              </svg>
            </span>
            <span> Call Us Today! <strong>480-681-0453</strong></span>
            <span>|</span>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-4">
                <path fillRule="evenodd" d="m9.69 18.933.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 0 0 .281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 1 0 3 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 0 0 2.273 1.765 11.842 11.842 0 0 0 .976.544l.062.029.018.008.006.003ZM10 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z" clipRule="evenodd" />
              </svg>
            </span>
            <span> 6520 North 7th Street, Phoenix, AZ 85014</span>
            <span>|</span>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-4">
                <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-13a.75.75 0 0 0-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 0 0 0-1.5h-3.25V5Z" clipRule="evenodd" />
              </svg>
            </span>
            <span><strong>Hours of Operation:</strong> Monday - Friday: 9am to 9pm & Saturday: 9am to 1pm</span>
          </div>
        </div>
        <div className="text-center text-sm font-weight-400 mt-2">
          <strong>PARTIAL HOSPITAL PROGRAM</strong> (PHP) & <strong>INTENSIVE OUT PATIENT</strong> (IOP) | DAYTIME & EVENING PROGRAMS AVAILABLE!
        </div>
      </div>

      <div className={`w-full p-3 top-0 flex justify-between items-center z-50 ${isScrolled ? "bg-white py-2 shadow-md h-auto fixed" : "mt-18 bg-transparent absolute"}`}>
        <Link to="/" className="block">
          <img
            src={logoImage}
            alt="WD Recovery & Wellness Center"
            className={`w-auto object-contain transition-all duration-300 ${isScrolled ? "h-17.5" : "h-26"}`}
          />
        </Link>

        <div className="flex items-cnter gap-4">
          <MainNav />
          <button className="flex justify-center items-center cursor-pointer text-white h-8.5 bg-button aspect-square rounded-sm hover:bg-black transition" aria-label="Search">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className="size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </button>
        </div>
      </div>

    </header>
  );
}




// import TopBar from "./TopBar";
// import Logo from "./Logo";
// import MainNav from "./MainNav";
// import SearchButton from "./SearchButton";

// export default function Header() {
//   return (
//     <header className="bg-white shadow sticky top-0 z-50">
//       {/* <TopBar /> */}

//       <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
//         <Logo />
//         <MainNav />
//         <SearchButton />
//       </div>
//     </header>
//   );
// }
