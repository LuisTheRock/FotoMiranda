interface IPersonalPage {
  src: string;
  alt: string;
  personName: string;
  role: string;
}

const PersonalPage = ({ src, alt, personName, role }: IPersonalPage) => (
  <section
    className={
      'box-border flex-shrink-0 h-[300px] flex flex-col justify-center items-center p-10 bg-[#323144] overflow-visible relative content-center flex-nowrap gap-10 rounded-3xl text-white'
    }
  >
    <img
      src={src}
      alt={alt}
      className={
        'w-[80px] h-[80px] block aspect-square bg-cover bg-no-repeat bg-center rounded-full'
      }
    />
    <article className={'flex-shrink-0 flex flex-col justify-center gap-3'}>
      <h3
        className={
          'inline-flex justify-center font-normal font-Dosis text-xl leading-[1.4] uppercase'
        }
      >
        {personName}
      </h3>
      <span
        className={'inline-flex justify-center font-normal font-Montserrat'}
      >
        {role}
      </span>
    </article>
  </section>
);

export default PersonalPage;
