"use client";

import { FiPhoneCall } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { BsCheckCircle } from "react-icons/bs";

export default function ContactInfo() {
  return (
    <div className="bg-white py-16 px-6">
      {/* Grid Container */}
      <div className="px-20 grid grid-cols-1 md:grid-cols-4 gap-20 text-center">

        {/* CALL US */}
        <div>
          <FiPhoneCall className="text-3xl mx-auto mb-4 text-black" />
          <h3 className="font-bold text-lg tracking-wide">CALL US</h3>
          <p className="text-gray-600 mt-2">+(91) 000000000</p>
        </div>

        {/* STORE ADDRESS */}
        <div>
          <IoLocationOutline className="text-3xl mx-auto mb-4 text-black" />
          <h3 className="font-bold text-lg tracking-wide">STORE ADDRESS</h3>
          <p className="text-gray-600 mt-2">
            Chauhan Handloom & Home Decor,<br />
            Main Market Jhandutta, Bilaspur,<br />
            Himachal Pradesh, INDIA 174031
          </p>
        </div>

        {/* ORDER ASSISTANCE */}
        <div>
          <HiOutlineMail className="text-3xl mx-auto mb-4 text-black" />
          <h3 className="font-bold text-lg tracking-wide">ORDER ASSISTANCE</h3>
          <p className="text-gray-600 mt-2">
            Email: info.himalyanthreads@gmail.com<br />
            Phone: +(91) 000000000
          </p>
        </div>

        {/* BULK & WHOLESALE */}
        <div>
          <BsCheckCircle className="text-3xl mx-auto mb-4 text-black" />
          <h3 className="font-bold text-lg tracking-wide">
            BULK & WHOLESALE
          </h3>
          <p className="text-gray-600 mt-2">
            Email: info@himalyanthreads.com<br />
            Phone: +(91) 000000000<br />
            <span className="text-sm text-gray-500">
              *For bulk and wholesale inquiries only
            </span>
          </p>
        </div>

      </div>
    </div>
  );
}