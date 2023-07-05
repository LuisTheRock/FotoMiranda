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
    <div className={'md:w-min w-full flex flex-col'}>
      <h1
        className={`text-4xl text-center font-Dosis font-light text-zinc-800 dark:text-zinc-100`}
      >
        {t('registAlbum')}
      </h1>
      <div
        className={
          'bg-zinc-300/40 mt-10 ring-1 ring-black p-4 rounded-xl dark:text-zinc-100 text-zinc-800'
        }
      >
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
