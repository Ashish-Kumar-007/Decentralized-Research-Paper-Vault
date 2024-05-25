import Head from "next/head";
import Image from "next/image";
import profilePic from "../public/Assets/logo-2.png"; // Replace with the actual path to your profile picture

export default function Publisher() {
  return (
    <div className="font-sans text-gray-900 min-h-screen bg-gray-100">
      <Head>
        <title>Art Publisher Dashboard</title>
      </Head>
      <header className="bg-black text-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Art Publisher Dashboard</h1>
        </div>
      </header>
      <main className="container mx-auto p-6">
        <section className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-3xl font-bold mb-4">Profile Management</h2>
          <div className="flex items-center space-x-4">
            <Image
              src={profilePic}
              alt="Profile Picture"
              width={100}
              height={100}
              className="rounded-full"
            />
            <div>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-600 transition">
                Edit Profile
              </button>
              <button className="bg-green-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-green-600 transition ml-4">
                Upload Profile Picture
              </button>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-3xl font-bold mb-4">Create Art</h2>
          <p className="mb-4">Use our tools to create and upload generative art using ChatGPT.</p>
          <button className="bg-purple-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-purple-600 transition">
            Create Art
          </button>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-3xl font-bold mb-4">My Artworks</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {/* Example artwork card */}
            <div className="bg-gray-200 rounded-lg p-4 shadow-md">
              <Image
                src="/path/to/artwork.jpg" // Replace with actual path to artwork image
                alt="Artwork"
                width={300}
                height={200}
                className="rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Artwork Title</h3>
              <p>Status: Available</p>
            </div>
            {/* Repeat the artwork card for each artwork */}
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-3xl font-bold mb-4">Earnings</h2>
          <div className="bg-gray-100 p-4 rounded-lg shadow-inner">
            <h3 className="text-2xl font-bold mb-2">$2,345.67</h3>
            <p>Total earnings from sold products</p>
            <div className="mt-4">
              <h4 className="text-xl font-bold mb-2">Breakdown:</h4>
              <ul className="list-disc list-inside">
                <li>Artwork 1: $500.00</li>
                <li>Artwork 2: $345.67</li>
                <li>Artwork 3: $1,500.00</li>
                {/* Add more items as necessary */}
              </ul>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-800 text-white p-6 mt-6">
        <div className="text-center">
          &copy; 2024 Artify. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
