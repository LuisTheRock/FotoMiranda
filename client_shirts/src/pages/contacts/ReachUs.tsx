import GoogleMaps from '../../components/GoogleMaps';
import {
  ADDRESS,
  GOOGLE_MAPS_LATITUDE,
  GOOGLE_MAPS_LONGITUDE,
  GOOGLE_MAPS_ZOOM,
  PHONE_NUMBERS_LIST,
} from '../../data/Constants';
import { layout } from '../../style';

const ReachUs = () => {
  return (
    <section
      className={
        'box-border flex-shrink-0 w-full h-min flex flex-col justify-start items-center p-24 overflow-hidden relative content-center flex-nowrap gap-10'
      }
    >
      <h1
        className={
          'flex-shrink-0 w-full h-auto whitespace-pre-wrap break-words overflow-visible relative font-normal font-serif text-5xl tracking-normal leading-normal text-center'
        }
      >
        Reach Us
      </h1>
      <div
        className={
          'flex-shrink-0 w-[600px] h-auto whitespace-pre-wrap break-words max-w-full overflow-visible relative font-normal font-mono text-xl tracking-normal leading-normal text-center flex flex-col items-center gap-5'
        }
      >
        {ADDRESS}
        <div className={'flex md:flex-row flex-col gap-3'}>
          {PHONE_NUMBERS_LIST.map(({ number }, index) => (
            <label key={index} className={'flex '}>
              <a
                href={`tel:${number.replace(/ /g, '')}`}
                className={`px-2 p-1 mb-1 rounded-none shadow-lg bg-dark-pallid-green shadow-black text-white hover:bg-gold hover:text-blue-800 ${layout.buttonInOut}`}
              >
                {number}
              </a>
            </label>
          ))}
        </div>
      </div>
      <GoogleMaps
        lat={GOOGLE_MAPS_LATITUDE}
        lng={GOOGLE_MAPS_LONGITUDE}
        zoom={GOOGLE_MAPS_ZOOM}
      />
    </section>
  );
};

export default ReachUs;
