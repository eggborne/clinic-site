// src/components/Logo.tsx
import { Link } from "react-router";
import logoImage from "../assets/wd-recovery-and-wellness-center.png";

export default function Logo() {
  return (
    <div className="logo">
      <Link to="/" className="logo-link">
        <img
          src={logoImage}
          alt="WD Recovery & Wellness Center"
          className="logo-img"
        />
      </Link>
    </div>
  );
}