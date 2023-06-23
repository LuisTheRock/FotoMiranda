import ImageUncles from '../../assets/tios.jpg';
import PersonalPage from '../../components/ui/PersonalPage';

const personsWork = [
  {
    src: ImageUncles,
    personName: 'Ricardo Miranda',
    role: 'Lead Photographer',
  },
  {
    src: ImageUncles,
    personName: 'Eulália Miranda',
    role: 'Lead Photographer',
  },
  {
    src: ImageUncles,
    personName: 'Joaquim Miranda',
    role: 'Videographer',
  },
];

const Team = () => (
  <section
    className={
      'box-border flex-shrink-0 w-full h-min flex flex-col justify-center items-center p-24 overflow-hidden flex-1 relative content-center flex-nowrap gap-20'
    }
  >
    <title
      className={
        'flex-shrink-0 w-full h-min flex flex-col justify-start items-center max-w-full overflow-hidden flex-1 relative p-0 content-center flex-nowrap gap-10'
      }
    >
      <h2
        className={
          'flex-shrink-0 w-full h-auto whitespace-pre-wrap break-words overflow-visible flex-1 relative font-normal font-serif text-5xl tracking-normal leading-tight text-center'
        }
      >
        Our Lenses
      </h2>
      <h2
        className={
          'flex-shrink-0 w-[600px] h-auto whitespace-pre-wrap break-words max-w-full overflow-visible relative font-normal font-mono text-lg tracking-normal leading-normal text-center'
        }
      >
        Meet the talented professionals who’ll turn your wedding moments into
        memorable masterpieces.
      </h2>
    </title>
    <article
      className={
        'flex-shrink-0 w-full h-min flex md:flex-row flex-col justify-center items-center max-w-full overflow-visible flex-1 relative p-0 content-center flex-nowrap gap-10'
      }
    >
      {personsWork.map(({ src, personName, role }, index) => (
        <div key={index}>
          <PersonalPage
            src={src}
            alt={'fotoMiranda'}
            personName={personName}
            role={role}
          />
        </div>
      ))}
    </article>
  </section>
);

export default Team;
