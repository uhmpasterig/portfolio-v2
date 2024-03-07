import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Tailwind CSS class merging
export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

// Style merging for inline styles
export const sm = (...styles: any[]) => {
  return Object.assign({}, ...styles);
};
