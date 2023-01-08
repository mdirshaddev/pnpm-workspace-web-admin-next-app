// Next
import { usePathname } from 'next/navigation';

// React
import { Fragment, useContext } from 'react';

// Class Utility
import clsx from 'clsx';

// React Icons
import { RxGithubLogo } from 'react-icons/rx';

// Shared Context
import { ThemeContext } from 'src/shared/contexts/theme/context';

// Shared Utilities
import { StyledLink } from 'src/shared/utilities';

interface NavListLinksProps {}

export default function NavListLinks({}: NavListLinksProps) {
  const pathname = usePathname();
  const { mode, presetColor } = useContext(ThemeContext);

  const NavLinks = [
    {
      href: '/',
      name: 'Home',
      key: '#Home'
    },
    {
      href: '/dashboard',
      name: 'Dashboard',
      key: '#Dashboard'
    },
    {
      href: '/blogs',
      name: 'Blogs',
      key: '#Blogs'
    },
    {
      href: '/projects',
      name: 'Projects',
      key: '#Projects'
    }
  ];

  return (
    <Fragment>
      <nav className='hidden md:flex flex-row'>
        <ul className='flex flex-row items-center mr-12'>
          {NavLinks.map(({ name, href, key }) => (
            <li
              key={key}
              className={clsx(
                'px-6 flex flex-row items-center',
                `${mode === 'dark' ? 'text-white' : 'text-black'}`
              )}>
              <span
                className={`${
                  pathname == href
                    ? `block w-2 h-2 rounded-full ${presetColor.name} mr-4`
                    : ''
                }`}
              />
              <StyledLink
                href={href}
                path={href}
                tailwindClass={clsx(``)}
                tailwindActiveClass={clsx(`text-green-500`)}>
                {name}
              </StyledLink>
            </li>
          ))}
        </ul>
        <GitHubIcon />
      </nav>
    </Fragment>
  );
}

function GitHubIcon() {
  return (
    <a
      className={clsx('hidden md:block', `bg-black rounded-lg p-2`)}
      title='Repository'
      target={'_blank'}
      href={'https://github.com/mdirshaddev/mdirshaddev.github.io'}>
      <RxGithubLogo className={`text-white text-3xl`} />
    </a>
  );
}
