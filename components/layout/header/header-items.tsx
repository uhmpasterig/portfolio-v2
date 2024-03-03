import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { ThemeSwitcher } from '../../utils/theme-switcher';
import { HeaderButton } from './header-button';

export const HeaderItems = () => {
  return (
    <div className="flex items-center lg:space-x-4 md:space-x ">
      <HeaderButton
        className=""
        href="https://github.com/uhmpasterig"
        tooltip="My Personal Github"
        link={true}
        aria-label="Github Link Button"
      >
        <GitHubLogoIcon className="w-[1.2rem] h-[1.2rem]" />
      </HeaderButton>
    </div>
  );
};
