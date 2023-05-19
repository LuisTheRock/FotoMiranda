import { ErrorMessage, useField } from 'formik';

const Field = ({ label, ...props }: any) => {
  const [field, meta] = useField(props);

  return (
    <>
      <div
        className={
          'grid grid-rows-1 font-Montserrat font-normal row-span-full mb-3'
        }
      >
        <label htmlFor={field.name}>{label}</label>
        {field.name === 'message' ? (
          <textarea
            className={`rounded border-gray-500 border shadow-none p-1 ${
              meta.touched && meta.error && 'is-invalid'
            }`}
            {...field}
            {...props}
            autoComplete={'off'}
          />
        ) : (
          <input
            className={`bg-white rounded p-1 border-gray-500 border focus-visible:bg-white shadow-none ${
              meta.touched && meta.error && 'is-invalid'
            }`}
            {...field}
            {...props}
            autoComplete={'off'}
          />
        )}
        <ErrorMessage
          component={'div'}
          name={field.name}
          className={'text-red-600 text-xs'}
        />
      </div>
    </>
  );
};

export default Field;
