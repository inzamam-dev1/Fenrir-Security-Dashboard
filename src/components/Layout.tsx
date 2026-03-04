import React from 'react';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-[#F5F5F5] dark:bg-[#0F0F0F] transition-colors duration-200">
      {/* Sidebar - Remains static on the left [cite: 23, 30] */}
      <Sidebar />
      
      {/* Main Content - Scrolls independently [cite: 25] */}
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
    </div>
  );
};

export default Layout;