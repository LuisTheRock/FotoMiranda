import Section from '../../components/ui/Section';
import TitleSection from '../../components/ui/TitleSection';
import { ADDRESS, PHONE_NUMBERS_LIST } from '../../data/Constants';
import { layout } from '../../style';

const Address = () => (
  <section>
    <address>
      <p className={'font-Montserrat font-light text-lg mb-3'}>{ADDRESS}</p>
    </address>
    <Section padding={'px-0 py-3'}>
      <TitleSection
        title={'cellphone'}
        paddingProps={'px-0'}
        titleHeight_Font={'text-xl font-Montserrat font-light'}
        titleLayout={'col-start-1 md:col-end-3 col-end-4'}
      />
      <div className={'md:col-start-3 col-start-5 md:col-end-7 col-end-10'}>
        {PHONE_NUMBERS_LIST.map(({ number }, index) => (
          <label key={index} className={'flex mb-2'}>
            <a
              href={`tel:${number.replace(/ /g, '')}`}
              className={`px-2 p-1 mb-1 rounded-none shadow-lg bg-dark-pallid-green shadow-black text-white hover:bg-gold hover:text-blue-800 ${layout.buttonInOut}`}
            >
              {number}
            </a>
          </label>
        ))}
      </div>
    </Section>
  </section>
);

export default Address;
