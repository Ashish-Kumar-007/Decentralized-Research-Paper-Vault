import Head from "next/head";
import Image from "next/image";
import productImage from "../public/Assets/logo.png"; // Replace with your product image path

export default function ProductDetails() {
  return (
    <div className="font-sans text-gray-900">
      <Head>
        <title>Product Details - Artify</title>
      </Head>
      <header className="bg-black text-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto p-4 flex justify-between items-center">
          <div className="text-2xl font-bold cursor-pointer">
            Artify
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
        <section className="container mx-auto p-10">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-4">
              <Image src={productImage} alt="Product Image" className="rounded-lg shadow-lg"/>
            </div>
            <div className="md:w-1/2 p-4">
              <h1 className="text-4xl font-bold mb-4">Licensed Art Product</h1>
              <p className="text-lg mb-6">
                This is a beautiful piece of generative art, licensed for your enjoyment and use. Each piece is unique and crafted with care.
              </p>
              <div className="text-3xl font-bold mb-4">$49.99</div>
              <button className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-blue-600 transition">
                Add to Cart
              </button>
            </div>
          </div>
        </section>
        <section className="container mx-auto p-10 bg-white rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-4">Customer Reviews</h2>
          <div className="space-y-6">
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <div className="flex items-center mb-2">
                <div className="text-lg font-bold mr-2">John Doe</div>
                <div className="flex text-yellow-400">
                  ★★★★☆
                </div>
              </div>
              <p className="text-gray-700">
                "Absolutely love this piece! The quality is fantastic and it looks great on my wall."
              </p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <div className="flex items-center mb-2">
                <div className="text-lg font-bold mr-2">Jane Smith</div>
                <div className="flex text-yellow-400">
                  ★★★★★
                </div>
              </div>
              <p className="text-gray-700">
                "Incredible artwork! I've received so many compliments from visitors."
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
