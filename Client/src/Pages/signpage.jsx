import React, { useState } from "react";

function App() {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign in submitted");
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-4 py-10 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl"></div>

      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl"></div>

      {/* Main Container */}
      <div className="relative w-full max-w-5xl grid md:grid-cols-2 bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden">

        {/* Left Section */}
        <div className="hidden md:flex flex-col justify-center p-12 bg-gradient-to-br from-blue-600/20 to-purple-600/20">

          {/* Logo */}
          <div className="flex items-center gap-3 mb-10">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-xl font-bold shadow-lg shadow-blue-500/30">
              AI
            </div>

            <div>
              <h2 className="text-xl font-bold">
                CareerAI
              </h2>

              <p className="text-xs text-gray-400">
                Smart Career Assistant
              </p>
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-bold leading-tight">
            Build Your
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Future With AI
            </span>
          </h1>

          <p className="mt-6 text-gray-300 leading-relaxed">
            Get personalized career guidance, improve your resume,
            practice AI-powered mock interviews, and discover the
            skills you need for your dream career.
          </p>

          {/* Features */}
          <div className="mt-8 space-y-4">

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-blue-500/20 flex items-center justify-center">
                🎯
              </div>

              <span className="text-gray-300">
                Personalized Career Guidance
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-purple-500/20 flex items-center justify-center">
                🤖
              </div>

              <span className="text-gray-300">
                AI-Powered Mock Interviews
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-pink-500/20 flex items-center justify-center">
                📊
              </div>

              <span className="text-gray-300">
                Track Your Performance
              </span>
            </div>

          </div>
        </div>

        {/* Right Section */}
        <div className="p-8 sm:p-12 bg-slate-900/80">

          {/* Mobile Logo */}
          <div className="md:hidden flex justify-center mb-8">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-xl font-bold">
              AI
            </div>
          </div>

          {/* Heading */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold">
              Welcome Back 👋
            </h2>

            <p className="text-gray-400 mt-2">
              Sign in to continue your career journey.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>

              <input
                type="email"
                placeholder="you@example.com"
                required
                className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 hover:border-white/20"
              />
            </div>

            {/* Password */}
            <div>
              <div className="flex justify-between items-center mb-2">

                <label className="text-sm font-medium text-gray-300">
                  Password
                </label>

                <button
                  type="button"
                  className="text-sm text-blue-400 hover:text-blue-300 transition"
                >
                  Forgot password?
                </button>

              </div>

              <div className="relative">

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  required
                  className="w-full px-4 py-3.5 pr-20 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-400 hover:text-white transition"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>

              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center gap-2">

              <input
                type="checkbox"
                className="w-4 h-4 accent-blue-600"
              />

              <span className="text-sm text-gray-400">
                Remember me
              </span>

            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 font-semibold text-white shadow-lg shadow-blue-600/20 transition duration-300 hover:scale-[1.02] hover:shadow-blue-600/40 active:scale-[0.98]"
            >
              Sign In
            </button>

          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-7">

            <div className="h-px flex-1 bg-white/10"></div>

            <span className="text-xs text-gray-500">
              OR CONTINUE WITH
            </span>

            <div className="h-px flex-1 bg-white/10"></div>

          </div>

          {/* Google Button */}
          <button
            type="button"
            className="w-full py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition flex items-center justify-center gap-3"
          >

            <span className="text-lg">
              G
            </span>

            <span className="text-sm font-medium">
              Continue with Google
            </span>

          </button>

          {/* Sign Up */}
          <p className="text-center text-sm text-gray-400 mt-7">

            Don't have an account?

            <button
              type="button"
              className="ml-2 text-blue-400 font-semibold hover:text-blue-300 transition"
            >
              Create Account
            </button>

          </p>

          {/* Footer */}
          <p className="text-center text-xs text-gray-600 mt-8">
            © 2026 CareerAI. All rights reserved.
          </p>

        </div>

      </div>

    </div>
  );
}

export default App;