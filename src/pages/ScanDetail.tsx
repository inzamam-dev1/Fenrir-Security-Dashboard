// src/pages/ScanDetail.tsx
import React, { useState } from 'react';
import Layout from '../components/Layout';
import { CONSOLE_LOGS } from '../data/mockData';
import { Square, Download, ChevronRight, Activity, ShieldAlert } from 'lucide-react';

const ScanDetail = () => {
  const [activeTab, setActiveTab] = useState('Activity Log');

  const steps = ['Spidering', 'Mapping', 'Testing', 'Validating', 'Reporting'];
  const activeStep = 'Testing'; // [cite: 30]

  return (
    <Layout>
      <div className="p-4 md:p-6 space-y-6 page-fade">
        {/* Progress & Step Tracker - [cite: 30] */}
        <div className="bg-white dark:bg-[#1A1A1A] p-6 rounded-xl border dark:border-gray-800 flex flex-wrap items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-6">
            {/* Circular Progress (0% In Progress) - [cite: 30] */}
            <div className="relative w-16 h-16 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90">
                <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="4" fill="transparent" className="text-gray-100 dark:text-gray-800" />
                <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="4" fill="transparent" strokeDasharray="175.9" strokeDashoffset="175.9" className="text-[#0CC8A8]" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-[10px] font-bold dark:text-white">
                <span>0%</span>
                <span className="text-[7px] text-gray-500 uppercase">In Progress</span>
              </div>
            </div>

            {/* Step Tracker - [cite: 30] */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
              {steps.map((step, idx) => (
                <div key={step} className="flex items-center gap-2">
                  <span className={`text-[11px] font-bold px-3 py-1.5 rounded-full border transition-all ${
                    step === activeStep 
                    ? 'bg-[#0CC8A8]/10 text-[#0CC8A8] border-[#0CC8A8]' 
                    : 'text-gray-400 border-transparent'
                  }`}>
                    {step}
                  </span>
                  {idx !== steps.length - 1 && <ChevronRight size={14} className="text-gray-600" />}
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-2 w-full md:w-auto">
            <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 border dark:border-gray-700 rounded-lg dark:text-white text-xs font-bold hover:bg-gray-50 dark:hover:bg-gray-800">
              <Download size={14} /> Export Report
            </button>
            <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-red-500/10 text-red-500 border border-red-500/20 rounded-lg text-xs font-bold hover:bg-red-500/20">
              <Square size={12} fill="currentColor" /> Stop Scan
            </button>
          </div>
        </div>

        {/* Metadata Row - [cite: 31] */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 py-4 px-2 border-b dark:border-gray-800">
          {[
            { label: 'Scan Type', val: 'Grey Box' },
            { label: 'Targets', val: 'google.com' },
            { label: 'Started At', val: 'Nov 22, 09:00AM' },
            { label: 'Credentials', val: '2 Active' },
            { label: 'Files', val: 'Control.pdf' },
            { label: 'Checklists', val: '40/350' },
          ].map(m => (
            <div key={m.label}>
              <p className="text-[9px] text-gray-500 uppercase font-black tracking-widest">{m.label}</p>
              <p className="text-sm font-semibold dark:text-white truncate">{m.val}</p>
            </div>
          ))}
        </div>

        {/* Console & Finding Split - [cite: 32, 33] */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-auto lg:h-[550px]">
          
          {/* Live Scan Console - [cite: 32] */}
          <div className="bg-[#0D0D0D] rounded-xl border border-gray-800 flex flex-col overflow-hidden shadow-2xl">
            <div className="flex border-b border-gray-800 bg-[#151515]">
              {['Activity Log', 'Verification Loops'].map(tab => (
                <button 
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 text-[10px] font-black uppercase tracking-widest transition-all ${
                    activeTab === tab ? 'text-[#0CC8A8] border-b-2 border-[#0CC8A8]' : 'text-gray-500 hover:text-gray-300'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="flex-1 p-4 font-mono text-[12px] overflow-y-auto space-y-2 custom-scrollbar">
              {CONSOLE_LOGS.map((log, i) => (
                <div key={i} className="flex gap-3 leading-relaxed">
                  <span className="text-gray-600 shrink-0">[{log.time}]</span>
                  <span className="text-gray-300">
                    {log.message.split(/(\bhttps?:\/\/\S+|\bX-UserId: \d+)/g).map((part, j) => {
                      if (part.match(/^https?:\/\//)) return <span key={j} className="text-[#0CC8A8] underline">{part}</span>;
                      if (part.match(/^X-UserId:/)) return <span key={j} className="text-orange-400 font-bold">{part}</span>;
                      return part;
                    })}
                  </span>
                </div>
              ))}
              <div className="flex items-center gap-2 text-[#0CC8A8] animate-pulse py-2">
                <span className="w-1.5 h-1.5 bg-[#0CC8A8] rounded-full"></span>
                <span className="font-bold text-[10px] uppercase tracking-tighter">Running...</span>
              </div>
            </div>
          </div>

          {/* Finding Log - [cite: 33] */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center justify-between px-2">
               <h4 className="text-[10px] font-black text-gray-500 uppercase tracking-widest flex items-center gap-2">
                 <ShieldAlert size={14}/> Finding Log
               </h4>
            </div>
            <div className="overflow-y-auto space-y-3 pr-2 custom-scrollbar flex-1">
              {[
                { sev: 'Critical', color: 'bg-[#FF0000]', title: 'SQL Injection in Authentication Endpoint', path: '/api/users/profile', time: '10:45:28', desc: 'Time-based blind SQL injection confirmed on user-controlled input.' },
                { sev: 'High', color: 'bg-[#FFA500]', title: 'Unauthorized Access to User Metadata', path: '/api/auth/login', time: '10:45:23', desc: 'Authenticated low-privilege user was able to access metadata of other users.' },
                { sev: 'Medium', color: 'bg-[#FFFF00]', text: 'text-black', title: 'Broken Authentication Rate Limiting', path: '/api/search', time: '10:45:20', desc: 'No effective rate limiting detected on login attempts.' },
              ].map((finding, i) => (
                <div key={i} className="bg-white dark:bg-[#1A1A1A] p-4 rounded-xl border dark:border-gray-800 shadow-sm hover:border-[#0CC8A8]/30 transition-all">
                  <div className="flex justify-between items-start mb-2">
                    <span className={`${finding.color} ${finding.text || 'text-white'} text-[9px] font-black px-2 py-0.5 rounded uppercase`}>
                      {finding.sev}
                    </span>
                    <span className="text-[10px] text-gray-400 font-mono">{finding.time}</span>
                  </div>
                  <h5 className="font-bold text-sm dark:text-white mb-1">{finding.title}</h5>
                  <p className="text-[11px] text-[#0CC8A8] font-mono mb-2">{finding.path}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2 leading-relaxed">{finding.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Status Bar - [cite: 34] */}
        <div className="bg-white dark:bg-[#1A1A1A] border dark:border-gray-800 px-6 py-3 rounded-xl flex flex-wrap justify-between items-center text-[10px] font-bold text-gray-500 uppercase tracking-widest">
           <div className="flex gap-6">
              <span>Sub-Agents: <span className="text-[#0CC8A8]">0</span></span>
              <span>Parallel Executions: <span className="text-[#0CC8A8]">2</span></span>
              <span>Operations: <span className="text-[#0CC8A8]">1</span></span>
           </div>
           <div className="flex gap-4">
              <span className="text-[#FF0000]">Critical: 0</span>
              <span className="text-[#FFA500]">High: 0</span>
              <span className="text-[#FFFF00]">Medium: 0</span>
              <span className="text-green-500">Low: 0</span>
           </div>
        </div>
      </div>
    </Layout>
  );
};

export default ScanDetail;