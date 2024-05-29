// pages/browse.js

export default function Browse() {
  return (
    <div>
      <main className="container mx-auto p-8">
        <h1 className="text-2xl font-bold mb-4">Browse Papers</h1>
        <div className="mb-4">
          <input type="text" className="w-full p-2 border rounded" placeholder="Search for Papers..." />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Paper Cards */}
          <div className="p-4 bg-white rounded shadow">
            <h2 className="text-xl font-bold">Paper Title</h2>
            <p>Author</p>
            <p>Price</p>
            <button className="mt-2 bg-blue-500 text-white py-2 px-4 rounded">Buy</button>
          </div>
        </div>
      </main>
    </div>
  );
}
