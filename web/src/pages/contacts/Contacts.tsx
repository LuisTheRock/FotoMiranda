import { FormikHelpers } from 'formik';
import { useTranslation } from 'react-i18next';

import CustomFormik from '../../components/forms/CustomFormik';
import FormFieldsGenerator from '../../components/forms/FormFieldsGenerator';
import IEmail from '../../interfaces/IEmail';

/**
 *
 * This component renders the info about the company and the location in google maps.
 * Also have a form that the user can fullfil to enter in contact with the company.
 */
const Contacts: React.FC = () => {
  const { t } = useTranslation();
  const { GetContactUsFields } = FormFieldsGenerator();

  const recipientEmail = `${import.meta.env.VITE_EMAIL_ACCOUNT}`;
  const subject = `${t('emailSubject')}`;

  const handleSendEmail = async (
    values: IEmail,
    formik: FormikHelpers<any>
  ) => {
    const mailtoLink = `mailto:${recipientEmail}?subject=${subject}&body=${t(
      'formContactName'
    )}: ${values.name}
    %0A%0A${t('formContactCellphone')}: ${
      values.email === undefined ? '------------------' : values.cellphone
    }
    %0A%0A${t('formContactMessage')}: %0A%09${values.message}`;

    window.location.href = mailtoLink;
    formik.resetForm();
  };

  return (
    <article
      className={'group relative flex flex-col items-start'}
      id={'contactComp'}
    >
      <h2
        className={
          'text-3xl mb-3 font-normal font-Dosis tracking-tight text-zinc-800 dark:text-zinc-100'
        }
      >
        <span className={'relative z-10'}>{t('reachUsTitle')}</span>
      </h2>

      <p
        className={
          'my-3 relative z-10 font-Montserrat font-light text-sm text-zinc-600 dark:text-zinc-400'
        }
      >
        {t('reachUsBody')}
      </p>
      <div
        className={
          'mt-3 w-full p-4 flex flex-col gap-4 rounded-2xl border border-zinc-400/75 dark:border-zinc-700/60'
        }
      >
        <CustomFormik
          onSubmit={handleSendEmail}
          functionToUse={GetContactUsFields}
        />
      </div>
    </article>
  );
};

export default Contacts;
