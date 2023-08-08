import { Field as Field1, Form, Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

import { IFormFormik } from '../../interfaces/IFormik';
import ButtonSubmit from '../ui/ButtonSubmit';
import Field from './Field';
import { FormFields } from './FormFieldsGenerator';

const CustomFormik = ({ functionToUse, onSubmit }: IFormFormik) => {
  const formFields: FormFields = functionToUse();
  const validate = Yup.object(formFields.validations);
  const { t } = useTranslation();

  return (
    <Formik
      initialValues={formFields.initialValues}
      onSubmit={onSubmit}
      validationSchema={validate}
    >
      <Form>
        {formFields.fields.map((item) => (
          <div key={item.name} className={'grid grid-rows-1'}>
            {item.type === 'file' ? (
              <>
                <label
                  className={'text-zinc-100 font-Montserrat font-normal'}
                  htmlFor={item.name}
                >
                  {item.label}
                </label>
                <Field1
                  label={item.label}
                  name={item.name}
                  type={item.type}
                  placeholder={item.placeholder}
                  component={item.component}
                  className={
                    'mb-3 font-Cormorant text-zinc-100 text-base font-normal'
                  }
                />
              </>
            ) : (
              <Field
                label={item.label}
                name={item.name}
                type={item.type}
                placeholder={item.placeholder}
                rows={item.rows}
              />
            )}
          </div>
        ))}
        <p
          className={
            'font-Montserrat font-normal text-zinc-100 text-xs mb-5 mt-2'
          }
        >
          {t('necessaryField')}
        </p>
        <div className={'flex flex-grow'}>
          <ButtonSubmit />
        </div>
      </Form>
    </Formik>
  );
};

export default CustomFormik;
