import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { LayoutDashboard, Shield, List, Calendar, Bell, Settings, LifeBuoy, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isDark, toggleTheme } = useTheme();

  // Navigation items mapping to the Dashboard as per requirements 
  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
    { icon: Shield, label: 'Projects', path: '/dashboard' },
    { icon: List, label: 'Scans', path: '/dashboard' },
  ];

  const secondaryItems = [
    { icon: Calendar, label: 'Schedule' },
    { icon: Bell, label: 'Notifications' },
    { icon: Settings, label: 'Settings' },
    { icon: LifeBuoy, label: 'Support' },
  ];

  return (
    <aside className="w-64 border-r dark:border-gray-800 bg-white dark:bg-[#0F0F0F] flex flex-col p-4 h-screen sticky top-0 shrink-0 transition-colors duration-200">
      {/* Product Name [cite: 19, 114, 138] */}
      <div className="text-xl font-bold text-[#0CC8A8] mb-10 px-2 tracking-tighter">aps</div>
      
      <nav className="flex-1 space-y-1">
        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest px-3 mb-2">Main Menu</p>
        
        {navItems.map((item) => (
          <button 
            key={item.label} 
            onClick={() => navigate(item.path)} // R2: Logical navigation 
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all ${
              location.pathname === item.path 
              ? 'bg-[#0CC8A8]/10 text-[#0CC8A8]' 
              : 'text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800'
            }`}
          >
            <item.icon size={18} />
            <span className="font-bold text-sm">{item.label}</span>
          </button>
        ))}

        <div className="pt-6">
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest px-3 mb-2">Systems</p>
          {secondaryItems.map((item) => (
            <button key={item.label} className="w-full flex items-center gap-3 px-3 py-2 text-gray-500 hover:text-[#0CC8A8] transition-colors">
              <item.icon size={18} />
              <span className="font-medium text-sm">{item.label}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* Theme Toggle [cite: 13, 48, 52, 59] */}
      <button 
        onClick={toggleTheme} 
        className="flex items-center gap-3 px-3 py-2 mb-4 text-gray-500 hover:text-[#0CC8A8] transition-colors mt-auto border-t dark:border-gray-800 pt-4"
      >
        {isDark ? <Sun size={18} /> : <Moon size={18} />}
        <span className="text-sm font-bold">{isDark ? 'Light Mode' : 'Dark Mode'}</span>
      </button>
      
      {/* User Profile [cite: 23, 136, 196, 310, 388] */}
      <div className="flex items-center gap-3 px-2 pt-2 border-t dark:border-gray-800 mt-2">
        <div className="w-8 h-8 rounded-full bg-[#0CC8A8] flex items-center justify-center text-xs font-bold text-white uppercase shadow-sm">
          ad
        </div>
        <div className="text-[11px]">
          <p className="font-bold dark:text-white leading-tight">admin@edu.com</p>
          <p className="text-gray-500">Security Lead</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;