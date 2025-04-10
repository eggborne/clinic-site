

interface HamburgerProps {
  clickAction: () => void;
  isOpen: boolean;
}

export default function Hamburger({ clickAction, isOpen }: HamburgerProps) {

  return (
    <div className="lg:hidden asspect-square">
      <button
        onClick={clickAction}
        className="relative h-12 aspect-square flex justify-center items-center"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        <span
          className={`absolute h-1 rounded w-8 bg-black transition-all duration-300 ${isOpen ? "rotate-45" : "-translate-y-2.5"
            }`}
        />
        <span
          className={`absolute h-1 rounded w-8 bg-black transition-all duration-300 ${isOpen ? "opacity-0" : "opacity-100"
            }`}
        />
        <span
          className={`absolute h-1 rounded w-8 bg-black transition-all duration-300 ${isOpen ? "-rotate-45" : "translate-y-2.5"
            }`}
        />
      </button>
    </div>
  );
}