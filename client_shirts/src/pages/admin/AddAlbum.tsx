import { FormikHelpers } from 'formik';
import { t } from 'i18next';

import { CustomToaster } from '../../components/CustomToaster';
import CustomFormik from '../../components/forms/CustomFormik';
import FormFieldsGenerator from '../../components/forms/FormFieldsGenerator';
import Album from '../../data/Album';
import { RegisterAlbum } from '../../data/hooks/useRegisterAlbum';

const AddAlbum = () => {
  const { mutate } = RegisterAlbum();
  const { GetAddAlbumFields } = FormFieldsGenerator();

  const handleSubmit = (
    values: any,
    { setSubmitting, resetForm }: FormikHelpers<any>
  ) => {
    let album: Album;
    const role = 'user';

    album = new Album(
      values.albumName,
      values.albumPassword,
      role,
      values.images
    );

    mutate(album);
    resetForm();
    setSubmitting(false);
  };

  return (
    <div className={'md:w-min w-full flex flex-col gap-10'}>
      <h1 className={`text-4xl text-center font-Dosis font-light`}>
        {t('registAlbum')}
      </h1>
      <div className={'bg-blue-200 ring-1 ring-black p-2 rounded-xl'}>
        <CustomFormik
          onSubmit={handleSubmit}
          functionToUse={GetAddAlbumFields}
        />
        <CustomToaster />
      </div>
    </div>
  );
};

export default AddAlbum;
