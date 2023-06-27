import { t } from 'i18next';
import { useNavigate } from 'react-router-dom';

/**
 *
 * This component renders the info about the company and the location in google maps.
 * Also have a form that the user can fullfil to enter in contact with the company.
 */
const Contacts = () => {
  const navigate = useNavigate();

  return (
    <section
      id={'contacts'}
      className={
        'box-border flex-shrink-0 w-full h-min flex flex-col justify-center md:items-end items-center md:p-24 px-5 py-10 overflow-visible relative content-center flex-nowrap gap-5'
      }
    >
      <h1
        className={
          'flex-shrink-0 w-full h-auto whitespace-pre-wrap break-words max-w-[800px] overflow-visible relative font-normal font-serif md:text-5xl text-4xl tracking-normal leading-tight md:text-end text-center'
        }
      >
        {t('reachUsTitle')}
      </h1>
      <p
        className={
          'flex-shrink-0 md:w-[440px] w-[500px] h-auto whitespace-pre-wrap break-words max-w-full overflow-visible relative font-medium font-mono text-base tracking-normal leading-normal md:text-right text-center'
        }
      >
        {t('reachUsBody')}
      </p>
      <button
        className={
          'box-border flex-shrink-0 md:w-min w-full h-10 flex flex-row justify-center items-center p-[15px] bg-[#A40E4C] overflow-visible relative content-center flex-nowrap gap-[10px] rounded-lg'
        }
        onClick={() => navigate('/contact')}
      >
        <p
          className={
            'flex-shrink-0 w-auto h-auto whitespace-pre relative font-normal font-mono text-sm tracking-normal leading-tight text-center text-white'
          }
        >
          {t('contactUsLabel')}
        </p>
      </button>
    </section>
  );
};

export default Contacts;
