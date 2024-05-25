import Head from "next/head";
import logo from "../public/Assets/logo.png";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans text-gray-900">
      <Head>
        <title>Artify</title>
      </Head>
      <header className="bg-black text-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto p-4 flex justify-between items-center">
          <div className="cursor-pointer">
            <Image src={logo} width={50} height={50} alt="logo" />
          </div>
          <nav>
            <ul className="flex space-x-6 text-lg">
              <li>
                <a href="#home" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="bg-gray-100">
        <section className="bg-gradient-to-r from-[#CC3445] to-[#fc8596] text-white text-center p-20">
          <h1 className="text-5xl font-bold mb-4 animate-pulse">Welcome to Artify</h1>
          <p className="text-lg mb-8">
            Artify is a platform where authors create generative unique arts, <br />
            publishers license these arts, and buyers purchase products made from these arts. <br />
            Join us to explore and monetize creativity.
          </p>
          <a
            href="#about"
            className="bg-red-500 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-blue-600 transition"
          >
            Explore
          </a>
        </section>

        <section className="p-10">
          <h2 className="text-3xl font-bold mb-4 text-center">How It Works</h2>
          <div className="flex flex-col md:flex-row justify-around space-y-4 md:space-y-0">
            <div className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105">
              <h3 className="font-bold text-xl mb-2">Create</h3>
              <p className="text-lg">Authors create generative unique arts.</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105">
              <h3 className="font-bold text-xl mb-2">Publish</h3>
              <p className="text-lg">
                Publishers apply for licenses and publish products.
              </p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105">
              <h3 className="font-bold text-xl mb-2">Buy</h3>
              <p className="text-lg">Buyers purchase the products.</p>
            </div>
          </div>
        </section>
        <section id="testimonials" className="p-10 bg-gradient-to-r from-gray-200 to-gray-100">
          <h2 className="text-3xl font-bold mb-4 text-center">Testimonials</h2>
          <div className="flex flex-col md:flex-row gap-2 space-y-4 md:space-y-0">
            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105">
              <p className="italic text-lg">
                "Artify has transformed the way I create and sell art!" - Jane Doe
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105">
              <p className="italic text-lg">
                "The best platform for publishers and buyers!" - John Smith
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105">
              <p className="italic text-lg">
                "The best platform for publishers and buyers!" - John Smith
              </p>
            </div>
            
          </div>
        </section>
      </main>
      <footer className="flex flex-col bg-gray-800 text-white p-6 space-y-8">
        <div className="flex justify-around">
          <div>
            <h3 className="text-lg font-bold mb-2">Explore</h3>
            <ul>
              <li className="mb-1"><a href="#" className="hover:underline">Products</a></li>
              <li className="mb-1"><a href="#" className="hover:underline">Become a Seller</a></li>
              <li className="mb-1"><a href="#" className="hover:underline">Become a Publisher</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Contact</h3>
            <ul>
              <li className="mb-1"><a href="#contact" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-4">
          <p className="text-center">&copy; 2024 Artify. All rights reserved.</p>
          <div className="mt-2 text-center">
            <a href="#" className="text-blue-400 hover:underline mx-2">Privacy Policy</a>
            <a href="#" className="text-blue-400 hover:underline mx-2">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
