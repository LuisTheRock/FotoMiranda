import { Toaster } from 'react-hot-toast';

export const CustomToaster = () => {
  return (
    <Toaster
      position={'top-center'}
      reverseOrder={false}
      toastOptions={{ style: { backgroundColor: '#DDD0C8' } }}
    />
  );
};
