// components/Header.js
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Link from 'next/link';
import logo from "../../public/logo.png"
import { useAccount } from 'wagmi';
import Image from 'next/image';

export default function Header() {
  const {isConnected} = useAccount()
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold bg-white rounded-lg">
          <Image src={logo} height={50} width={100} alt='DRPV' />
        </div>
        <nav className='flex items-center'>
          <Link href="/"><div className="mx-2">Home</div></Link>
          <Link href="/publish"><div className="mx-2">Publish Paper</div></Link>
          <Link href="/browse"><div className="mx-2">Browse Papers</div></Link>
          {isConnected ? <Link href="/my-licenses"><div className="mx-2">My Licenses</div></Link> : null}
          {/* <Link href="/contact"><div className="mx-2">Contact</div></Link> */}
          <ConnectButton />
        </nav>
      </div>
    </header>
  );
}
