import Link from "next/link"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white w-100 p-6 rounded-xl shadow-xl">

        {/* Title */}
        <h2 className="text-xl font-semibold text-center">
          HimalyanThreads
        </h2>

        <h3 className="text-lg mt-4 font-medium text-center">
          Sign in
        </h3>

        <p className="text-gray-500 text-sm text-center">
          Sign in or create an account
        </p>

        {/* Purple Button */}
        <Link href="/">
        <button className="w-full mt-6 py-3 rounded-lg cursor-pointer text-white font-medium bg-linear-to-r from-purple-600 to-indigo-600">
          Continue with shop
        </button>
        </Link>

        {/* Divider */}
        <div className="flex items-center my-5">
          <div className="flex-1 h-[1px] bg-gray-300"></div>
          <span className="mx-3 text-gray-400 text-sm">or</span>
          <div className="flex-1 h-[1px] bg-gray-300"></div>
        </div>

        {/* Email Input */}
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        {/* Continue Button */}
        <button className="w-full mt-4 py-3 rounded-lg bg-gray-900 text-white">
          Continue
        </button>

        {/* Footer */}
        <p className="text-xs text-gray-500 mt-4 text-center">
          By continuing, you agree to our{" "}
          <Link href="termsOfService">
          <span className="underline">Terms of service</span>
          </Link>
        </p>

      </div>
    </div>
  );
}