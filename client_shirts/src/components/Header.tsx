import Logo from '../assets/logo_desktop2.png';
import AuthIcon from './navbar/AuthIcon';
import LanguageSelector from './navbar/LanguageSelector';
import Navbar from './navbar/Navbar';

const Header = () => {
  return (
    <header
      className={
        'mx-auto max-w-7xl h-min flex flex-row justify-between items-center relative'
      }
    >
      <img src={Logo} alt={'Logo'} className={'w-40 h-auto'} />
      <Navbar />
    </header>
    // <header
    //   className={'pointer-events-none relative z-50 flex flex-row'}
    //   style={{
    //     height: 'var(--header-height)',
    //     marginBottom: 'var(--header-mb)',
    //   }}
    // >
    //   <div
    //     className={'order-last mt-[calc(spacing.16)-theme(spacing.3)]'}
    //   ></div>
    //   <div
    //     className={'sm:px-8 top-0 order-last -mb-3 pt-3'}
    //     style={{ position: 'var(--header-position)' }}
    //   >
    //     <div className={'mx-auto max-w-7xl lg:px-8'}>
    //       <div className="relative px-4 sm:px-8 lg:px-12">
    //         <div className="mx-auto max-w-2xl lg:max-w-5xl">
    //           <div
    //             className={'top-[var(--avatar-top, theme(spacing.3))] w-full'}
    //             style={{ position: 'var(--header-inner-position)' }}
    //           >
    //             <div className="relative">
    //               <img src={Logo} alt={'Logo'} className={'w-40 h-auto'} />
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div
    //     className={'top-0 z-10 h-16 pt-6'}
    //     style={{ position: 'var(--header-position)' }}
    //   >
    //     <div
    //       className={'sm:px-8 top-[var(--header-top,theme(spacing.6))] w-full'}
    //       style={{ position: 'var(--header-inner-position)' }}
    //     >
    //       <div className={'mx-auto max-w-7xl lg:px-8'}>
    //         <div className="relative px-4 sm:px-8 lg:px-12">
    //           <div className="mx-auto max-w-2xl lg:max-w-5xl">
    //             <div className="relative flex gap-4">
    //               <div className="flex flex-1"></div>
    //               <div className="flex flex-1 justify-end md:justify-center">
    //                 <Navbar />
    //               </div>
    //               <div className="flex justify-end md:flex-1">
    //                 <div className="pointer-events-auto">
    //                   <button
    //                     type={'button'}
    //                     aria-label={'Toggle dark mode'}
    //                     className={
    //                       'group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20'
    //                     }
    //                   >
    //                     <svg
    //                       viewBox="0 0 24 24"
    //                       aria-hidden="true"
    //                       className="hidden h-6 w-6 fill-zinc-700 stroke-zinc-500 transition dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-400 [@media_not_(prefers-color-scheme:dark)]:fill-teal-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-teal-500"
    //                     >
    //                       <path
    //                         d="M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z"
    //                         stroke-width="1.5"
    //                         stroke-linecap="round"
    //                         stroke-linejoin="round"
    //                       ></path>
    //                     </svg>
    //                   </button>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </header>
  );
};

export default Header;
