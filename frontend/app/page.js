import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center text-center">
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-0"></div>
      <div className="relative z-10 p-8">
        <h1 className="text-6xl font-extrabold mb-4 animate-fade-in-down">
          Welcome to <span className="text-indigo-400">PneumoDetect</span>
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in-up">
          An AI-powered tool to assist in the diagnosis of pneumonia from chest X-ray images. Fast, reliable, and easy to use.
        </p>
        <div className="space-x-4 animate-fade-in">
          <Link href="/prediction" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105">
              Get Started
          </Link>
          <Link href="/about" className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105">
              Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}
