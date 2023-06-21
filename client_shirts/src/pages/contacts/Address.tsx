import { t } from 'i18next';

import { ADDRESS, PHONE_NUMBERS_LIST } from '../../data/Constants';
import { layout } from '../../style';

const Address = () => (
  <section>
    <address>
      <p className={'font-Montserrat font-light text-lg mb-3'}>{ADDRESS}</p>
    </address>

    <article className={'flex'}>
      <h1 className={'text-xl font-Montserrat font-light mr-5'}>
        {t('cellphone')}
      </h1>
      <div className={'flex flex-col mb-3'}>
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
    </article>
  </section>
);

export default Address;
