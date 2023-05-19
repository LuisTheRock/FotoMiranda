import axios from 'axios';
import { t } from 'i18next';
import toast from 'react-hot-toast';
import { useMutation } from 'react-query';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { setLogin } from '../../actions/auth-actions';
import Album from '../Album';
import { EntityTypes } from './../EntityTypes';

const authenticateAlbum = async (album: Album) => {
  return await axios
    .post(`${import.meta.env.VITE_API_BACKEND_URL}/login`, album)
    .then((res) => res.data)
    .catch((err) => err.response.data);
};

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return useMutation({
    mutationFn: authenticateAlbum,
    onSuccess: (data) => {
      if (data.hasOwnProperty('message')) {
        console.log(data.message);
        setTimeout(() => {
          toast.success(JSON.stringify(data.message).replaceAll('"', ''));
          dispatch(setLogin(true));
          if (data.role === EntityTypes.Admin) {
            navigate('/adminHome');
          } else {
            navigate(`/albumProfile/${data.id}`);
          }
        }, 2500);
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
