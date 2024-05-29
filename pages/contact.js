// pages/contact.js

export default function Contact() {
  return (
    <div>
      <main className="container mx-auto p-8">
        <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
        <form className="bg-white p-6 rounded shadow-md">
          <div className="mb-4">
            <label className="block mb-2">Name</label>
            <input type="text" className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Email</label>
            <input type="email" className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Message</label>
            <textarea className="w-full p-2 border rounded"></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded">Submit</button>
        </form>
      </main>
    </div>
  );
}
