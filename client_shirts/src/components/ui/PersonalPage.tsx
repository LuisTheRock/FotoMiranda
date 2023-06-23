import React from 'react';

interface IPersonalPage {
  src: string;
  alt: string;
  personName: string;
  role: string;
}

const PersonalPage = ({ src, alt, personName, role }: IPersonalPage) => {
  return (
    <div
      className={
        'box-border flex-shrink-0 flex-1 h-[300px] flex flex-col justify-center items-center p-10 bg-[#323144] overflow-visible relative content-center flex-nowrap gap-5 rounded-[30px]'
      }
    >
      <img
        src={src}
        alt={alt}
        className={
          'flex-shrink-0 w-[80px] h-[80px] block overflow-hidden relative aspect-square bg-cover bg-no-repeat bg-center rounded-[64px]'
        }
      />
      <div
        className={
          'flex-shrink-0 w-full h-min flex flex-col justify-start items-center overflow-hidden flex-1 relative p-0 content-center flex-nowrap gap-2'
        }
      >
        <h3
          className={
            'flex-shrink-0 w-full h-min whitespace-pre-wrap break-words overflow-visible flex-1 relative font-normal font-serif text-white text-xl tracking-normal leading-[1.4] uppercase text-center'
          }
        >
          {personName}
        </h3>
        <p
          className={
            'flex-shrink-0 w-full h-auto whitespace-pre-wrap break-words overflow-visible flex-1 relative font-normal font-mono text-white text-base tracking-normal leading-normal text-center'
          }
        >
          {role}
        </p>
      </div>
    </div>
  );
};

export default PersonalPage;
