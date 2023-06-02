"use client";
import React from "react";

function Button({ state, setState }: { state: boolean; setState: any }) {
  return (
    <button
      className="text-4xl text-slate-200"
      onClick={() => setState(!state)}
    >
      {state ? "✕" : "☰"}
    </button>
  );
}

export default Button;
