"use client";
import React from 'react';
import { 
  PieChart, Pie, Cell, Tooltip, Legend,
  BarChart, Bar, XAxis, YAxis, CartesianGrid, ReferenceLine, LabelList,
  ResponsiveContainer
} from 'recharts';
import './CompanyMetrics.css';

const capacityData = [
  { name: 'Gabriel - Satellite', value: 33, fill: '#4a82bc' },
  { name: 'Gabriel - Hosur', value: 17, fill: '#a5403d' },
  { name: 'Gabriel - Parwanoo', value: 16, fill: '#91b74f' },
  { name: 'Free Capacity', value: 34, fill: '#7d5ba6' }
];

const salesData = [
  { year: '2021-22', salesINR: 18, salesUSD: 2.1, fill: '#4a78a8' },
  { year: '2022-23', salesINR: 24, salesUSD: 2.8, fill: '#ab4b49' },
  { year: '2023-24', salesINR: 32, salesUSD: 3.8, fill: '#8b9f50' },
  { year: '2024-25', salesINR: 41, salesUSD: 4.9, fill: '#6b5885' },
  { year: '2025-26', salesINR: 52, salesUSD: 6.2, fill: '#4691a4' },
  { year: '2026-27', salesINR: 67, salesUSD: 8.0, fill: '#d48239' }
];

const partsData = [
  { name: 'Eyelet', 'Current Production': 7, Capacity: 11, 'Spare capacity': 4 },
  { name: 'Spring seat adjuster', 'Current Production': 4, Capacity: 11, 'Spare capacity': 7 },
  { name: 'Sleeve', 'Current Production': 7, Capacity: 12, 'Spare capacity': 5 }
];

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }: any) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central" style={{ fontSize: '12px', fontWeight: 600 }}>
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function CompanyMetrics() {
  return (
    <section className="company-metrics-section">
      <div className="container">
        <div className="metrics-header">
          <span className="eyebrow section-cyan-label">PERFORMANCE & CAPACITY</span>
          <h2 className="section-heading">Data-Driven Manufacturing</h2>
          <div className="heading-rule" />
        </div>

        <div className="metrics-grid">
          
          {/* Chart 1: Customer Wise Capacity */}
          <div className="metric-card">
            <h3 className="metric-card__title text-center">Customer Wise Capacity Usage</h3>
            <div className="metric-card__chart">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={capacityData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    labelLine={false}
                    label={renderCustomizedLabel}
                  >
                    {capacityData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(val: any) => [`${val}%`, 'Capacity']} />
                  <Legend verticalAlign="bottom" height={36} wrapperStyle={{ fontSize: '12px' }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="metric-card__footer">
              <div className="free-capacity-badge">Free Capacity: 34%</div>
            </div>
          </div>

          {/* Chart 2: Sales Value Trend */}
          <div className="metric-card">
            <h3 className="metric-card__title text-center">Sales Value Trend</h3>
            <div className="metric-card__chart">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={salesData} margin={{ top: 20, right: 30, left: 20, bottom: 40 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="year" tick={{ fontSize: 12 }} />
                  <YAxis tick={{ fontSize: 12 }} />
                  <Tooltip formatter={(value, name) => [name === 'salesINR' ? `₹${value} Cr` : `$${value}M`, name === 'salesINR' ? 'Turnover (INR)' : 'Turnover (USD)']} />
                  <Legend verticalAlign="bottom" height={36} wrapperStyle={{ fontSize: '12px' }} />
                  <ReferenceLine x="2024-25" stroke="#0000ff" strokeWidth={2} strokeDasharray="3 3">
                     <LabelList position="top" offset={15} content={<text fill="#4a5e2c" style={{fontSize: 12, fontWeight: 'bold'}}>SALES PROJECTION</text>} />
                  </ReferenceLine>
                  <Bar dataKey="salesINR" name="Turnover (INR)" radius={[4, 4, 0, 0]}>
                    {salesData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                    <LabelList dataKey="salesINR" position="top" formatter={(val: any) => `₹${val}Cr`} style={{ fontSize: '11px', fill: '#475569' }} />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div style={{ textAlign: 'center', fontSize: '12px', fontWeight: 'bold', marginTop: '10px' }}>Sale Value in Crores (INR) & Millions (USD)</div>
          </div>

          {/* Chart 3: Part Wise Capacity */}
          <div className="metric-card full-width">
            <h3 className="metric-card__title text-center">Part Wise Capacity & Free Capacity</h3>
            <div className="metric-card__chart" style={{ height: '350px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={partsData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" />
                  <YAxis label={{ value: 'Qty in Lacks', angle: -90, position: 'insideLeft' }} />
                  <Tooltip />
                  <Legend wrapperStyle={{ paddingTop: '20px' }} />
                  <Bar dataKey="Current Production" fill="#487eb7" radius={[2, 2, 0, 0]}>
                    <LabelList dataKey="Current Production" position="center" fill="#fff" />
                  </Bar>
                  <Bar dataKey="Capacity" fill="#b44641" radius={[2, 2, 0, 0]}>
                    <LabelList dataKey="Capacity" position="center" fill="#fff" />
                  </Bar>
                  <Bar dataKey="Spare capacity" fill="#87b24c" radius={[2, 2, 0, 0]}>
                    <LabelList dataKey="Spare capacity" position="center" fill="#fff" />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
