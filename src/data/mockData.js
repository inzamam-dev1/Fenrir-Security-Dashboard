export const SCAN_DATA = [
  {
    id: 1,
    name: 'Web App Servers',
    type: 'Greybox',
    status: 'Completed',
    progress: 100,
    vulnerabilities: { critical: 5, high: 18, medium: 12, low: 25 },
    lastScan: '4d ago'
  },
  {
    id: 2,
    name: 'IoT Devices',
    type: 'Blackbox',
    status: 'Failed',
    progress: 10,
    vulnerabilities: { critical: 2, high: 4, medium: 0, low: 1 },
    lastScan: '3d ago'
  }
];

export const CONSOLE_LOGS = [
  { time: '09:00:00', message: "Beginning systematic penetration test on helpdesk.democorp.com.", type: 'info' },
  { time: '09:01:00', message: "Target is online. Performing port scanning...", type: 'success' },
  { time: '09:03:00', message: "Found login page. Testing credentials test:test", type: 'warning' },
];