import { Link } from "react-router";

export default function HelpBanner() {
  return (
    <div className="bg-offblack text-white text-center p-4 flex flex-col place-items-center gap-6 w-full h-auto py-10 text-3xl font-main">
      <span className="font-light">Need Help from Our Team?</span>
      <span className="text-4xl font-heading font-semithick">WE ARE ACCEPTING PATIENTS</span>
      <Link
        to="/our-services"
        className="text-[1rem] tracking-wider bg-button text-white font-semibold border-2 border-neutral-800 m-2 py-4 px-6.5 rounded-xs hover:bg-white hover:text-offblack transition"
      >
        BOOK A FREE APPOINTMENT
      </Link>
    </div>
  );
}