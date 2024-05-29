// // pages/index.js
// import { ConnectButton } from "@rainbow-me/rainbowkit";
// import { useState, useEffect } from "react";
// import { useAccount } from "wagmi";
// import { useRouter } from "next/router";

// export default function Home() {
//   const [showModal, setShowModal] = useState(true);
//   const [selectedOption, setSelectedOption] = useState(null);
//   const { isConnected } = useAccount();
//   const router = useRouter();

//   useEffect(() => {
//     if (isConnected) {
//       setShowModal(false);
//     }
//   }, [isConnected]);

//   const handleOptionSelect = (event) => {
//     setSelectedOption(event.target.value);
//     if (event.target.value == "artist") {
//       console.log(event.target.value);
//       router.push("/artist");
//     } else if (event.target.value == "listener") {
//       console.log(event.target.value);
//       router.push("/stream");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-900">
//       {showModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center">
//           <div className="bg-white p-8 rounded-lg shadow-lg">
//             <h2 className="text-2xl font-bold mb-4">Connect Wallet</h2>
//             <ConnectButton />
//           </div>
//         </div>
//       )}

// {isConnected && (
//   <div className="flex items-center justify-center min-h-screen ">
//     <div className="bg-white p-8 rounded-lg shadow-2xl transform transition duration-500 hover:scale-105">
//       <h2 className="text-3xl font-bold mb-6 text-gray-900">Select an Option</h2>
//       <select
//         onChange={handleOptionSelect}
//         className="bg-gray-200 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg focus:outline-none focus:bg-white focus:border-gray-500 transition duration-300 ease-in-out transform hover:scale-105"
//         defaultValue=""
//       >
//         <option value="" disabled>
//           Select an Option
//         </option>
//         <option value="artist">Artist</option>
//         <option value="listener">Listener</option>
//       </select>
//     </div>
//   </div>
// )}

//     </div>
//   );
// }

// pages/index.js
import Hero from './components/Hero';
import Features from './components/Features';

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
    </div>
  );
}
