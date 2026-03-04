// src/pages/Dashboard.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Filter, Columns, Plus } from 'lucide-react';
import Layout from '../components/Layout';
import { SeverityBadge } from '../components/SeverityBadge';
import { SCAN_DATA } from '../data/mockData';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="p-4 md:p-8 page-fade">
        {/* Org Stats Bar - R1 & R4 [cite: 24, 61] */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Critical Severity', count: 86, change: '+2%', color: 'border-[#FF0000]' },
            { label: 'High Severity', count: 16, change: '+0.9%', color: 'border-[#FFA500]' },
            { label: 'Medium Severity', count: 26, change: '-0.5%', color: 'border-[#FFFF00]' },
            { label: 'Low Severity', count: 16, change: '+0.9%', color: 'border-[#008000]' },
          ].map((stat) => (
            <div key={stat.label} className={`p-4 rounded-xl border-l-4 bg-white dark:bg-[#1A1A1A] shadow-sm ${stat.color} border-y border-r dark:border-y-gray-800 dark:border-r-gray-800`}>
              <p className="text-[10px] uppercase font-bold text-gray-500 mb-1">{stat.label}</p>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold dark:text-white">{stat.count}</span>
                <span className={`text-[10px] ${stat.change.includes('+') ? 'text-green-500' : 'text-red-500'}`}>
                  {stat.change} than yesterday 
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Toolbar - R3 [cite: 28, 59] */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            <input 
              type="text" 
              placeholder="Search scans by name or type..." 
              className="w-full pl-10 pr-4 py-2 rounded-lg border dark:bg-[#1A1A1A] dark:border-gray-700 dark:text-white focus:border-[#0CC8A8] outline-none"
            />
          </div>
          <div className="flex gap-2 w-full md:w-auto">
            <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 border dark:border-gray-700 rounded-lg dark:text-white text-sm"><Filter size={14}/> Filter</button>
            <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 border dark:border-gray-700 rounded-lg dark:text-white text-sm"><Columns size={14}/> Column</button>
            <button className="flex-1 md:flex-none bg-[#0CC8A8] text-white px-4 py-2 rounded-lg font-bold text-sm flex items-center justify-center gap-2"><Plus size={16}/> New Scan</button>
          </div>
        </div>

        {/* Scan Table - R2 & R4 [cite: 25, 54, 63] */}
        <div className="overflow-x-auto rounded-xl border dark:border-gray-800 bg-white dark:bg-[#1A1A1A]">
          <table className="w-full text-left min-w-[800px]">
            <thead className="bg-gray-50 dark:bg-[#252525] text-[10px] uppercase font-bold text-gray-500 border-b dark:border-gray-800">
              <tr>
                <th className="px-6 py-4">Scan Name</th>
                <th className="px-6 py-4">Type</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Progress</th>
                <th className="px-6 py-4">Vulnerability</th>
                <th className="px-6 py-4">Last Scan</th>
              </tr>
            </thead>
            <tbody className="divide-y dark:divide-gray-800 text-sm">
              {SCAN_DATA.map((scan) => (
                <tr 
                  key={scan.id} 
                  onClick={() => navigate('/scan-detail')} 
                  className="hover:bg-gray-50 dark:hover:bg-[#252525] cursor-pointer transition-colors"
                >
                  <td className="px-6 py-4 font-semibold dark:text-white">{scan.name}</td>
                  <td className="px-6 py-4 text-gray-500">{scan.type}</td>
                  <td className="px-6 py-4">
                    <span className={`chip-${scan.status.toLowerCase()}`}>{scan.status}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="w-24 h-1.5 bg-gray-100 dark:bg-gray-700 rounded-full">
                      <div className="bg-[#0CC8A8] h-full rounded-full" style={{ width: `${scan.progress}%` }}></div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-1">
                      <SeverityBadge type="critical" count={scan.vulnerabilities.critical} />
                      <SeverityBadge type="high" count={scan.vulnerabilities.high} />
                      <SeverityBadge type="medium" count={scan.vulnerabilities.medium} />
                      <SeverityBadge type="low" count={scan.vulnerabilities.low} />
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-500">{scan.lastScan}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;