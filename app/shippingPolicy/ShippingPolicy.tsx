"use client";

import { ReactNode } from "react";
import Section from "@/Components/Section";
import {
  FiTruck,
  FiMapPin,
  FiClock,
  FiPackage,
} from "react-icons/fi";

export default function ShippingPolicy() {
  return (
    <div className="max-w-md mx-auto px-4 py-5">

      {/* TITLE */}
      <h1 className="text-xl md:text-4xl font-bold text-center tracking-wide mb-4">
        SHIPPING POLICY
      </h1>

      <p className="text-center text-md text-gray-500 mb-8 leading-relaxed">
        At{" "}
        <span className="text-(--color-red) font-medium">
          Himalayan Threads
        </span>
        , we are committed to delivering your orders safely and on time.
      </p>

      {/* SECTIONS */}

      <Section
        icon={<FiClock />}
        title="1. ORDER PROCESSING TIME"
        points={[
          "Orders are processed within 1–3 business days (excluding Sundays and holidays).",
          "Once packed, orders are dispatched immediately.",
          "During peak seasons, slight delays may occur.",
        ]}
      />

      <Section
        icon={<FiMapPin />}
        title="2. SHIPPING DESTINATIONS"
        points={[
          "We currently ship across India.",
          "For international shipping, contact our support team.",
        ]}
      />

      <Section
        icon={<FiTruck />}
        title="3. SHIPPING CHARGES"
        points={[
          "Shipping charges are calculated at checkout.",
          "Free shipping may apply on selected offers.",
        ]}
      />

      <Section
        icon={<FiPackage />}
        title="4. DELIVERY TIMELINE"
        points={[
          "Delivery usually takes 5–7 business days after dispatch.",
          "Remote areas may require additional time.",
          "Delays may occur due to weather or logistics issues.",
        ]}
      />

      <Section
        icon={<FiTruck />}
        title="5. TRACKING YOUR ORDER"
        points={[
          "Tracking details will be shared via email or SMS.",
          "You can monitor your order status anytime.",
        ]}
      />

      <Section
        icon={<FiMapPin />}
        title="6. ADDRESS ACCURACY AND DELIVERY ISSUES"
        points={[
          "Ensure correct shipping details while placing order.",
          "Incorrect address may cause delays or failed delivery.",
          "Re-shipping charges may apply.",
        ]}
      />

      <Section
        icon={<FiClock />}
        title="7. ORDER MODIFICATIONS & CANCELLATIONS"
        points={[
          "Orders can be modified within 24 hours of placement.",
          "Once shipped, changes are not possible.",
        ]}
      />

      <Section
        icon={<FiPackage />}
        title="8. BULK OR WHOLESALE ORDERS"
        points={[
          "For bulk orders, contact our support team directly.",
        ]}
      />

      <Section
        icon={<FiTruck />}
        title="9. NEED ASSISTANCE?"
        points={[
          "Email: support@himalayanthreads.com",
          "Phone: +91 000000000",
          "We’re happy to help you anytime!",
        ]}
      />
    </div>
  );
}