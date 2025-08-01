import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  console.log(error);

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return <section>404 - Not Found</section>;
    }
    
    return (
      <section>
        {error.status} - {error.statusText}
      </section>
    );
  }

  return <section>Unexpected error occurred</section>;
};

export default Error;
