import { useTranslation } from 'react-i18next';

const ButtonSubmit = () => {
  const { t } = useTranslation();

  return (
    <button
      className={
        'w-full h-10 flex flex-row justify-center items-center p-4 ring-1 ring-zinc-800 relative rounded-lg'
      }
      type={'submit'}
    >
      <p
        className={
          'relative font-normal font-Dosis text-sm text-center text-zinc-800 dark:text-zinc-100'
        }
      >
        {t('labelSend')}
      </p>
    </button>
  );
};

export default ButtonSubmit;
