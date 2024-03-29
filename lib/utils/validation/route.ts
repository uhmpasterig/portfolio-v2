export const isItemActive = (pathname: string, href: string) => {
  if (href === '/') {
    return pathname === href;
  }
  pathname = pathname.split('?')[0].split('#')[0];
  return pathname.startsWith(href);
};
