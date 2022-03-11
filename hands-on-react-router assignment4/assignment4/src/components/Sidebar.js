import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { data } from "./Data";

export default function Sidebar() {
  const styles = {
    padding: "10px",
    width: "40%",
    background: "#f0f0f0",
  };
  return (
    <div style={styles}>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/posts">Posts</Link>
        </li>
        <li>
          <Link to="/orders">Orders</Link>
        </li>
      </ul>
      <Routes>
        {data.map((item, index) => {
          return (
            <Route
              key={index}
              path={item.path}
              exact={item.exact}
              element={<item.sidebar/>}
            />
          );
        })}
      </Routes>
    </div>
  );
}
