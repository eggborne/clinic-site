import { NavLink } from "react-router";

interface NavButtonProps {
  url: string;
  label: string;
  isActive: boolean;
}

export default function NavButton({ url, label, isActive }: NavButtonProps) {
  return (
    <NavLink
      to={url}
      className={`text-center ${isActive ? "text-highlight" : "text-gray-800 hover:text-banner"}`}
    >
      {label}
    </NavLink>
  )
}