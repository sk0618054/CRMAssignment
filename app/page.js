// pages/index.js
"use client";
import { useState, useEffect } from "react";
import { Pie, Line } from "react-chartjs-2";
import "chart.js/auto"; // Import Chart.js for use with react-chartjs-2

export default function Home() {
  const [timeWindow, setTimeWindow] = useState("1d");
  const [data, setData] = useState({ pie: [], line: [] });

  // Simulate fetching data from an API
  useEffect(() => {
    const fetchData = async () => {
      // Simulate fetching different data based on timeWindow
      const dummyData = {
        "1d": { pie: [12, 19, 3], line: [65, 59, 80, 81, 56, 55] },
        "1w": { pie: [7, 11, 5], line: [28, 48, 40, 19, 86, 27] },
        "1m": { pie: [15, 10, 5], line: [65, 59, 90, 81, 56, 85] },
      };
      setData(dummyData[timeWindow]);
    };
    fetchData();
  }, [timeWindow]);

  return (
    <div className="min-h-screen bg-blue-100 p-8">
      <header className="mb-8 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-black">Dashboard</h1>
        <div className="space-x-4">
          <button
            className={`px-4 py-2 ${
              timeWindow === "1d"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-black"
            }`}
            onClick={() => setTimeWindow("1d")}
          >
            1 Day
          </button>
          <button
            className={`px-4 py-2 ${
              timeWindow === "1w"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-black"
            }`}
            onClick={() => setTimeWindow("1w")}
          >
            1 Week
          </button>
          <button
            className={`px-4 py-2 ${
              timeWindow === "1m"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-black"
            }`}
            onClick={() => setTimeWindow("1m")}
          >
            1 Month
          </button>
        </div>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 text-black">
        {/* Pie Chart */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Pie Chart</h2>
          <Pie
            data={{
              labels: ["Category 1", "Category 2", "Category 3"],
              datasets: [
                {
                  data: data.pie,
                  backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
                },
              ],
            }}
          />
        </div>

        {/* Line Chart */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Line Chart</h2>
          <Line
            data={{
              labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
              datasets: [
                {
                  label: "Statistics",
                  data: data.line,
                  fill: false,
                  backgroundColor: "#36A2EB",
                  borderColor: "#36A2EB",
                },
              ],
            }}
          />
        </div>
      </section>
    </div>
  );
}
