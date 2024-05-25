import Head from "next/head";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Printed Dress",
    description: "A beautiful printed dress perfect for any occasion.",
    imageUrl: "/images/dress.jpg",
    category: "Clothing",
  },
  {
    id: 2,
    name: "Household Item",
    description: "A useful household item that will make your life easier.",
    imageUrl: "/images/household-item.jpg",
    category: "Home",
  },
  {
    id: 3,
    name: "Accessories",
    description: "Stylish accessories to complement your outfit.",
    imageUrl: "/images/accessories.jpg",
    category: "Accessories",
  },
  // Add more products as needed
];

const categories = [...new Set(products.map((product) => product.category))];

export default function Marketplace() {
  return (
    <div className="font-sans text-gray-900">
      <Head>
        <title>Product Marketplace</title>
      </Head>
      <header className="bg-black text-white shadow-lg p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Marketplace</h1>
        </div>
      </header>
      <main className="bg-gray-100 py-10">
        <div className="container mx-auto px-4">
          {categories.map((category) => (
            <section key={category} className="mb-10">
              <h2 className="text-3xl font-bold mb-8 text-center">{category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products
                  .filter((product) => product.category === category)
                  .map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-lg shadow-md overflow-hidden transition transform hover:scale-105"
                    >
                      <Image
                        src={product.imageUrl}
                        alt={product.name}
                        width={400}
                        height={300}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                        <p className="text-gray-700 mb-4">{product.description}</p>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-blue-600 transition">
                          View
                        </button>
                      </div>
                    </div>
                  ))}
              </div>
            </section>
          ))}
        </div>
      </main>
      <footer className="bg-gray-800 text-white p-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Marketplace. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
