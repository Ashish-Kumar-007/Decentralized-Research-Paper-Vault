// pages/register.js

export default function Publish() {
  return (
    <div>

      <main className="container mx-auto p-8">
        <h1 className="text-2xl font-bold mb-4">Publish Your Research Paper</h1>
        <form className="bg-white p-6 rounded shadow-md">
          <div className="mb-4">
            <label className="block mb-2">Paper Title</label>
            <input type="text" className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4">
            <label className="block mb-2">IPFS Hash (File Upload)</label>
            <input type="text" className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Price (in ETH)</label>
            <input type="text" className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Author's Ethereum Address</label>
            <input type="text" className="w-full p-2 border rounded" />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded">Submit</button>
        </form>
      </main>
    </div>
  );
}
