import React from "react";

export default function SectionHeader({ 
  label, 
  title, 
  labelClassName = "text-blue-600", 
  titleClassName = "text-slate-900",
  gradientClassName = "from-blue-500 to-indigo-500",
  align = "left"
}) {
  return (
    <div className={`mb-6 sm:mb-8 text-${align}`}>
      <span className={`text-[10px] font-bold uppercase tracking-[0.25em] ${labelClassName}`}>{label}</span>
      <h2 className={`mt-1.5 text-2xl font-black sm:text-3xl ${titleClassName}`}>{title}</h2>
      <div className={`mt-3 h-0.5 w-10 rounded-full bg-gradient-to-r ${gradientClassName}`} />
    </div>
  );
}
