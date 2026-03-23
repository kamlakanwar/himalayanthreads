"use client";

export default function ContactSection() {
  return (
    <div>

      {/* ================= MAP SECTION ================= */}
      <div className="relative w-full h-100">

        {/* Google Map */}
        <iframe
          src= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.5783096830123!2d76.68046367585711!3d30.702138674599126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fefb1e2997c75%3A0x3c21ad07c027a5ff!2sKodvidya%20Technologies%20Private%20Limited!5e0!3m2!1sen!2sin!4v1773807723232!5m2!1sen!2sin"
          className="w-full h-full border-0"
          loading="lazy"
        ></iframe>

        {/* Overlay Card */}
        <div className="absolute top-25 left-70 bg-white p-10 shadow-xl max-w-sm text-center">
          <h2 className="text-lg font-bold tracking-wide">
            VISIT OUR STORE
          </h2>

          <p className="text-sm mt-3 font-semibold">
            ⏰ Opening Hours:
          </p>

          <p className="text-sm text-gray-600 mt-2 text-center">
            Mon - Sat: 9am - 7pm <br />
            Sunday: Closed
          </p>
        </div>
      </div>

      {/* ================= CONTACT FORM ================= */}
      <div className="bg-gray-100 py-16 px-6">

        <div className="max-w-3xl mx-auto text-center" suppressHydrationWarning>

          <h2 className="text-3xl font-bold tracking-wide">
            GOT ANY QUESTIONS?
          </h2>

          <p className="text-gray-500 mt-2">
            Use the form below to get in touch with our support team.
          </p>

          {/* FORM */}
          <form className="mt-10 space-y-4">

            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="p-3 border border-gray-300 w-full"
              />
              <input
                type="email"
                placeholder="Email *"
                className="p-3 border border-gray-300 w-full"
              />
            </div>

            {/* Phone */}
            <input
              type="text"
              placeholder="Phone Number"
              className="p-3 border border-gray-300 w-full"
            />

            {/* Message */}
            <textarea
              placeholder="Message"
              rows={4}
              className="p-3 border border-gray-300 w-full"
            ></textarea>

            {/* Button */}
            <button
              type="submit"
              className="bg-(--color-red) text-white px-6 py-3 mt-4 hover:bg-red-700 transition cursor-pointer"
            >
              SEND QUESTION →
            </button>

          </form>

          {/* Footer Note */}
          <p className="text-xs text-gray-500 mt-6">
            This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
          </p>

        </div>
      </div>

    </div>
  );
}