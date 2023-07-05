import { index } from '../assets/home';

const Quote = () => (
  <section className={'mt-16 sm:mt-20'}>
    <div
      className={
        '-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8'
      }
    >
      {index.map((img, index) => (
        <div
          key={index}
          className={`relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl ${
            index % 2 === 0 ? 'rotate-2' : '-rotate-2'
          }`}
        >
          <img
            src={img}
            alt={''}
            className={'absolute inset-0 h-full w-full object-cover'}
          />
        </div>
      ))}
    </div>
  </section>
);

export default Quote;
