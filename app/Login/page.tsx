"use client"
import React, { useState } from 'react';
import { Eye, EyeOff, Activity, Fingerprint, Brain, ToggleLeft as Google, AppWindow as Windows } from 'lucide-react';
import axios from 'axios';
import { useSearchParams } from 'next/navigation';


function App() {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    

    const searchParams = useSearchParams()
    console.log("15", searchParams.get('emailId'))
    console.log("16", searchParams.getAll('otp'))
    console.log("17", searchParams.getAll('otp').join(""))
    

    const postDb = async (e: any) => {
        let payload = {"email":searchParams.get('emailId'),"otp":searchParams.getAll('otp').join(""),"password":confirmPassword}
        axios.post("http://localhost:5000/add",payload)
        console.log("24",payload)
    }

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
                        <h2 className="text-2xl font-semibold">Setup Password</h2>
                        <p className="text-gray-400">This will take some effort, Relax and then get started!</p>

                        <label className="mb-2 text-sm font-medium">Set-up your 8+ digits password</label>
                        <div className="relative mb-4">
                            <input
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full p-3 border rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your password"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute inset-y-0 right-3 flex items-center"
                            >
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        </div>
                        <label className="mb-2 text-sm font-medium">Confirm your password</label>
                        <div className="relative">
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="w-full p-3 border rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Confirm your password"
                            />
                            <button
                                type="button"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="absolute inset-y-0 right-3 flex items-center"
                            >
                                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        </div>
                        <div className="text-left text-sm mb-4">
                            <p className={password.length >= 8 ? "text-green-400" : "text-gray-400"}>✅ Password must be at least 8 characters long</p>
                            <p className={/[A-Z]/.test(password) && /[a-z]/.test(password) ? "text-green-400" : "text-gray-400"}>✅ Password must contain 1 Uppercase & 1 Lowercase letter</p>
                            <p className={/\d/.test(password) ? "text-green-400" : "text-gray-400"}>✅ Password must contain at least one digit</p>
                            <p className={/[!@#$%^&*(),.?":{}|<>]/.test(password) ? "text-green-400" : "text-gray-400"}>✅ Password must contain at least one special character (!, @, #, $, etc.)</p>
                        </div>

                        <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg transition" onClick={(e) => postDb(e)}>
                            Save
                        </button>

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