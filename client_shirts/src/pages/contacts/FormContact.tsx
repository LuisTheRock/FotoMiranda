import { FormikHelpers } from 'formik';

import { CustomToaster } from '../../components/CustomToaster';
import CustomFormik from '../../components/forms/CustomFormik';
import FormFieldsGenerator from '../../components/forms/FormFieldsGenerator';
import Email from '../../data/Email';
import { SendEmail } from '../../data/hooks/useSendEmail';
import IEmail from '../../interfaces/IEmail';

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
      <div
        className={
          'rounded-md my-3 text-lg p-2 border-black border shadow-lg shadow-black'
        }
      >
        <CustomFormik
          onSubmit={handleSubmit}
          functionToUse={GetContactUsFields}
        />
      </div>
      <CustomToaster />
    </>
  );
};

export default FormContact;
