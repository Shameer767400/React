import React from "react";
import Chart from "react-apexcharts";
import "./PopulationDashboard.css";

export default function PopulationDashboard() {
  
  const barData = {
    series: [{ name: "Population (millions)", data: [125, 100, 90, 85, 80] }],
    options: {
      chart: { type: "bar", toolbar: { show: false } },
      xaxis: { categories: ["Uttar Pradesh", "Maharashtra", "Bihar", "West Bengal", "Madhya Pradesh"] },
      colors: ["#7367f0"],
      title: { text: "Top 5 States", align: "center" },
    },
  };


  const lineData = {
    series: [
      { name: "Population (billions)", data: [0.55, 0.68, 0.77, 0.87, 0.95, 1.03, 1.15, 1.25, 1.33, 1.42] },
    ],
    options: {
      chart: { type: "line", zoom: { enabled: false } },
      stroke: { curve: "smooth" },
      xaxis: { categories: ["1950", "1960", "1970", "1980", "1990", "2000", "2010", "2015", "2020", "2025"] },
      colors: ["#28c76f"],
      title: { text: "Population Growth (1950–2025)", align: "center" },
    },
  };


  const pieData = {
    series: [35, 25, 20, 15, 5],
    options: {
      chart: { type: "pie" },
      labels: ["North", "South", "East", "West", "Northeast"],
      colors: ["#7367f0", "#28c76f", "#ff9f43", "#ea5455", "#00cfe8"],
      title: { text: "Population by Region", align: "center" },
      legend: { position: "bottom" },
    },
  };

  const areaData = {
    series: [
      { name: "Urban", data: [30, 35, 42, 48, 55, 61, 68, 72] },
      { name: "Rural", data: [70, 65, 58, 52, 45, 39, 32, 28] },
    ],
    options: {
      chart: { type: "area" },
      xaxis: { categories: ["1980", "1990", "2000", "2010", "2015", "2020", "2022", "2025"] },
      colors: ["#00cfe8", "#ea5455"],
      title: { text: "Urban vs Rural Population (%)", align: "center" },
      dataLabels: { enabled: false },
    },
  };
  const radarData = {
    series: [
      { name: "Male", data: [52, 49, 51, 50, 53] },
      { name: "Female", data: [48, 51, 49, 50, 47] },
    ],
    options: {
      chart: { type: "radar" },
      labels: ["North", "South", "East", "West", "Northeast"],
      title: { text: "Gender Ratio by Region (%)", align: "center" },
    },
  };

  const mixedData = {
    series: [
      { name: "Birth Rate", type: "column", data: [35, 32, 28, 24, 22] },
      { name: "Death Rate", type: "line", data: [15, 14, 13, 12, 11] },
    ],
    options: {
      chart: { type: "line" },
      stroke: { width: [0, 4] },
      title: { text: "Birth vs Death Rate (per 1000 people)", align: "center" },
      xaxis: { categories: ["1980", "1990", "2000", "2010", "2020"] },
    },
  };

  return (
    <div className="dashboard">
      <div className="chart-card"><Chart options={barData.options} series={barData.series} type="bar" height={320} /></div>
      <div className="chart-card"><Chart options={lineData.options} series={lineData.series} type="line" height={320} /></div>
      <div className="chart-card"><Chart options={pieData.options} series={pieData.series} type="pie" height={320} /></div>
      <div className="chart-card"><Chart options={areaData.options} series={areaData.series} type="area" height={320} /></div>
      <div className="chart-card"><Chart options={radarData.options} series={radarData.series} type="radar" height={320} /></div>
      <div className="chart-card"><Chart options={mixedData.options} series={mixedData.series} type="line" height={320} /></div>
    </div>
  );
}
