import { indexWedding } from '../assets/portfolio/wedding/IndexWedding';
import Carousel2 from '../components/ui/Carousel2';

const ImagesDisplay = () => {
  return (
    <section
      className={
        'box-border flex-shrink-0 w-full h-min flex flex-col justify-start items-center p-24 overflow-hidden relative content-center flex-nowrap gap-60'
      }
    >
      {/** Transform component */}
      <div
        className={
          'flex-shrink-0 w-full h-min flex flex-row justify-center items-center max-w-full overflow-hidden relative content-center flex-nowrap gap-60'
        }
      >
        <div
          className={
            'flex-shrink-0 flex-1 w-[1px] block overflow-hidden relative bg-cover bg-repeat bg-center rounded-[40px]'
          }
        >
          <Carousel2 images={indexWedding} altName={'fotoMiranda weeding'} />
        </div>
        <div
          className={
            'flex-shrink-0 flex-1 w-[1px] h-min flex flex-col justify-center items-start overflow-hidden relative p-0 content-start flex-nowrap gap-20'
          }
        >
          <h3
            className={
              'flex-shrink-0 w-full h-auto whitespace-pre-wrap break-words overflow-visible relative font-normal font-Cormorant text-5xl text-left leading-[1.2]'
            }
          >
            Wedding
          </h3>
        </div>
      </div>
    </section>
  );
};

export default ImagesDisplay;
