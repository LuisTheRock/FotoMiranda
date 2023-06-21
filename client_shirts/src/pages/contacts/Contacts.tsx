import GoogleMaps from '../../components/GoogleMaps';
import Section from '../../components/ui/Section';
import TitleSection from '../../components/ui/TitleSection';
import {
  GOOGLE_MAPS_LATITUDE,
  GOOGLE_MAPS_LONGITUDE,
  GOOGLE_MAPS_ZOOM,
} from '../../data/Constants';
import styles from '../../style';
import Address from './Address';
import FormContact from './FormContact';

/**
 *
 * This component renders the info about the company and the location in google maps.
 * Also have a form that the user can fullfil to enter in contact with the company.
 */
const Contacts = () => (
  <section id={'contacts'} className={'py-3 bg-white'}>
    <TitleSection
      title={'contactUsTitle'}
      titleHeight_Font={'text-5xl font-light font-Cormorant'}
      titleLayout={'md:col-start-3 md:col-end-10 col-start-1 col-end-12'}
    />
    <Section>
      <div
        className={`md:col-start-3 col-start-1 md:col-end-6 col-end-13 mt-6`}
      >
        <FormContact />
      </div>
      <div className={`col-start-1 md:col-start-7 ${styles.colEnd}`}>
        <div>
          <TitleSection
            title={'address'}
            paddingProps={'px-0 py-2'}
            titleHeight_Font={
              'text-4xl text-left font-light font-Cormorant md:mb-4 mb-4 mt-6'
            }
            titleLayout={`col-start-1 col-span-full`}
          />
          <Address />
        </div>
        <GoogleMaps
          lat={GOOGLE_MAPS_LATITUDE}
          lng={GOOGLE_MAPS_LONGITUDE}
          zoom={GOOGLE_MAPS_ZOOM}
        />
      </div>
    </Section>
  </section>
);

export default Contacts;
