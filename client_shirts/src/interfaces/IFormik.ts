import { FormikHelpers } from 'formik';
import { FormFields } from '../components/forms/FormFieldsGenerator';

export interface IFormFormik {
  onSubmit: (data: any, formik: FormikHelpers<any>) => void;
  functionToUse: () => FormFields;
}
