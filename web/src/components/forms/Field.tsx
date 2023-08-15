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
        <label className={'dark:text-zinc-100'} htmlFor={field.name}>
          {label}
        </label>
        {field.name === 'message' ? (
          <textarea
            className={`rounded bg-inherit border-zinc-600/30 dark:text-zinc-100 dark:focus-visible:bg-zinc-800/40 border shadow-none p-1 ${
              meta.touched && meta.error && 'is-invalid'
            }`}
            {...field}
            {...props}
            autoComplete={'off'}
          />
        ) : (
          <input
            className={`bg-inherit rounded p-1 dark:text-zinc-100 border-zinc-600/30 border dark:focus-visible:bg-zinc-800/40 shadow-none ${
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
          className={'text-red-500 text-xs'}
        />
      </div>
    </>
  );
};

export default Field;
