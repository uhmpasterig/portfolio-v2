import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { ThemeSwitcher } from '../../utils/theme-switcher';
import { HeaderButton } from './header-button';

export const HeaderItems = () => {
  return (
    <div className="flex items-center space-x-2">
      <HeaderButton href="https://github.com/uhmpasterig" tooltip="My Personal Github" link={true}>
        <GitHubLogoIcon className="w-[1.2rem] h-[1.2rem]" />
      </HeaderButton>
      <ThemeSwitcher />
    </div>
  );
};