import { Link } from "react-router";
import bannerBgImage from "./../assets/working-team.jpg.jpeg";

export default function HelpBanner() {
  return (
    <div
      className="relative text-white text-center p-4 flex flex-col place-items-center gap-6 w-full h-auto py-10 text-3xl font-main"
      style={{
        backgroundImage: `url(${bannerBgImage})`,
        backgroundPosition: 'center',        
      }}
    >
      <div className="absolute inset-0 bg-[#212121ee]"></div>
      <span className="z-1 font-light">Need Help from Our Team?</span>
      <span className="z-1 text-4xl font-heading font-semithick">WE ARE ACCEPTING PATIENTS</span>
      <Link
        to="/our-services"
        className="z-1 text-[1rem] tracking-wider bg-button text-white font-semibold border-2 border-neutral-800 m-2 py-4 px-6.5 rounded-xs hover:bg-white hover:text-offblack transition"
      >
        BOOK A FREE APPOINTMENT
      </Link>
    </div>
  );
}