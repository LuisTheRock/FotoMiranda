import axios from 'axios';
import toast from 'react-hot-toast';
import { useMutation } from 'react-query';

import Email from '../Email';
import { t } from 'i18next';

const createEmail = async (email: Email) => {
  return await axios
    .post(`${import.meta.env.VITE_API_BACKEND_URL}/sendEmail`, email)
    .then((res) => res.data)
    .catch((error) => error.response.data);
};

export const SendEmail = () => {
  return useMutation({
    mutationFn: createEmail,
    onSuccess: (data) => {
      if (data.hasOwnProperty('message')) {
        toast.success(JSON.stringify(data.message).replaceAll('"', ''));
      }

      if (data.hasOwnProperty('error')) {
        toast.error(JSON.stringify(data.error).replaceAll('"', ''));
      }
    },
    onError: () => {
      toast.error(t('labelErrorConnectionServer'));
    },
  });
};
