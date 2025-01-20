
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="w-full h-[200px] bg-zinc-50 bg-gradient-to-b from-white to-zinc-300"></div>
      <footer className="w-full bg-zinc-300 py-10 text-black">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col items-center md:flex-row md:justify-between">
          {/* Footer Navigation Links */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-lg font-semibold">KickSwitch.</h2>
            <ul className="space-y-2 mt-2 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Shop
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mb-6 md:mb-0">
            <a href="#" aria-label="Facebook" className="hover:text-zinc-500">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-zinc-500">
              <FaTwitter />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-zinc-500">
              <FaInstagram />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-zinc-500">
              <FaLinkedinIn />
            </a>
          </div>

          {/* Contact and Legal Info */}
          <div className="text-sm text-center md:text-right">
            <p>
              &copy; {new Date().getFullYear()} Kickswitch. All rights reserved.
            </p>
            <p>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>{" "}
              |{" "}
              <a href="#" className="hover:underline">
                Terms of Service
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
