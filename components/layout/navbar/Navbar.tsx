import { fetchNavbarItems } from '@/lib/utils';
import { NavbarItem } from './NavbarItem';
import type { NavbarItems } from '@/types';

export const Navbar = async () => {
  const navbarItems = await fetchNavbarItems();
  return (
    <nav className="flex justify-start items-center md:space-x-8 space-x-4">
      {navbarItems.map((item) => (
        <NavbarItem key={item.label} href={item.href}>
          {item.label}
        </NavbarItem>
      ))}
    </nav>
  );
};
