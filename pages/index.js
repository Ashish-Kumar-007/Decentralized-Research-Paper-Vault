import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Research Paper Marketplace</title>
        <meta name="description" content="A decentralized marketplace for research papers" />
      </Head>
      <header className="bg-blue-500 text-white p-6 text-center">
        <h1 className="text-4xl font-bold">Research Paper Marketplace</h1>
        <p className="mt-4">Connect with researchers and contribute by getting licenses for research papers.</p>
      </header>
      <main className="p-6">
        <section className="mb-8">
          <div className="relative">
            <input 
              type="text" 
              className="w-full p-4 border border-gray-300 rounded-md" 
              placeholder="Search for research papers by keywords, authors, or organizations..." 
            />
            <button className="absolute right-2 top-2 bg-blue-500 text-white p-2 rounded-md">Search</button>
          </div>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Computer Science', 'Biology', 'Economics', 'Physics', 'Mathematics', 'Chemistry', 'Engineering', 'Medicine'].map((category) => (
              <div key={category} className="bg-gray-200 p-4 rounded-md text-center">
                {category}
              </div>
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4">Featured Papers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {['Paper 1', 'Paper 2', 'Paper 3', 'Paper 4', 'Paper 5', 'Paper 6'].map((paper) => (
              <div key={paper} className="bg-white p-6 rounded-md shadow-md">
                <h3 className="text-xl font-bold">{paper}</h3>
                <p className="mt-2">An abstract of the research paper goes here...</p>
                <button className="mt-4 bg-blue-500 text-white p-2 rounded-md">View Details</button>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
