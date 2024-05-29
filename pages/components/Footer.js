// components/Footer.js
export default function Footer() {
  return (
<footer className="bg-gray-800 text-white p-4 fixed bottom-0 w-full">
  <div className="container mx-auto flex justify-between">
    <div>
      <a href="/privacy-policy" className="mx-2">
        Privacy Policy
      </a>
      <a href="/terms-of-service" className="mx-2">
        Terms of Service
      </a>
    </div>
    <div className="flex space-x-4">
      <a href="#" className="mx-2">
        Twitter
      </a>
      <a href="#" className="mx-2">
        LinkedIn
      </a>
      <a href="#" className="mx-2">
        Github
      </a>
    </div>
  </div>
</footer>

  );
}
