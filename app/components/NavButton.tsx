import { NavLink } from "react-router";

interface NavButtonProps {
  url: string;
  label: string;
  isActive: boolean;
}

export default function NavButton({ url, label, isActive }: NavButtonProps) {
  return (
    <li className={`flex items-stretch uppercase`}>
      <NavLink
        to={url}
        className={`flex place-items-center px-5 ${isActive ? "text-red-600" : "text-gray-800 hover:text-red-600"}`}
      >
        {label}
      </NavLink>
    </li>
  )
}