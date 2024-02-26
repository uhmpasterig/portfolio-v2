'use client';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useTheme } from 'next-themes';
import { HeaderButton } from '../layout/header/header-button';

export const ThemeSwitcher = () => {
  const { theme, resolvedTheme, setTheme } = useTheme();

  const currentTheme = theme === 'undefined' ? resolvedTheme : theme;
  const Icon = currentTheme === 'dark' ? SunIcon : MoonIcon;

  return (
    <HeaderButton tooltip="Toggle Theme" onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}>
      <Icon className="w-[1.2rem] h-[1.2rem]" />
    </HeaderButton>
  );
};
