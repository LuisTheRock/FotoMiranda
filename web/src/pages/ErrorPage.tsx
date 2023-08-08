import { useEffect } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';

type RouteError = Error | { message?: string; statusText?: string };

export default function ErrorPage() {
  const navigate = useNavigate();

  const error = useRouteError();
  console.error(error);

  const routeError = error as RouteError;

  useEffect(() => {
    setTimeout(() => {
      navigate('/', { replace: true });
    }, 600);
  });

  return (
    <div id="error-page  align-items-center justify-content-center">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{routeError.message}</i>
      </p>
    </div>
  );
}
