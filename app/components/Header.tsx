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
            <span>📞 Call Us Today! <strong>480-681-0453</strong></span>
            <span>|</span>
            <span>📍 6520 North 7th Street, Phoenix, AZ 85014</span>
            <span>|</span>
            <span>⏰ <strong>Hours of Operation:</strong> Monday - Friday: 9am to 9pm & Saturday: 9am to 1pm</span>
          </div>
        </div>
        <div className="text-center text-sm mt-2">
          <strong>PARTIAL HOSPITAL PROGRAM</strong> (PHP) & <strong>INTENSIVE OUT PATIENT</strong> (IOP) | DAYTIME & EVENING PROGRAMS AVAILABLE!
        </div>
      </div>

      <div className={`w-full p-3 top-0 flex justify-between items-center z-50 ${isScrolled ? "bg-white py-2 shadow-md h-auto fixed" : "mt-18 bg-transparent absolute"}`}>
        <Link to="/" className="block">
          <img
            src={logoImage}
            alt="WD Recovery & Wellness Center"
            className={`w-auto object-contain transition-all duration-300 ${isScrolled ? "h-17.5" : "h-23"}`}
          />
        </Link>

        <div className="flex gap-4 self-stretch">
          <MainNav />
          <button className="self-center cursor-pointer text-white h-8 bg-red-500 aspect-square rounded-xs hover:bg-black transition" aria-label="Search">
            🔍
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
//       {/* Uncomment if you want to show the TopBar again */}
//       {/* <TopBar /> */}

//       <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
//         <Logo />
//         <MainNav />
//         <SearchButton />
//       </div>
//     </header>
//   );
// }
