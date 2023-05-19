import { t } from 'i18next';

import { routesNavbar } from '../../data/Constants';
import { layout } from '../../style';

const RoutesNavbar = () => {
  return (
    <div className={'flex'}>
      {routesNavbar.map((nav) => (
        <li
          key={nav.id}
          className={`font-normal cursor-pointer text-lg ${
            nav.id === 'about' ? 'pr-4' : 'px-4'
          }  py-1 ${layout.buttonInOut}`}
        >
          <a href={`#${nav.id}`}>{t(`${nav.idTranslate}`)}</a>
        </li>
      ))}
    </div>
  );
};

export default RoutesNavbar;
