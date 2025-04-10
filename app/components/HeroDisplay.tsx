import { Link } from "react-router";
import heroImage from "../assets/slides/mirror-daughter-mother.jpg.jpeg";

const serviceData = {
  verb: "treat",
  name: "personality",
  description: "disorder"
}

export default function HeroDisplay() {

  return (
    <div
      className="relative w-full h-[90dvh] bg-black/10 flex items-center"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'auto 100%',
        backgroundPosition: 'top',
      }}
    >
      <div className="absolute left-[50%] -translate-x-[50%] text-offblack font-semithick flex flex-col gap-1 w-[80dvw] lg:w-[70dvw]">
        <div className="text-3xl capitalize">We {serviceData.verb}</div>
        <div className="flex gap-1 flex-wrap">
          <div className="text-4xl mr-2 lg:text-6xl font-thick text-shadow-xs text-shadow-black/20 text-highlight uppercase font-hero">{serviceData.name}</div>
          <div className="text-3xl self-end capitalize">{serviceData.description}</div>

        </div>
        <div className="font-main text-xl lg:text-2xl font-light text-gray-700">We will help you achieve recovery</div>
        <div className="flex flex-wrap gap-2 mt-6">
          <Link
            to="/our-services"
            className="w-full lg:w-auto lg:max-w-[30dvw] text-[1rem] bg-button text-white font-semibold border-neutral-800 py-4 px-6 text-center rounded-xs hover:bg-offblack transition"
          >
            Book A Free Appointment
          </Link>
          <Link
            to="/contact"
            className="w-full lg:w-auto lg:max-w-[30dvw] bg-gray-500 text-gray-100 py-4 px-6 text-center font-semibold hover:underline"
          >
            Learn More &gt;
          </Link>
        </div>
      </div>
    </div>
  );
}