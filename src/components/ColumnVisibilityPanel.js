// ColumnVisibilityPanel.js
import React from "react";

const ColumnVisibilityPanel = ({
  columns,
  hiddenColumns,
  setHiddenColumns,
}) => {
  const handleToggleColumn = (columnId) => {
    setHiddenColumns(
      hiddenColumns.includes(columnId)
        ? hiddenColumns.filter((id) => id !== columnId)
        : [...hiddenColumns, columnId]
    );
  };

  return (
    <div>
      <h4>Show/Hide Columns</h4>
      {columns.map((column) => (
        <label key={column.accessor}>
          <input
            type="checkbox"
            checked={!hiddenColumns.includes(column.accessor)}
            onChange={() => handleToggleColumn(column.accessor)}
          />
          {column.Header}
        </label>
      ))}
    </div>
  );
};

export default ColumnVisibilityPanel; // Ensure this is the export statement
