import { t } from 'i18next';

const now = new Date().getFullYear();

export const Footer = () => (
  <footer
    className={
      'box-border flex-shrink-0 w-full h-min flex flex-col justify-center items-center p-24 overflow-hidden relative content-center flex-nowrap gap-10'
    }
  >
    <div
      className={
        'flex-shrink-0 w-full h-min flex flex-col justify-center items-center max-w-full overflow-visible relative p-0 content-center flex-nowrap gap-0'
      }
    >
      <div
        className={
          'flex-shrink-0 w-min h-min flex flex-row justify-center items-center overflow-hidden relative p-0 content-center flex-nowrap gap-10'
        }
      >
        <a
          href={'https://www.instagram.com/foto.miranda/'}
          target={'_blank'}
          rel={'noopener noreferrer'}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32">
            <path d="M 0 0 L 32 0 L 32 32 L 0 32 Z" fill="transparent"></path>
            <path d="M 12 16 C 12 13.791 13.791 12 16 12 C 18.209 12 20 13.791 20 16 C 20 18.209 18.209 20 16 20 C 13.791 20 12 18.209 12 16 Z"></path>
            <path d="M 21.5 3.5 L 10.5 3.5 C 6.634 3.5 3.5 6.634 3.5 10.5 L 3.5 21.5 C 3.5 25.366 6.634 28.5 10.5 28.5 L 21.5 28.5 C 25.366 28.5 28.5 25.366 28.5 21.5 L 28.5 10.5 C 28.5 6.634 25.366 3.5 21.5 3.5 Z M 16 22 C 12.686 22 10 19.314 10 16 C 10 12.686 12.686 10 16 10 C 19.314 10 22 12.686 22 16 C 22 19.314 19.314 22 16 22 Z M 22.5 11 C 21.672 11 21 10.328 21 9.5 C 21 8.672 21.672 8 22.5 8 C 23.328 8 24 8.672 24 9.5 C 24 10.328 23.328 11 22.5 11 Z"></path>
          </svg>
        </a>
        <a
          href={'https://www.facebook.com/Mirandacomarte'}
          target={'_blank'}
          rel={'noopener noreferrer'}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32">
            <path d="M 29 16 C 28.992 22.575 24.083 28.112 17.556 28.907 C 17.414 28.924 17.272 28.878 17.166 28.783 C 17.059 28.687 16.999 28.55 17 28.407 L 17 19 L 20 19 C 20.277 19.001 20.542 18.886 20.732 18.684 C 20.921 18.482 21.018 18.21 21 17.934 C 20.954 17.4 20.504 16.993 19.969 17 L 17 17 L 17 14 C 17 12.895 17.895 12 19 12 L 21 12 C 21.277 12.001 21.542 11.886 21.732 11.684 C 21.921 11.482 22.018 11.21 22 10.934 C 21.954 10.399 21.503 9.991 20.966 10 L 19 10 C 16.791 10 15 11.791 15 14 L 15 17 L 12 17 C 11.723 16.999 11.458 17.114 11.268 17.316 C 11.079 17.518 10.982 17.79 11 18.066 C 11.046 18.601 11.497 19.009 12.034 19 L 15 19 L 15 28.41 C 15.001 28.553 14.941 28.689 14.835 28.785 C 14.729 28.88 14.587 28.926 14.445 28.91 C 7.731 28.092 2.762 22.27 3.009 15.511 C 3.259 8.761 8.726 3.274 15.481 3.011 C 19.015 2.874 22.452 4.181 25.002 6.631 C 27.552 9.081 28.996 12.464 29 16 Z"></path>
          </svg>
        </a>
      </div>
      <span
        className={
          'flex-shrink-0 w-full h-8 block overflow-hidden relative rounded-none'
        }
      />
      <p
        className={
          'flex-shrink-0 w-full h-auto whitespace-pre-wrap break-words overflow-hidden relative font-medium font-serif text-base leading-normal text-center'
        }
      >
        © {now} FotoMiranda. All rights reserved
      </p>
      <p
        className={
          'flex-shrink-0 w-full h-auto whitespace-pre-wrap break-words overflow-hidden relative opacity-50 font-medium font-serif text-base tracking-normal leading-normal text-center'
        }
      >
        {t('footer1')}
      </p>
    </div>
  </footer>
);
