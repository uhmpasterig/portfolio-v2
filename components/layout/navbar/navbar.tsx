'use client';
import { useState, useEffect } from 'react';
import { fetchNavbarItems } from '@/lib/utils';
import { NavbarItem } from './navbar-item';
import type { NavbarItems } from '@/sanity/schemas';

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
  const [items, setItems] = useState<NavbarItems>([]);
  useEffect(() => {
    fetchNavbarItems().then((items) => {
      setItems(items);
    });
  }, []);

  return (
    <div className="flex items-center md:space-x-8 space-x-4">
      {items.map((item) => (
        <NavbarItem key={item.label} href={item.href}>
          {item.label}
        </NavbarItem>
      ))}
    </div>
  );
};
