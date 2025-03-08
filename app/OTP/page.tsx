"use client"
import React, { useState, useRef } from 'react';
import { Activity, Fingerprint, Brain, ToggleLeft as Google, AppWindow as Windows } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

function App() {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  let finalotp = ""
  let ultimateotp = ""
  const searchParams = useSearchParams()
  console.log("12", searchParams.get('emailId'))

  const handleChange = (index: any, e: any) => {
    console.log(e.target.value)
    let digit = e.target.value
    if (index < inputRefs.current.length - 1 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1]?.focus(); // Move focus to the next input
    }

    if (isNaN(digit)) return;
    let newOtp = [...otp];
    newOtp[index] = digit;
    setOtp(newOtp);
    console.log("26", otp)
    finalotp=otp.join()
    console.log("29",finalotp)
    ultimateotp=finalotp.replace(/,/g,"")
    console.log("31",ultimateotp)
  };
  return (
    <div className="flex min-h-screen">
      {/* Left Section - Features */}
      <div className="w-1/2 bg-gradient-to-br from-white to-gray-100 p-12 relative overflow-hidden">
        <div className="space-y-16 relative z-10">
          {/* Load Testing */}
          <div className="space-y-2 border-black border-2 -rotate-45 w-2xs">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Activity className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-black">Load Testing</h2>
            </div>
            <div className=" border border-yellow-200 p-3 rounded-lg inline-block">
              <p className="text-sm">
                Our platform ensures peak performance by simulating real-world user loads efficiently and accurately.
              </p>
            </div>
          </div>

          {/* AI Recommendations */}
          <div className="space-y-2  border-black border-2 rotate-45 w-2xs ml-auto">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <Brain className="w-6 h-6 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-black">AI Recommendations</h2>
            </div>
            <p className="text-gray-600 max-w-md">
              Optimize load and security testing with intelligent, data-driven insights for enhanced performance and safety.
            </p>
          </div>

          {/* Security Testing */}
          <div className="space-y-2  border-black border-2 -rotate-45 w-2xs ">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-emerald-100 rounded-lg">
                <Fingerprint className="w-6 h-6 text-emerald-600" />
              </div>
              <h2 className="text-2xl font-bold text-black">Security Testing</h2>
            </div>
            <p className="text-gray-600 max-w-md">
              Safeguard your applications by identifying vulnerabilities and ensuring robust protection against threats.
            </p>
          </div>
        </div>

        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100/50 to-green-100/50 rounded-full blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-yellow-100/50 to-emerald-100/50 rounded-full blur-3xl -z-10 transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      {/* Right Section - Sign Up */}
      <div className="w-1/2 bg-[#0F172A] text-white p-12 relative">
        <div className="max-w-md mx-auto">
          <h1 className="text-3xl font-bold mb-8">Scale Secure</h1>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Enter OTP</h2>
            <p className="text-gray-400">Fill-in the 6-digit OTP you received in your email.</p>

            <div className="space-y-2">
              <label className="block text-sm">
                Email<span className="text-red-500">*</span>
              </label>
              {otp.map((num, index) => (
                <input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  maxLength="1"
                  className="w-12 h-12 text-xl text-center bg-gray-800 border border-gray-600 rounded-md m-2"
                  value={num}
                  onChange={(e) => handleChange(index, e)}
                />
              ))}
            </div>

            <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg transition">
              <Link
                href={{
                  pathname: '/Login',
                  query: {
                    emailId: searchParams.get('emailId'),
                    otp:otp,
                  }
                }}
              >
                Confirm and Signup
              </Link>
            </button>

            <div className="text-center text-gray-400">OR</div>

            <div className="flex gap-4 justify-center">
              <button className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition">
                <Google className="w-6 h-6" />
              </button>
              <button className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition">
                <Windows className="w-6 h-6" />
              </button>
            </div>

            <div className="text-sm text-gray-400">
              <span className="text-purple-400">Note:</span> Signing up via Google saves your time ~20 seconds
            </div>

            <div className="text-center text-sm">
              Already have an account?{' '}
              <a href="#" className="text-purple-400 hover:text-purple-300">Log In</a>
            </div>
          </div>
        </div>

        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-32 bg-blue-500/10 blur-3xl"></div>
        <div className="absolute top-0 right-0 w-96 h-32 bg-blue-500/5 blur-2xl transform rotate-45"></div>
      </div>
    </div>
  );
}

export default App;