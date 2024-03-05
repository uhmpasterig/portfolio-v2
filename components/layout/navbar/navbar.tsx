import { fetchNavbarItems } from '@/lib/utils';
import { NavbarItem } from './navbar-item';
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

      {/*  NOT NEEDED ANYMORE DUE TO SSR
      {navbarItems.length === 0 && (
        <div className="flex items-center space-x-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <NavbarItem.Placeholder key={i} />
          ))}
        </div>
      )} */}
    </nav>
  );
};
