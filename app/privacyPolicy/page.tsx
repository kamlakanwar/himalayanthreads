export default function privacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">

      <h1 className="text-4xl font-bold text-center mb-8">
        PRIVACY POLICY
      </h1>

      <p className="mb-6 text-gray-600">
        At <b>HimalyanThreads</b>, your privacy is important to us.
        We are committed to protecting your personal data and ensuring
        your shopping experience is safe and secure.
      </p>

      {/* Info */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">
        INFORMATION WE COLLECT:
      </h2>

      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        <li>Personal information: name, address, phone number, email</li>
        <li>Payment information (processed securely via payment gateway)</li>
        <li>Order history and communication records</li>
      </ul>


      {/* Use */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">
        HOW WE USE YOUR INFORMATION:
      </h2>

      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        <li>To process and deliver your orders</li>
        <li>To provide customer support</li>
        <li>To send updates and offers</li>
        <li>To improve our services</li>
      </ul>


      {/* Security */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">
        DATA SECURITY:
      </h2>

      <p className="text-gray-700">
        We use secure platforms and industry-standard security measures
        to safeguard your data.
      </p>


      {/* Third party */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">
        THIRD-PARTY SERVICES:
      </h2>

      <p className="text-gray-700">
        We do not sell or share your personal information with third parties,
        except when required for order processing or legal compliance.
      </p>


      {/* Contact */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">
        CONTACT US:
      </h2>

      <p className="text-gray-700">
        Email: info@himalyanthreads.com
      </p>

    </div>
  );
}