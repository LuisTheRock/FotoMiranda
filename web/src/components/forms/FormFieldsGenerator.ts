import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';
import { ObjectShape } from 'yup';
import { FileInput } from '../ui/FileInput';

export type FormFields = {
  initialValues: object;
  validations: ObjectShape;
  fields: FormField[];
};

export type FormField = {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  disabled: string;
  rows: string;
  component?: object;
};

type FormFieldRawData = {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  initialValue: string;
  validation?: object;
  disabled: string;
  rows: string;
  component?: object;
};

const FormFieldsGenerator = () => {
  const { t } = useTranslation();

  const getName = (
    labelName: string = '',
    name: string = '',
    placeholder: string = '',
    initialValue: string = '',
    isRequired: boolean = true,
    disabled: string = ''
  ): FormFieldRawData => {
    let validation = Yup.string().max(50, t('max50Characters')!);
    if (isRequired) {
      validation = validation.required(t('demandCamp')!);
    }

    return {
      label: labelName,
      name: name,
      type: 'text',
      placeholder: placeholder,
      initialValue: initialValue,
      validation: validation,
      disabled: disabled,
      rows: '',
    };
  };

  const getFieldInput = (
    labelName: string = '',
    name: string = '',
    placeholder: string = '',
    initialValue: string = '',
    isRequired: boolean = true,
    disabled: string = '',
    component: typeof FileInput
  ): FormFieldRawData => {
    return {
      label: labelName,
      name: name,
      type: 'file',
      placeholder: placeholder,
      initialValue: initialValue,
      disabled: disabled,
      rows: '',
      component: component,
    };
  };

  const getEmail = (
    labelName: string = '',
    placeholder: string = '',
    initialValue: string = '',
    isRequired: boolean = true,
    disabled: string = ''
  ): FormFieldRawData => {
    let validation = Yup.string().email(t('invalidEmail')!);
    if (isRequired) {
      validation = validation.required(t('demandCamp')!);
    }

    return {
      label: labelName,
      name: 'email',
      type: 'email',
      placeholder: placeholder,
      initialValue: initialValue,
      validation: validation,
      disabled: disabled,
      rows: '',
    };
  };

  const getCellPhone = (
    labelName: string = '',
    placeholder: string = '',
    initialValue: string = '',
    isRequired: boolean = true,
    disabled: string = ''
  ): FormFieldRawData => {
    const phoneRegExp =
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
    let validation = Yup.string().matches(phoneRegExp, t('invalidCellphone')!);

    if (isRequired) {
      validation = validation.required(t('demandCamp')!);
    }

    return {
      label: labelName,
      name: 'cellphone',
      type: 'text',
      placeholder: placeholder,
      initialValue: initialValue,
      validation: validation,
      disabled: disabled,
      rows: '',
    };
  };

  const getMessage = (
    labelName: string = '',
    placeholder: string = '',
    initialValue: string = '',
    isRequired: boolean = true,
    disabled: string = '',
    numberRows: string = '3'
  ): FormFieldRawData => {
    let validation = Yup.string().max(1000, t('max1000Characters')!);

    if (isRequired) {
      validation = validation.required(t('demandCamp')!);
    }

    return {
      label: labelName,
      name: 'message',
      type: 'textarea',
      placeholder: placeholder,
      initialValue: initialValue,
      validation: validation,
      disabled: disabled,
      rows: numberRows,
    };
  };

  const getPassword = (
    labelName: string = '',
    placeholder: string = '',
    initialValue: string = '',
    isRequired: boolean = true,
    disabled: string = '',
    numberRows: string = ''
  ): FormFieldRawData => {
    let validation = Yup.string().min(6, t('min6Characters')!);
    if (isRequired) {
      validation = validation.required(t('passwordNecessary')!);
    }

    return {
      label: labelName,
      name: 'albumPassword',
      type: 'password',
      placeholder: placeholder,
      initialValue: initialValue,
      validation: validation,
      disabled: disabled,
      rows: numberRows,
    };
  };

  const generateFormFields = (
    formFieldsRaw: FormFieldRawData[]
  ): FormFields => {
    let formFields = {
      initialValues: {},
      validations: {},
      fields: new Array<FormField>(),
    };

    for (let field of formFieldsRaw) {
      (formFields.initialValues as any)[field.name] = field.initialValue;
      (formFields.validations as any)[field.name] = field.validation;
      formFields.fields.push({
        label: field.label,
        name: field.name,
        type: field.type,
        placeholder: field.placeholder,
        disabled: field.disabled,
        rows: field.rows,
        component: field.component,
      });
    }

    return formFields;
  };

  const GetContactUsFields = (): FormFields => {
    const { t } = useTranslation();
    const rawFields: FormFieldRawData[] = new Array<FormFieldRawData>();

    rawFields.push(
      getName(t('formContactName*')!, 'name', t('formContactName')!)
    );
    rawFields.push(getEmail('E-mail*', 'E-mail'));
    rawFields.push(
      getCellPhone(
        t('formContactCellphone*')!,
        t('formContactCellphone')!,
        '',
        false
      )
    );
    rawFields.push(
      getMessage(
        t('formContactMessage*')!,
        t('formContactMessage')!,
        '',
        true,
        '',
        '5'
      )
    );

    return generateFormFields(rawFields);
  };

  const GetLoginFields = (): FormFields => {
    const { t } = useTranslation();
    const rawFields: FormFieldRawData[] = new Array<FormFieldRawData>();

    rawFields.push(getName(t('loginUser*')!, 'albumName', t('loginUser')!));
    rawFields.push(getPassword(t('loginPassword*')!, t('loginPassword')!));

    return generateFormFields(rawFields);
  };

  const GetAddAlbumFields = (): FormFields => {
    const { t } = useTranslation();
    const rawFields: FormFieldRawData[] = new Array<FormFieldRawData>();

    rawFields.push(
      getName(t('formContactName*')!, 'albumName', t('formContactName')!)
    );
    rawFields.push(getPassword(t('loginPassword*')!, t('loginPassword')!));
    rawFields.push(
      getFieldInput(
        t('formImagesLabel')!,
        'images',
        '',
        '',
        false,
        '',
        FileInput
      )
    );

    return generateFormFields(rawFields);
  };

  return {
    GetContactUsFields,
    GetLoginFields,
    GetAddAlbumFields,
  };
};
export default FormFieldsGenerator;
