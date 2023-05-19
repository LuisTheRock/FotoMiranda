export const FileInput = ({ field, form, ...props }: any) => {
  return (
    <input
      type={'file'}
      multiple
      onChange={(event: any) => {
        const files = Array.from(event.target.files);
        form.setFieldValue(field.name, files);
      }}
      {...props}
    />
  );
};
