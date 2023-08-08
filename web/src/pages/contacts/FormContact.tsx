import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { FormikHelpers } from 'formik';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { CustomToaster } from '../../components/CustomToaster';
import { Footer } from '../../components/Footer';
import CustomFormik from '../../components/forms/CustomFormik';
import FormFieldsGenerator from '../../components/forms/FormFieldsGenerator';
import Header from '../../components/Header';
import Email from '../../data/Email';
import { SendEmail } from '../../data/hooks/useSendEmail';
import IEmail from '../../interfaces/IEmail';

const FormContact = () => {
  const { GetContactUsFields } = FormFieldsGenerator();
  const { mutate } = SendEmail();
  const { t } = useTranslation();

  const handleSubmit = (values: IEmail, formik: FormikHelpers<any>) => {
    let email: Email;

    email = new Email(
      values.name,
      values.email,
      values.message,
      values.cellphone
    );

    mutate(email);
    formik.resetForm();
  };

  return (
    <div className={'flex h-full flex-col bg-black'}>
      <div className={'fixed inset-0 flex justify-center sm:px-8'}>
        <div className={'flex w-full max-w-7xl lg:px-8'}>
          <div className={'w-full ring-1 bg-zinc-900 ring-zinc-300/20'} />
        </div>
      </div>
      <div className={'relative'}>
        <Header />
        <main>
          <section className={'sm:px-8 mt-10 lg:mt-20'}>
            <div className={'mx-auto max-w-7xl lg:px-8'}>
              <div className={'relative px-4 sm:px-8 lg:px-12'}>
                <div className={'mx-auto max-w-2xl lg:max-w-5xl'}>
                  <div className={'xl:relative'}>
                    <div className={'mx-auto max-w-2xl'}>
                      <Link
                        to={'..'}
                        aria-label={'Go back'}
                        type={'button'}
                        className={
                          'group mb-4 flex h-10 w-10 items-center justify-center rounded-full shadow-md shadow-zinc-800/5 transition border border-zinc-700/50 bg-zinc-800 ring-0 ring-white/10 hover:border-zinc-700 hover:ring-white/20 lg:absolute lg:-left-5 lg:-mt-2 lg:mb-0 xl:-top-1.5 xl:left-0 xl:mt-0'
                        }
                      >
                        <ArrowLeftIcon
                          className={
                            'h-5 w-5 transition stroke-zinc-500 group-hover:stroke-zinc-400'
                          }
                        />
                      </Link>
                      <article>
                        <header className={'flex flex-col'}>
                          <h1
                            className={
                              'text-5xl font-bold tracking-widest sm:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-[#98C1D9] to-[#EE6C4D]'
                            }
                          >
                            {t('formContactUsTitle')}
                          </h1>
                        </header>
                        <p className={'mt-8 text-zinc-100/50'}>
                          {t('formContactUsSubtitle')}
                        </p>
                        <div
                          className={
                            'mt-14 ring-1 p-4 rounded-2xl ring-zinc-100'
                          }
                        >
                          <CustomFormik
                            onSubmit={handleSubmit}
                            functionToUse={GetContactUsFields}
                          />
                        </div>
                      </article>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
        <CustomToaster />
      </div>
    </div>
  );
};

export default FormContact;
