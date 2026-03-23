export default function contactInfo() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">

      {/* Heading */}
      <h1 className="text-3xl font-semibold mb-8">
        Contact Information
      </h1>

      <div className="grid md:grid-cols-2 gap-10">

        {/* Left */}
        <div className="space-y-6">

          <div>
            <h2 className="font-semibold text-lg mb-1">
              Address
            </h2>
            <p className="text-gray-600">
              Himalyan Threads <br />
              Model Town, Panipat <br />
              Haryana, India
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg mb-1">
              Phone
            </h2>
            <p className="text-gray-600">
              +91 00000 00000
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg mb-1">
              Email
            </h2>
            <p className="text-gray-600">
              support@himalyanthreads.com
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg mb-1">
              Working Hours
            </h2>
            <p className="text-gray-600">
              Mon – Sat : 10 AM – 7 PM
            </p>
          </div>

        </div>


        {/* Right → Map */}
        <div className="w-full h-87 rounded-xl overflow-hidden">

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.578309683013!2d76.68046367585713!3d30.702138674599116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fefb1e2997c75%3A0x3c21ad07c027a5ff!2sKodvidya%20Technologies%20Private%20Limited!5e0!3m2!1sen!2sin!4v1773982061555!5m2!1sen!2sin"
            className="w-full h-full border-0"
            loading="lazy"
          />

        </div>

      </div>

    </div>
  );
}