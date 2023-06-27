import { FormikHelpers } from 'formik';

import { CustomToaster } from '../../components/CustomToaster';
import CustomFormik from '../../components/forms/CustomFormik';
import FormFieldsGenerator from '../../components/forms/FormFieldsGenerator';
import Email from '../../data/Email';
import { SendEmail } from '../../data/hooks/useSendEmail';
import IEmail from '../../interfaces/IEmail';
import { Footer } from '../../components/Footer';

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
    <>
      <main
        className={
          'box-border flex-shrink-0 h-min w-full flex flex-col items-center justify-center-center px-24 py-[50px] bg-black overflow-visible relative content-center flex-nowrap gap-28'
        }
      >
        <title
          className={
            'flex-shrink-0 w-px h-min flex flex-col justify-center items-center overflow-visible relative p-0 content-center flex-nowrap gap-5'
          }
        >
          <h1
            className={
              'flex-shrink-0 w-[1000px] h-auto whitespace-pre z-10 relative font-normal font-Margarine text-[220px] tracking-normal uppercase leading-[1.1] text-center bg-clip-text text-transparent bg-gradient-to-r from-[#98C1D9] to-[#EE6C4D]'
            }
          >
            reach
          </h1>
          <h2
            className={`flex-shrink-0 w-[1000px] h-auto whitespace-pre z-10 relative font-[500] font-mono text-3xl tracking-[2em] uppercase leading-[1.1] text-center bg-clip-text text-transparent bg-gradient-to-r from-[#98C1D9] to-[#EE6C4D]`}
          >
            Out To Us!
          </h2>
        </title>

        <article
          className={
            'flex-shrink-0 w-full h-min flex flex-col justify-start items-center max-w-full overflow-hidden relative p-0 content-center flex-nowrap gap-10'
          }
        >
          <p
            className={
              'flex-shrink-0 w-[480px] h-auto whitespace-pre-wrap break-words max-w-full overflow-visible relative font-[500] font-mono text-white text-base tracking-normal leading-normal text-center'
            }
          >
            Ready to start a conversation? Fill out the form below with your
            contact information and message. We can’t wait to hear what you have
            to say!
          </p>
          <div className={'p-4 rounded-lg'}>
            <CustomFormik
              onSubmit={handleSubmit}
              functionToUse={GetContactUsFields}
            />
          </div>
        </article>

        <CustomToaster />
      </main>
      <div className={'bg-black text-white stroke-white fill-red-500'}>
        <Footer />
      </div>
    </>
  );
};

export default FormContact;
