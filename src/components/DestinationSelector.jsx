import React from "react";

const DestinationSelector = ({ tours, selected, setSelected }) => {
  const uniqueNames = ["All", ...new Set(tours.map((tour) => tour.name))];

  return (
    <div className="destination-selector" style={{ marginBottom: "20px" }}>
      <label htmlFor="tour-select">Filter by Destination: </label>
      <select
        id="tour-select"
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
      >
        {uniqueNames.map((name, index) => (
          <option key={index} value={name}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DestinationSelector;