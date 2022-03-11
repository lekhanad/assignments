import React from "react";
import { Route, Routes } from "react-router-dom";
import { data } from "./Data";

export default function Main() {
  const styles = {
    flex: 1,
    padding: "10px",
  };
  return (
    <div style={styles}>
      <Routes>
        {data.map((item, index) => {
          return (
            <Route
              key={index}
              path={item.path}
              exact={item.exact}
              element={<item.main/>}
            />
          );
        })}
      </Routes>
    </div>
  );
}
