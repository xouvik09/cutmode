import React from "react";

export const App: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 text-slate-50">
      <div className="max-w-xl px-6 py-8 rounded-2xl border border-slate-800 bg-slate-900/80 shadow-xl">
        <h1 className="text-3xl font-bold tracking-tight mb-2">CUTMODE</h1>
        <p className="text-sm text-slate-300 mb-4">
          Gamified fitness and discipline tracker.
        </p>
        <p className="text-slate-300">
          The full application UI will be mounted here. This minimal shell is
          just to ensure the React + Vite frontend builds correctly and can be
          served from the Express backend in production.
        </p>
      </div>
    </div>
  );
};

