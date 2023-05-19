import { t } from 'i18next';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { setLogin } from '../../actions/auth-actions';
import { layout } from '../../style';
import { toast } from 'react-hot-toast';

import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline';

const ButtonLogOut = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleLogout() {
    dispatch(setLogin(false));
    toast.error(t('labelLogOut'));
    navigate('/', { replace: true });
  }

  return (
    <div className={`p-2 ${layout.buttonInOut}`}>
      <ArrowRightOnRectangleIcon className={`w-5 h-5`} onClick={handleLogout}>
        {t('labelExit')}
      </ArrowRightOnRectangleIcon>
    </div>
  );
};

export default ButtonLogOut;
