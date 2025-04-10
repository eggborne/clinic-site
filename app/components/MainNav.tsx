import { useState } from "react";
import { NavLink } from "react-router";
import NavButton from "./NavButton";

interface MainNavProps {
  isOpen: boolean;
}

export default function MainNav({ isOpen }: MainNavProps) {

  const [isDisordersMenuOpen, setIsDisordersMenuOpen] = useState(false);
  const toggleDisordersMenu = () => setIsDisordersMenuOpen(!isDisordersMenuOpen);

  return (
    <nav className="font-menu font-bold text-sm h-16 max-w-[75dvw]">
      <ul
        className={`uppercase hidden lg:flex absolute h-full lg:static font-semibold lg:bg-transparent 
          grid-cols-5
          shadow lg:shadow-none z-50 transition-all duration-300 ease-in-out`}
      >
        <li className={`flex justify-center items-center px-4 min-w-[min-content]`}>
          <NavButton isActive={true} label={'home'} url={'/'} />
        </li>


        <li className={`relative flex justify-center items-center px-4 min-w-[min-content]`}>
          <button
            onClick={toggleDisordersMenu}
            className="text-gray-800 cursor-pointer hover:text-banner"
          >
            ADDICTIONS & DISORDERS
          </button>
          <ul
            className={`absolute left-0 top-20 bg-white shadow-lg rounded-md p-4 space-y-2 w-72 z-40 ${isDisordersMenuOpen ? "block" : "hidden"
              }`}
          >
            <li><NavLink to="/eating-disorders">Eating Disorders</NavLink></li>
            <li><NavLink to="/personality-disorders">Personality Disorder</NavLink></li>
            <li><NavLink to="/body-image-dysmorphic-disorder">Body Image Dysmorphic Disorder</NavLink></li>
            <li><NavLink to="/trauma-and-dissociation-disorder">Trauma and Dissociation Disorder</NavLink></li>
            <li><NavLink to="/drugs-and-substance-addiction">Drugs and Substance Addiction</NavLink></li>
            <li><NavLink to="/internal-family-systems-therapy">Internal Family Systems Therapy</NavLink></li>
            <li><NavLink to="/post-traumatic-stress-disorder-ptsd">PTSD</NavLink></li>
            <li><NavLink to="/sex-addiction">Sex Addiction</NavLink></li>
            <li><NavLink to="/gambling">Gambling Addiction</NavLink></li>
            <li><NavLink to="/bullying-disorder">Bullying Disorder</NavLink></li>
            <li><NavLink to="/alcoholism">Alcoholism Addiction</NavLink></li>
            <li><NavLink to="/self-harm">Self-Harm</NavLink></li>
            <li><NavLink to="/sexual-abuse-disorder">Sexual Abuse Disorder</NavLink></li>
            <li><NavLink to="/suicide-ideation-disorder">Suicide Ideation Disorder</NavLink></li>
            <li><NavLink to="/obsessive-compulsive-personality-disorder-ocpd">OCPD</NavLink></li>
          </ul>
        </li>
        <li className={`flex justify-center items-center px-4 min-w-[min-content]`}>
          <NavButton isActive={false} label={'military / first responders'} url={'/military-and-first-responders'} />
        </li>
        <li className={`flex justify-center items-center px-4 min-w-[min-content]`}>
          <NavButton isActive={false} label={'contact'} url={'/contact'} />
        </li>
        <li className={`flex justify-center items-center px-4 min-w-[min-content]`}>
          <NavButton isActive={false} label={'blog'} url={'/blog'} />
        </li>
      </ul>
    </nav>
  );
}
