import { t } from 'i18next';

import FacebookIcon from '../assets/facebook.png';
import InstagramIcon from '../assets/instagram.png';
import ISocialMediaHyperLink from '../interfaces/ISocialMediaHyperLink';
import Section from './ui/Section';

const socialMedia: ISocialMediaHyperLink[] = [
  {
    href: 'https://www.facebook.com/Mirandacomarte',
    target: '_blank',
    rel: 'noopener noreferrer',
    src: FacebookIcon,
    alt: 'facebook fotomiranda',
    imageProps: 'h-11 w-11 mx-2',
  },
  {
    href: 'https://www.instagram.com/foto.miranda/',
    target: '_blank',
    rel: 'noopener noreferrer',
    src: InstagramIcon,
    alt: 'instagram fotomiranda',
    imageProps: 'h-10 w-10 mx-2',
  },
];

export const Footer = () => {
  const now = new Date().getFullYear();
  const footerParagraph = [t('footer1')];

  return (
    <footer
      className={'pt-6 md:p-3 pb-12 bg-transparent bg-white font-poppins'}
    >
      <Section>
        <div
          className={'col-start-1 col-end-13 border-t-[1px] border-red-900'}
        />
        <div className={'col-span-10 flex md:flex-row flex-col'}>
          <p className={'mr-5 py-2 font-Cormorant font-medium text-xl'}>
            Copyright © FotoMiranda 2006 - {now}
          </p>
          {footerParagraph.map((paragraph, index) => (
            <p
              key={index}
              className={'mr-5 font-Cormorant font-medium text-xl py-2'}
            >
              {paragraph}
            </p>
          ))}
        </div>
        <div className={'col-start-11 col-end-13 items-center'}>
          <div className={'flex md:flex-row flex-col align-middle justify-end'}>
            {socialMedia.map(
              ({ href, target, rel, src, alt, imageProps }, index) => (
                <ul key={index} className={'md:pb-0 pb-2'}>
                  <li>
                    <a href={href} target={target} rel={rel}>
                      <img className={imageProps} src={src} alt={alt} />
                    </a>
                  </li>
                </ul>
              )
            )}
          </div>
        </div>
      </Section>
    </footer>
  );
};
