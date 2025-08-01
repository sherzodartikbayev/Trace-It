import { Outlet } from "react-router-dom";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <main className='mt-20'>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
