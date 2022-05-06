import Navbar from './Navbar';

const Layout = ({ children, header }) => {
  return (
    <div className=''>
      <Navbar logo={header.logo} navlinks={header.navlinks} />
      <div className='px-8'>{children}</div>
    </div>
  );
};

export default Layout;
