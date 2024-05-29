// pages/my-licenses.js

export default function MyLicenses() {
  return (
    <div>
      <main className="container mx-auto p-8">
        <h1 className="text-2xl font-bold mb-4">My Licenses</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Paper Cards */}
          <div className="p-4 bg-white rounded shadow">
            <h2 className="text-xl font-bold">Paper Title</h2>
            <p>Author</p>
            <p>IPFS Hash</p>
            <p>Date of Purchase</p>
          </div>
        </div>
      </main>
    </div>
  );
}
