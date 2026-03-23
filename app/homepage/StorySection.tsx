"use client";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { FaAward, FaTruck, FaShieldAlt, FaBox } from "react-icons/fa";

export default function StorySection() {
  const images = [
    "/images/storyImg1.png",
    "/images/storyImg2.png",
    "/images/storyImg1.png",
    "/images/storyImg1.png",
    "/images/storyImg2.png",
    "/images/storyImg1.png",
    "/images/storyImg2.png",
    "/images/storyImg1.png",
  ];

  return (
    <section className="w-full bg-black text-white">

      {/* TOP HEADER */}
      <div className="flex flex-col lg:flex-row justify-between items-center px-6 lg:px-20 py-12">

        {/* LEFT TEXT */}
        <div>
          <p className="uppercase tracking-widest font-bold text-md text-gray-300">
            Be part of the story we’re weaving
          </p>

          <h2 className="text-3xl lg:text-3xl font-light mt-2">
            #HimalyanThreads
          </h2>
        </div>

        {/* RIGHT imagesGRAM BOX */}
        <div className="flex items-center flex-col mt-8 lg:mt-0 border-2 border-gray-400 rounded-xl px-3 py-3 hover:bg-white hover:text-black transition duration-300 cursor-pointer">

          {/* imagesgram Icon Image */}
          <a
          href="https://instagram.com/"
          target="_blank"
          className="mt-8 lg:mt-0 border-gray-400 rounded-xl px-4 py-3 flex items-center gap-3 hover:bg-white hover:text-black transition duration-300 cursor-pointer"
        >
          <FaInstagram size={26} />
          </a>
          <span className="font-medium">@himalyanthreads</span>
        </div>

      </div>

      {/* IMAGE GRID */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

        {images.map((img, index) => (
          <div
            key={index}
            className="relative h-70 overflow-hidden group"
          >
            <Image
              src={img}
              alt="imagesgram"
              fill
              className="object-cover group-hover:scale-110 transition duration-500"
            />
          </div>
        ))}

      </div>
      <div className="w-full bg-(--color-red) text-white py-14 px-6 lg:px-20">

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center">

    {/* 1 */}
    <div className="flex flex-col items-center space-y-4">
      <FaAward size={40} />
      <h3 className="font-bold tracking-wide text-lg">ASSURED QUALITY</h3>
      <p className="text-sm text-gray-100 max-w-xs">
        Each product is carefully inspected to meet our strict quality standards.
      </p>
    </div>

    {/* 2 */}
    <div className="flex flex-col items-center space-y-4">
      <FaTruck size={40} />
      <h3 className="font-bold tracking-wide text-lg">ALL INDIA DELIVERY</h3>
      <p className="text-sm text-gray-100 max-w-xs">
        Free delivery on all prepaid orders across India with trusted courier partner.
      </p>
    </div>

    {/* 3 */}
    <div className="flex flex-col items-center space-y-4">
      <FaShieldAlt size={40} />
      <h3 className="font-bold tracking-wide text-lg">FAST & SECURE CHECKOUT</h3>
      <p className="text-sm text-gray-100 max-w-xs">
        We accept all major credit cards, debit cards, and UPI for easy payments.
      </p>
    </div>

    {/* 4 */}
    <div className="flex flex-col items-center space-y-4">
      <FaBox size={40} />
      <h3 className="font-bold tracking-wide text-lg">RESPONSIVE SUPPORT</h3>
      <p className="text-sm text-gray-100 max-w-xs">
        Exceptional customer service with your satisfaction as our priority.
      </p>
    </div>

  </div>

</div>
    </section>
  );
}