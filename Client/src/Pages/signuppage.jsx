import React, { useState } from "react";

function App() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    education: "",
    careerGoal: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    if (!formData.agree) {
      alert("Please accept the Terms and Privacy Policy.");
      return;
    }

    console.log("Registration Data:", formData);

    alert("Account created successfully!");
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-4 py-10 relative overflow-hidden">

      {/* Background Effects */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl"></div>

      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl"></div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl"></div>


      {/* Main Container */}
      <div className="relative w-full max-w-6xl grid lg:grid-cols-2 bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden">


        {/* ================= LEFT SIDE ================= */}

        <div className="hidden lg:flex flex-col justify-center p-12 bg-gradient-to-br from-blue-600/20 via-indigo-600/10 to-purple-600/20">

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
          <h1 className="text-4xl xl:text-5xl font-bold leading-tight">

            Start Building Your

            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Career With AI
            </span>

          </h1>


          <p className="mt-6 text-gray-300 leading-relaxed max-w-lg">

            Create your account and get personalized career guidance,
            AI-powered mock interviews, resume analysis, skill-gap
            detection, and career recommendations.

          </p>


          {/* Benefits */}

          <div className="mt-10 space-y-5">

            <Feature
              icon="🎯"
              title="Personalized Career Guidance"
              description="Discover career paths based on your skills and interests."
            />

            <Feature
              icon="📄"
              title="AI Resume Analysis"
              description="Get intelligent feedback to improve your resume."
            />

            <Feature
              icon="🤖"
              title="AI Mock Interviews"
              description="Practice technical and HR interviews anytime."
            />

            <Feature
              icon="📈"
              title="Track Your Progress"
              description="Monitor your interview performance and improvement."
            />

          </div>

        </div>


        {/* ================= RIGHT SIDE ================= */}

        <div className="p-6 sm:p-10 lg:p-12 bg-slate-900/90">

          {/* Mobile Logo */}

          <div className="lg:hidden flex justify-center mb-6">

            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-xl font-bold shadow-lg">
              AI
            </div>

          </div>


          {/* Heading */}

          <div className="mb-7">

            <h2 className="text-3xl font-bold">
              Create Your Account 🚀
            </h2>

            <p className="text-gray-400 mt-2">
              Start your personalized AI career journey.
            </p>

          </div>


          {/* Form */}

          <form onSubmit={handleSubmit} className="space-y-4">


            {/* Full Name */}

            <div>

              <label className="block text-sm font-medium text-gray-300 mb-2">
                Full Name
              </label>

              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition"
              />

            </div>


            {/* Email */}

            <div>

              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition"
              />

            </div>


            {/* Education + Career Goal */}

            <div className="grid sm:grid-cols-2 gap-4">

              {/* Education */}

              <div>

                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Education
                </label>

                <select
                  name="education"
                  value={formData.education}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-white/10 text-gray-300 outline-none focus:border-blue-500 transition"
                >

                  <option value="">
                    Select education
                  </option>

                  <option value="12th">
                    12th / Higher Secondary
                  </option>

                  <option value="diploma">
                    Diploma
                  </option>

                  <option value="btech">
                    B.Tech / B.E.
                  </option>

                  <option value="bca">
                    BCA
                  </option>

                  <option value="mca">
                    MCA
                  </option>

                  <option value="other">
                    Other
                  </option>

                </select>

              </div>


              {/* Career Goal */}

              <div>

                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Career Goal
                </label>

                <select
                  name="careerGoal"
                  value={formData.careerGoal}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-white/10 text-gray-300 outline-none focus:border-purple-500 transition"
                >

                  <option value="">
                    Select goal
                  </option>

                  <option value="software-developer">
                    Software Developer
                  </option>

                  <option value="web-developer">
                    Web Developer
                  </option>

                  <option value="data-scientist">
                    Data Scientist
                  </option>

                  <option value="ai-engineer">
                    AI Engineer
                  </option>

                  <option value="cyber-security">
                    Cyber Security
                  </option>

                  <option value="cloud">
                    Cloud Engineer
                  </option>

                  <option value="other">
                    Other
                  </option>

                </select>

              </div>

            </div>


            {/* Password */}

            <div>

              <label className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>

              <div className="relative">

                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create a strong password"
                  required
                  minLength="8"
                  className="w-full px-4 py-3 pr-20 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-400 hover:text-white"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>

              </div>

              <p className="text-xs text-gray-500 mt-1">
                Minimum 8 characters
              </p>

            </div>


            {/* Confirm Password */}

            <div>

              <label className="block text-sm font-medium text-gray-300 mb-2">
                Confirm Password
              </label>

              <div className="relative">

                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  required
                  className="w-full px-4 py-3 pr-20 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(!showConfirmPassword)
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-400 hover:text-white"
                >
                  {showConfirmPassword ? "Hide" : "Show"}
                </button>

              </div>

            </div>


            {/* Terms */}

            <div className="flex items-start gap-3 pt-2">

              <input
                type="checkbox"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
                className="mt-1 w-4 h-4 accent-blue-600"
              />

              <p className="text-sm text-gray-400">

                I agree to the{" "}

                <button
                  type="button"
                  className="text-blue-400 hover:text-blue-300"
                >
                  Terms of Service
                </button>

                {" "}and{" "}

                <button
                  type="button"
                  className="text-blue-400 hover:text-blue-300"
                >
                  Privacy Policy
                </button>

              </p>

            </div>


            {/* Create Account */}

            <button
              type="submit"
              className="w-full py-3.5 mt-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 font-semibold text-white shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 hover:scale-[1.01] active:scale-[0.98] transition-all duration-300"
            >

              Create Account

            </button>

          </form>


          {/* Divider */}

          <div className="flex items-center gap-4 my-6">

            <div className="h-px flex-1 bg-white/10"></div>

            <span className="text-xs text-gray-500">
              OR
            </span>

            <div className="h-px flex-1 bg-white/10"></div>

          </div>


          {/* Google */}

          <button
            type="button"
            className="w-full py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition flex items-center justify-center gap-3"
          >

            <span className="font-bold text-lg">
              G
            </span>

            <span className="text-sm font-medium">
              Sign up with Google
            </span>

          </button>


          {/* Sign In */}

          <p className="text-center text-sm text-gray-400 mt-6">

            Already have an account?

            <button
              type="button"
              className="ml-2 text-blue-400 font-semibold hover:text-blue-300 transition"
            >
              Sign In
            </button>

          </p>


          {/* Footer */}

          <p className="text-center text-xs text-gray-600 mt-7">
            © 2026 CareerAI. All rights reserved.
          </p>

        </div>

      </div>

    </div>
  );
}


/* ================= FEATURE COMPONENT ================= */

function Feature({ icon, title, description }) {
  return (
    <div className="flex gap-4">

      <div className="w-10 h-10 shrink-0 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-lg">
        {icon}
      </div>

      <div>

        <h3 className="font-semibold text-gray-200">
          {title}
        </h3>

        <p className="text-sm text-gray-400 mt-1">
          {description}
        </p>

      </div>

    </div>
  );
}


export default App;