import { useLocation } from "react-router-dom";
import { navLinks } from "../../constants/data";
import NavLink from "./NavLink";

const Sidebar = () => {
  const { pathname } = useLocation();
  const [topLinks, bottomLinks] = [navLinks.slice(0, 4), navLinks.slice(4)];

  const renderNavLinks = (links) => (
    <ul className="space-y-2">
      {links.map((link) => (
        <NavLink
          key={link.label}
          link={link}
          isActive={pathname === link.route}
        />
      ))}
    </ul>
  );

  return (
    <aside className="w-16 md:w-20 lg:w-56 transition-all duration-300 flex flex-col border-r border-borderGray">
      <nav className="flex-1 my-6 flex flex-col">
        <div className="overflow-y-auto flex-grow">
          {renderNavLinks(topLinks)}
        </div>
        <div className="mt-auto">
          {renderNavLinks(bottomLinks)}
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
