import IRoutes from './IRoutes';

export default interface IRoutesNavbar {
  classNameProps: string;
  routes: IRoutes[];
  onClick?: () => void;
}
