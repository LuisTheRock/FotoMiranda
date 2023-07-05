import { FormikHelpers } from 'formik';

import { CustomToaster } from '../../components/CustomToaster';
import { Footer } from '../../components/Footer';
import CustomFormik from '../../components/forms/CustomFormik';
import FormFieldsGenerator from '../../components/forms/FormFieldsGenerator';
import Email from '../../data/Email';
import { SendEmail } from '../../data/hooks/useSendEmail';
import IEmail from '../../interfaces/IEmail';
import Header from '../../components/Header';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

const FormContact = () => {
  const { GetContactUsFields } = FormFieldsGenerator();
  const { mutate } = SendEmail();

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
    // <>
    //   <main
    //     className={
    //       'box-border flex-shrink-0 h-min w-full flex flex-col items-center justify-center-center px-24 py-[50px] bg-black overflow-visible relative content-center flex-nowrap gap-28'
    //     }
    //   >
    //     <title
    //       className={
    //         'flex-shrink-0 w-px h-min flex flex-col justify-center items-center overflow-visible relative p-0 content-center flex-nowrap gap-5'
    //       }
    //     >
    //       <h1
    //         className={
    //           'flex-shrink-0 w-[1000px] h-auto whitespace-pre z-10 relative font-normal font-Margarine text-[220px] tracking-normal uppercase leading-[1.1] text-center bg-clip-text text-transparent bg-gradient-to-r from-[#98C1D9] to-[#EE6C4D]'
    //         }
    //       >
    //         reach
    //       </h1>
    //       <h2
    //         className={`flex-shrink-0 w-[1000px] h-auto whitespace-pre z-10 relative font-[500] font-mono text-3xl tracking-[2em] uppercase leading-[1.1] text-center bg-clip-text text-transparent bg-gradient-to-r from-[#98C1D9] to-[#EE6C4D]`}
    //       >
    //         Out To Us!
    //       </h2>
    //     </title>

    //     <article
    //       className={
    //         'flex-shrink-0 w-full h-min flex flex-col justify-start items-center max-w-full overflow-hidden relative p-0 content-center flex-nowrap gap-10'
    //       }
    //     >
    //       <p
    //         className={
    //           'flex-shrink-0 w-[480px] h-auto whitespace-pre-wrap break-words max-w-full overflow-visible relative font-[500] font-mono text-white text-base tracking-normal leading-normal text-center'
    //         }
    //       >
    //         Ready to start a conversation? Fill out the form below with your
    //         contact information and message. We can’t wait to hear what you have
    //         to say!
    //       </p>
    //       <div className={'p-4 rounded-lg'}>
    //         <CustomFormik
    //           onSubmit={handleSubmit}
    //           functionToUse={GetContactUsFields}
    //         />
    //       </div>
    //     </article>

    //     <CustomToaster />
    //   </main>
    //   <div className={'bg-black text-white stroke-white fill-red-500'}>
    //     <Footer />
    //   </div>
    // </>
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
                              'text-5xl font-bold tracking-tight sm:text-8xl bg-clip-text text-transparent bg-gradient-to-r from-[#98C1D9] to-[#EE6C4D]'
                            }
                          >
                            Reach
                          </h1>
                          <h2
                            className={
                              'text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#98C1D9] to-[#EE6C4D] sm:text-7xl'
                            }
                          >
                            Out to us!
                          </h2>
                        </header>
                        <p className={'mt-8 text-zinc-100/50'}>
                          Ready to start a conversation? Fill out the form below
                          with your contact information and message. We can’t
                          wait to hear what you have to say!
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
      </div>
    </div>
  );
};

export default FormContact;
