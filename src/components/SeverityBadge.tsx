// src/components/SeverityBadge.tsx
export const SeverityBadge = ({ type, count }) => {
  const styles = {
    critical: "bg-[#FF0000] text-white", // 
    high: "bg-[#FFA500] text-white",     // 
    medium: "bg-[#FFFF00] text-black",   // 
    low: "bg-[#008000] text-white",      // 
  };

  return (
    <span className={`${styles[type]} text-[10px] font-bold px-1.5 py-0.5 rounded min-w-[18px] text-center inline-block`}>
      {count}
    </span>
  );
};