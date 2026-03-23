"use client";

import { FiTruck, FiShield, FiPackage } from "react-icons/fi";
import { GiPlantSeed } from "react-icons/gi";

export default function FeaturesSection() {
  const features = [
    {
      icon: <GiPlantSeed size={40} />,
      title: "ASSURED QUALITY",
      desc: "Each product is carefully inspected to meet our strict quality standards.",
    },
    {
      icon: <FiTruck size={40} />,
      title: "ALL INDIA DELIVERY",
      desc: "Free delivery on all prepaid orders across India with trusted courier partner.",
    },
    {
      icon: <FiShield size={40} />,
      title: "FAST & SECURE CHECKOUT",
      desc: "We accept all major credit cards, debit cards, and UPI for easy payments.",
    },
    {
      icon: <FiPackage size={40} />,
      title: "RESPONSIVE SUPPORT",
      desc: "Exceptional customer service with your satisfaction as our priority.",
    },
  ];

  return (
    <section className="bg-white py-12">

      <div className="max-w-325 mx-auto px-6">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">

          {features.map((item, index) => (
            <div key={index} className="flex flex-col items-center">

              <div className="text-gray-400 mb-4">
                {item.icon}
              </div>

              <h3 className="font-semibold text-lg tracking-wide mb-2">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed max-w-[240px]">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}