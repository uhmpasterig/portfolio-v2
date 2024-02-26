import { NAVBAR_ITEMS } from '@/lib/constants';
import { NavbarItem } from './navbar-item';

export const Navbar = () => {
  return (
    <nav className="flex justify-start">
      <div className="flex items-center space-x-8">
        <NavbarItems />
      </div>
    </nav>
  );
};

const NavbarItems = () => {
  return (
    <div className="flex items-center space-x-8">
      {NAVBAR_ITEMS.map((item) => (
        <NavbarItem key={item.label} href={item.href}>
          {item.label}
        </NavbarItem>
      ))}
    </div>
  );
};
