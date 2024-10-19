import React from "react";

const GlobalFilter = ({ globalFilter, setGlobalFilter }) => {
  return (
    <span>
      Search:{" "}
      <input
        value={globalFilter || ""}
        onChange={(e) => setGlobalFilter(e.target.value)}
        placeholder="Search all columns"
      />
    </span>
  );
};

export default GlobalFilter;
