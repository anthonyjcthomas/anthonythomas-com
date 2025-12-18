"use client";

import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

export default function SimpleBar() {
  const data = [
    { name: "Run", value: 62 },
    { name: "Pass", value: 38 },
  ];

  return (
    <div className="h-64 w-full rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className="mb-2 text-sm opacity-80">Example chart (placeholder)</div>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
