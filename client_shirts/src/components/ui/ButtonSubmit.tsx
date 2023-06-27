import { t } from 'i18next';

import styles from '../../style';

const ButtonSubmit = () => (
  <button
    className={`box-border flex-shrink-0 w-full h-10 flex flex-row justify-center items-center p-4 bg-white text-black overflow-visible relative content-center flex-nowrap gap-10 rounded-lg ${styles.buttonInOut1}`}
    type={'submit'}
  >
    <p
      className={
        'flex-shrink-0 w-auto h-auto whitespace-pre relative font-normal font-mono text-md tracking-normal leading-tight text-center text-black'
      }
    >
      {t('labelSend')}
    </p>
  </button>
);

export default ButtonSubmit;
