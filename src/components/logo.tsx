import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <Link to="/" className="d-flex gap-2">
      <img src="/assets/logo.svg" alt="logo" className="size-10" />
      <h1 className="font-righteous font-normal text-2xl text-blue">
        Trace It
      </h1>
    </Link>
  );
};

export default Logo;
