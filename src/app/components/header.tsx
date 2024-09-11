import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <div className="flex items-center">
        <Image src="/images/logo.png" alt="Logo" width={40} height={40} />
        <nav className="ml-4 flex space-x-4">
          <Link href="/search">
            <a className="hover:underline">Search</a>
          </Link>
          <Link href="/about">
            <a className="hover:underline">About</a>
          </Link>
        </nav>
      </div>
      <div>
        <Link href="/signin">
          <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Sign In
          </a>
        </Link>
      </div>
    </header>
  );
};

export default Header;