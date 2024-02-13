import React from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
} from "recharts";
import { Container } from "semantic-ui-react";

const data = [
  {
    name: "Monday",
    TotalBlogs: 2000,
  },
  {
    name: "Tuesday",
    TotalBlogs: 1000,
  },
  {
    name: "Wednesday",
    TotalBlogs: 12000,
  },
  {
    name: "Thursday",
    TotalBlogs: 2314,
  },
  {
    name: "Friday",
    TotalBlogs: 5213,
  },
  {
    name: "Saturday",
    TotalBlogs: 14213,
  },
  {
    name: "Sunday",
    TotalBlogs: 16742,
  },
];

const data02 = [
  { name: "Eren Kınay", value: 18 },
  { name: "Fatih Kınay", value: 6 },
  { name: "Can Kınay", value: 5 },
  { name: "Gizem Nur Kınay", value: 3 }
];

const DashboardScreen = () => {
  return (
    <Container>
       <h1 style={{ fontSize: "1.2rem" }}>
          <span>Dashboard</span>
        </h1>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "500px" }}>
   
      <div style={{ display: "ruby",width: "50%", height: "100%" }}>
        <h1 style={{ fontSize: "0.7rem" }}>
          <span>Weekly New Blogs</span>
        </h1>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="TotalBlogs" fill="#11ab14" />
        </BarChart>
      </div>
      <div style={{display: "ruby", width: "50%", height: "100%" }}>
      <h1 style={{ fontSize: "0.7rem" }}>
          <span>Authors Total Blogs</span>
        </h1>
        <PieChart width={400} height={300}>
          <Pie
            data={data02}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={90}
            fill="#82ca9d"
            label
          />
        </PieChart>
      </div>
    </div>
  </Container>
  );
};

export default DashboardScreen;
