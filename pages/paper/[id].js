// pages/paper/[id].js
import { useRouter } from 'next/router';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function PaperDetails() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <Header />
      <main className="container mx-auto p-8">
        <h1 className="text-2xl font-bold mb-4">Paper Title</h1>
        <p>Author: <a href="#" className="text-blue-500">Ethereum Address</a></p>
        <p>IPFS Hash: <a href="#" className="text-blue-500">Download Link</a></p>
        <p>Price</p>
        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">Purchase License</button>
        <div className="mt-4">
          <h2 className="text-xl font-bold">Description of the paper</h2>
          <p>Details about the paper...</p>
        </div>
        <div className="mt-4">
          <h2 className="text-xl font-bold">Licensees</h2>
          <ul>
            <li>Address 1</li>
            <li>Address 2</li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
}
