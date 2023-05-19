import { FormikHelpers } from 'formik';

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
    <div className={'bg-blue-200 border-[1px] border-black p-2'}>
      <CustomFormik onSubmit={handleSubmit} functionToUse={GetAddAlbumFields} />
      <CustomToaster />
    </div>
  );
};

export default AddAlbum;
