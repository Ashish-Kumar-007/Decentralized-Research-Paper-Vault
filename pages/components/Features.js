// components/Features.js
export default function Features() {
    return (
      <section className="p-8 bg-gray-100">
        <div className="container mx-auto text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-4 bg-white rounded shadow">
              <h2 className="text-xl font-bold">Streamlined Licensing Process</h2>
              <p>A brief description.</p>
            </div>
            <div className="p-4 bg-white rounded shadow">
              <h2 className="text-xl font-bold">Fair Compensation for Authors</h2>
              <p>A brief description.</p>
            </div>
            <div className="p-4 bg-white rounded shadow">
              <h2 className="text-xl font-bold">Transparent Transactions</h2>
              <p>A brief description.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  