import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 bg-opacity-50 backdrop-blur-md p-4 fixed w-full top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-2xl font-bold">
          PneumoDetect
        </Link>
        <div className="flex space-x-6">
          <Link href="/" className="text-gray-300 hover:text-white transition duration-300">
            Home
          </Link>
          <Link href="/about" className="text-gray-300 hover:text-white transition duration-300">
            About
          </Link>
          <Link href="/prediction" className="text-gray-300 hover:text-white transition duration-300">
            Predict
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;