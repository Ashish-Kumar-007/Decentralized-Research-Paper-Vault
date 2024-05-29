import { useAccount } from "wagmi";
import { useState } from "react";
import { contractAddress, abi } from "./contract/contract.json";

export default function Publish() {
  const { address } = useAccount();

  // State hooks for each input field
  const [paperTitle, setPaperTitle] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [paperFile, setPaperFile] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const [price, setPrice] = useState("");
  const [cid, setCid] = useState("");
  // Handler to check if the file is a PDF or an image
  const handleFileChange = (e, setFile) => {
    e.preventDefault()
    const file = e.target.files[0];
    if (file) {
      const fileType = file.type;
      if (fileType === "application/pdf" || fileType.startsWith("image/")) {
        setFile(file);
      } else {
        alert("Please upload a PDF or an image file.");
        e.target.value = null;
      }
    }
  };

  const uploadPaper = async (e) => {
    e.preventDefault();
    console.log(paperTitle, authorName, paperFile, coverImage, price)
    uploadFile(paperFile)
    console.log(cid)
  }

  const uploadFile = async (fileToUpload) => {
    try {
      const data = new FormData();
      data.set(fileToUpload);
      const res = await fetch("/api/files", {
        method: "POST",
        body: data,
      });
      const resData = await res.json();
      setCid(resData.IpfsHash);

    } catch (e) {
      console.log(e);

      alert("Trouble uploading file");
    }
  };

  return (
    <div>
      <main className="container mx-auto p-8">
        <h1 className="text-2xl font-bold mb-4">Publish Your Research Paper</h1>
        <form className="bg-white p-6 rounded shadow-md grid grid-cols-2 gap-2">
          <div className="mb-4">
            <label className="block mb-2">Paper Title</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              value={paperTitle}
              onChange={(e) => setPaperTitle(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Author&#39;s Name</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Upload Paper</label>
            <input
              type="file"
              className="w-full p-2 border rounded"
              onChange={(e) => handleFileChange(e, setPaperFile)}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Upload Paper Cover Image</label>
            <input
              type="file"
              className="w-full p-2 border rounded"
              onChange={(e) => handleFileChange(e, setCoverImage)}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Price (in ETH)</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Author&#39;s Ethereum Address</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              value={address}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded col-span-2"
            onClick={(e) => uploadPaper(e)}
          >
            Submit
          </button>
        </form>
      </main>
    </div>
  );
}
