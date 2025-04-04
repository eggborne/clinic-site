// src/components/MainNav.tsx
import { useState } from "react";
import { Link, NavLink } from "react-router";

export default function MainNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDisordersMenuOpen, setIsDisordersMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDisordersMenu = () => {
    setIsDisordersMenuOpen(!isDisordersMenuOpen);
  };

  return (
    <nav className="main-nav">
      <button
        className="mobile-menu-toggle"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span className="menu-icon"></span>
        <span className="menu-text">Toggle menu</span>
      </button>

      <ul className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
        <li className="nav-item">
          <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>HOME</NavLink>
        </li>
        <li className="nav-item has-dropdown">
          <button
            className="dropdown-toggle"
            onClick={toggleDisordersMenu}
          >
            ADDICTIONS & DISORDERS
          </button>
          <ul className={`dropdown-menu ${isDisordersMenuOpen ? 'open' : ''}`}>
            <li><NavLink to="/eating-disorders">Eating Disorders</NavLink></li>
            <li><NavLink to="/personality-disorders">Personality Disorder</NavLink></li>
            <li><NavLink to="/body-image-dysmorphic-disorder">Body Image Dysmorphic Disorder</NavLink></li>
            <li><NavLink to="/trauma-and-dissociation-disorder">Trauma and Dissociation Disorder</NavLink></li>
            <li><NavLink to="/drugs-and-substance-addiction">Drugs and Substance Addiction</NavLink></li>
            <li><NavLink to="/internal-family-systems-therapy">Internal Family Systems Therapy</NavLink></li>
            <li><NavLink to="/post-traumatic-stress-disorder-ptsd">Post Traumatic Stress Disorder – PTSD</NavLink></li>
            <li><NavLink to="/sex-addiction">Sex Addiction</NavLink></li>
            <li><NavLink to="/gambling">Gambling Addiction</NavLink></li>
            <li><NavLink to="/bullying-disorder">Bullying Disorder</NavLink></li>
            <li><NavLink to="/alcoholism">Alcoholism Addiction</NavLink></li>
            <li><NavLink to="/self-harm">Self-Harm</NavLink></li>
            <li><NavLink to="/sexual-abuse-disorder">Sexual Abuse Disorder</NavLink></li>
            <li><NavLink to="/suicide-ideation-disorder">Suicide Ideation Disorder</NavLink></li>
            <li><NavLink to="/obsessive-compulsive-personality-disorder-ocpd">Obsessive-Compulsive Personality Disorder (OCPD)</NavLink></li>
          </ul>
        </li>
        <li className="nav-item">
          <NavLink to="/military-and-first-responders" className={({ isActive }) => isActive ? "active" : ""}>
            MILITARY / FIRST RESPONDERS
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>CONTACT</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/blog" className={({ isActive }) => isActive ? "active" : ""}>BLOG</NavLink>
        </li>
      </ul>
    </nav>
  );
}