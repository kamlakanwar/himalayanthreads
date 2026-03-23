export default function disclaimer() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-6">

      <h1 className="text-4xl font-bold text-center">
        DISCLAIMER
      </h1>


      {/* Color */}
      <div>
        <h2 className="text-2xl font-semibold mb-2">
          Color Disclaimer
        </h2>

        <p className="text-gray-700">
          Due to photographic lighting conditions and varying screen settings,
          the color of the product as displayed may slightly differ from the
          actual product. We strive to represent colors as accurately as possible.
        </p>
      </div>


      {/* Size */}
      <div>
        <h2 className="text-2xl font-semibold mb-2">
          Size Disclaimer
        </h2>

        <p className="text-gray-700">
          All sizing is based on standard size charts. As many of our items are
          handmade, slight variations in fit and measurements may occur.
        </p>
      </div>


      {/* General */}
      <div>
        <h2 className="text-2xl font-semibold mb-2">
          General Disclaimer
        </h2>

        <p className="text-gray-700">
          All content on our website is provided for informational purposes only.
          We reserve the right to make changes to our products and policies at any time.
        </p>
      </div>


      {/* Craft */}
      <div>
        <h2 className="text-2xl font-semibold mb-2">
          Craftsmanship Notice
        </h2>

        <p className="text-gray-700">
          Our products are handcrafted using traditional techniques.
          Minor variations or irregularities are part of the design
          and reflect the uniqueness of each piece.
        </p>
      </div>


    </div>
  );
}