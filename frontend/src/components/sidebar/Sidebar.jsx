import { useLocation } from "react-router-dom";
import { navLinks } from "../../constants/data";
import NavLink from "./NavLink";

const Sidebar = () => {
  const { pathname } = useLocation();
  const topLinks = navLinks.slice(0, 4);
  const bottomLinks = navLinks.slice(4);

  const renderNavLinks = (links) => (
    <ul className="flex justify-around sm:justify-start sm:flex-col sm:space-y-2">
      {links.map((link) => (
        <NavLink key={link.label} link={link} isActive={pathname === link.route} />
      ))}
    </ul>
  );

  return (
    <aside className="fixed bottom-0 left-0 right-0 sm:static sm:w-16 md:w-20 lg:w-56 transition-all duration-300 flex sm:flex-col border-t sm:border-t-0 sm:border-r border-borderGray bg-white z-10">
      <nav className="flex-1 py-2 sm:py-6 flex sm:flex-col w-full overflow-x-auto sm:overflow-x-visible">
        <div className="w-full">{renderNavLinks(topLinks)}</div>
        <div className="hidden sm:block sm:mt-auto">
          {renderNavLinks(bottomLinks)}
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
