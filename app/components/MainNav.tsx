import { useState } from "react";
import { NavLink } from "react-router";
import NavButton from "./NavButton";

export default function MainNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDisordersMenuOpen, setIsDisordersMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDisordersMenu = () => setIsDisordersMenuOpen(!isDisordersMenuOpen);

  return (
    <nav className="text-sm flex items-stretch">
      {/* Mobile menu toggle */}
      <button
        onClick={toggleMenu}
        aria-label="Toggle menu"
        className="md:hidden p-2 text-gray-600 hover:text-red-600 focus:outline-none"
      >
        ☰
      </button>

      <ul
        className={`absolute md:static font-semibold md:bg-transparent flex flex-col md:flex-row items-stretch gap-2 md:gap-0 md:p-0 shadow md:shadow-none z-50 transition-all duration-300 ease-in-out ${isMenuOpen ? "block" : "hidden md:flex"
          }`}
      >
        <NavButton isActive={true} label={'home'} url={'/'} />

        <li className="relative flex items-stretch">
          <button
            onClick={toggleDisordersMenu}
            className="flex place-items-center px-5 text-gray-800 cursor-pointer hover:text-red-600"
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

        <NavButton isActive={false} label={'military / first responders'} url={'/military-and-first-responders'} />
        <NavButton isActive={false} label={'contact'} url={'/contact'} />
        <NavButton isActive={false} label={'blog'} url={'/blog'} />

      </ul>
    </nav>
  );
}
