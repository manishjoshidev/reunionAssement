import React from "react";
import PropTypes from "prop-types";

const FiltersPanel = ({ data }) => {
  // Add a check to handle when data is undefined or empty
  if (!data || !Array.isArray(data) || data.length === 0) {
    return <div>No data available</div>;
  }

  const categories = data.map((item) => item.category); // Assuming category is a property of the data items

  return (
    <div>
      {/* Your filtering logic goes here */}
      {categories.map((category, index) => (
        <div key={index}>{category}</div>
      ))}
    </div>
  );
};

FiltersPanel.propTypes = {
  data: PropTypes.array.isRequired,
};

export default FiltersPanel;
