// Next
import clsx from 'clsx';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';
import { ThemeContext } from 'src/shared/contexts/theme';

export default function BrandingLogo(): JSX.Element {
  const router = useRouter();
  return (
    <div className='flex flex-row items-center'>
      <div className='pl-2 cursor-pointer' onClick={() => router.push('/')}>
        <Image
          src={'/logo.svg'}
          width={55}
          height={55}
          quality={100}
          alt='Profile Picture'
        />
      </div>
      <VersionTag />
    </div>
  );
}

function VersionTag() {
  const { mode } = useContext(ThemeContext);
  return (
    <div className='ml-2'>
      <div
        className={clsx(
          'h-6 min-w-[22px] rounded-md cursor-default inline-flex items-center justify-center bg-[#00b8d929] font-bold whitespace-nowrap px-2 py-0 text-xs',
          `${mode === 'dark' ? 'text-darkCyan' : 'text-lightCyan'}`
        )}>
        v0.0.0
      </div>
    </div>
  );
}
