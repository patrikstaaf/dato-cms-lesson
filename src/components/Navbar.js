import { useQuery } from 'graphql-hooks';

const Navbar = ({ logo, navlinks }) => {
  return (
    <nav className='flex justify-between items-center sticky top-0 z-10 bg-white py-6 px-8'>
      <div>
        <a href='/' className='text-4xl font-bold text-red-400'>
          {logo}
        </a>
      </div>
      <div className='flex gap-6 font-bold'>
        {navlinks.map((link, index) => (
          <a href={link.slug} key={index}>
            {link.title}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
