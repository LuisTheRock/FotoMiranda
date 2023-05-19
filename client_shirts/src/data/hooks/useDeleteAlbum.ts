import axios from 'axios';
import toast from 'react-hot-toast';
import { useMutation, useQueryClient } from 'react-query';

import IDeleteAlbum from '../../interfaces/hooks/IDeleteAlbum';
import { t } from 'i18next';

const deleteAlbum = async (id: number) => {
  return await axios
    .delete(`${import.meta.env.VITE_API_BACKEND_URL}/deleteAlbum/${id}`)
    .then((res) => res.data)
    .catch((err) => err.response.data);
};

export function DeleteAlbum() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteAlbum,
    onSuccess: (data) => {
      if (data.error) {
        toast.error(`${data.error}`);
      } else {
        toast.success(`Album eliminado com sucesso`);

        //! This bassicaly refteches the query with the key 'allAlbums'
        queryClient.invalidateQueries('allAlbums');
      }
    },
    onError: () => {
      toast.error(t('labelErrorConnectionServer'));
    },
  });
}
