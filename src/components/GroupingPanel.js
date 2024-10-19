import React from "react";

const GroupingPanel = ({ grouping, setGrouping }) => {
  return (
    <div>
      <h4>Group by</h4>
      <div>
        <label>
          <input
            type="checkbox"
            checked={grouping.category}
            onChange={() =>
              setGrouping({ ...grouping, category: !grouping.category })
            }
          />
          Category
        </label>
        <label>
          <input
            type="checkbox"
            checked={grouping.subcategory}
            onChange={() =>
              setGrouping({ ...grouping, subcategory: !grouping.subcategory })
            }
          />
          Subcategory
        </label>
      </div>
    </div>
  );
};

export default GroupingPanel;
