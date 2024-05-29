// components/Features.js
export default function Features() {
  return (
    <section className="p-8 bg-gray-100 h-[450px]">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-4 bg-white rounded shadow">
            <h3 className="text-xl font-bold mb-2">Streamlined Licensing Process</h3>
            <p>Efficient and simplified process for obtaining licenses.</p>
          </div>
          <div className="p-4 bg-white rounded shadow">
            <h3 className="text-xl font-bold mb-2">Fair Compensation for Authors</h3>
            <p>Ensuring authors receive fair compensation for their work.</p>
          </div>
          <div className="p-4 bg-white rounded shadow">
            <h3 className="text-xl font-bold mb-2">Transparent Transactions</h3>
            <p>Transactions are transparent and easily traceable.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
