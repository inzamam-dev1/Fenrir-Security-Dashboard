import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Star } from 'lucide-react';

const Signup = () => {
  const navigate = useNavigate();

  // R2: Function to handle navigation to the Dashboard 
  const handleNavigation = (e) => {
    if (e) e.preventDefault();
    navigate('/dashboard'); 
  };

  return (
    <div className="flex min-h-screen font-sans page-fade">
      {/* Left Side: Branding and Feature List [cite: 19] */}
      <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-[#0F0F0F] to-[#1A1A1A] p-12 flex-col justify-between text-white">
        <div>
          <h1 className="text-2xl font-bold tracking-tighter text-[#0CC8A8]">Aps</h1>
          <div className="mt-20">
            <h2 className="text-5xl font-semibold leading-tight">
              Expert level Cybersecurity <br/> in hours not weeks.
            </h2>
            <ul className="mt-10 space-y-6 text-gray-400">
              <li className="flex items-start gap-3">
                <CheckCircle className="text-[#0CC8A8] mt-1" size={20} />
                <span>Effortlessly spider and map targets to uncover hidden security flaws </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-[#0CC8A8] mt-1" size={20} />
                <span>Deliver high-quality, validated findings in hours, not weeks.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-[#0CC8A8] mt-1" size={20} />
                <span>Generate professional, enterprise-grade security reports automatically.</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Star className="text-yellow-500 fill-yellow-500" size={16} />
          <span>Trustpilot Rated 4.5/5.0 (100k+ reviews)</span>
        </div>
      </div>

      {/* Right Side: Sign-up Form [cite: 20] */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white dark:bg-[#0F0F0F]">
        <div className="max-w-md w-full text-center lg:text-left">
          <h3 className="text-3xl font-bold mb-2 dark:text-white">Sign up</h3>
          
          {/* Functional Log in link  */}
          <p className="text-gray-500 mb-8">
            Already have an account? 
            <button 
              onClick={handleNavigation} 
              className="text-[#0CC8A8] ml-1 font-semibold hover:underline bg-transparent border-none p-0 cursor-pointer"
            >
              Log in
            </button>
          </p>
          
          <form onSubmit={handleNavigation} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="First name*" required className="p-3 rounded-lg border dark:bg-[#1A1A1A] dark:border-gray-700 dark:text-white outline-none focus:border-[#0CC8A8]" />
              <input type="text" placeholder="Last name*" required className="p-3 rounded-lg border dark:bg-[#1A1A1A] dark:border-gray-700 dark:text-white outline-none focus:border-[#0CC8A8]" />
            </div>
            <input type="email" placeholder="Email address*" required className="w-full p-3 rounded-lg border dark:bg-[#1A1A1A] dark:border-gray-700 dark:text-white outline-none focus:border-[#0CC8A8]" />
            <input type="password" placeholder="Password (8+ characters)*" required className="w-full p-3 rounded-lg border dark:bg-[#1A1A1A] dark:border-gray-700 dark:text-white outline-none focus:border-[#0CC8A8]" />
            
            <div className="flex items-start gap-2 text-sm text-gray-500 text-left">
              <input type="checkbox" required className="accent-[#0CC8A8] mt-1" />
              <span>I agree to Aps's Terms & Conditions and acknowledge the Privacy Policy</span>
            </div>

            <button type="submit" className="w-full bg-[#0CC8A8] hover:bg-[#0AB094] text-white font-bold py-3 rounded-full transition-all mt-4">
              Create account [cite: 133]
            </button>
          </form>

          {/* Social Login Options [cite: 20] */}
          <div className="mt-8 grid grid-cols-3 gap-4">
            <button className="flex justify-center py-2 border rounded-lg dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800">
              <span className="text-lg"></span>
            </button>
            <button className="flex justify-center py-2 border rounded-lg dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 font-bold text-red-500">
              G
            </button>
            <button className="flex justify-center py-2 border rounded-lg dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-blue-600">
              ∞
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;