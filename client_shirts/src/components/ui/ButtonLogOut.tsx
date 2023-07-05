import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline';
import { t } from 'i18next';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { setLogin } from '../../actions/auth-actions';
import { layout } from '../../style';

const ButtonLogOut = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleLogout() {
    dispatch(setLogin(false));
    toast.error(t('labelLogOut'));
    navigate('/', { replace: true });
  }

  return (
    <div className={`${layout.buttonInOut}`}>
      <ArrowRightOnRectangleIcon
        className={`w-5 h-5 cursor-pointer stroke-zinc-800 dark:stroke-zinc-100`}
        onClick={handleLogout}
      >
        {t('labelExit')}
      </ArrowRightOnRectangleIcon>
    </div>
  );
};

export default ButtonLogOut;
