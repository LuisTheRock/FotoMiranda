import { t } from 'i18next';

import styles from '../../style';

const ButtonSubmit = () => (
  <button
    className={`p-4 box-content h-5 w-full text-white text-center bg-dark-pallid-green shadow-lg shadow-orange-600 hover:bg-gold hover:text-black ${styles.buttonInOut1}`}
    type={'submit'}
  >
    {t('labelSend')}
  </button>
);

export default ButtonSubmit;
