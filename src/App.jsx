import React, { useState, useEffect } from "react";
import DestinationSelector from "./components/DestinationSelector";
import Gallery from "./components/Gallery";

const App = () => {
  const [tours, setTours] = useState([]);
  const [filteredTours, setFilteredTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("All");

  const fetchTours = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://api.allorigins.win/raw?url=https://course-api.com/react-tours-project");
      if (!response.ok) {
        throw new Error("The request did not complete successfully");
      }
      const data = await response.json();
      setTours(data);
      setFilteredTours(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  useEffect(() => {
    if (filter === "All") {
      setFilteredTours(tours);
    } else {
      setFilteredTours(tours.filter((tour) => tour.name === filter));
    }
  }, [filter, tours]);

  const handleRemoveTour = (id) => {
    setFilteredTours((prev) => prev.filter((tour) => tour.id !== id));
  };

  const handleRefresh = () => {
    fetchTours();
  };

  if (loading) return <div className="loading">Loading</div>;
  if (error) return <div className="error">Error{error}</div>;

  return (
    <div>
      <h1>Tour Destination Selector</h1>
      <DestinationSelector
        tours={tours}
        selected={filter}
        setSelected={setFilter}
      />

      {filteredTours.length === 0 ? (
        <div className="no-tours">
          <p>No tours left. Refresh to reload.</p>
          <button onClick={handleRefresh} className="refresh-btn">
            Refresh
          </button>
        </div>
      ) : (
        <Gallery tours={filteredTours} onRemove={handleRemoveTour} />
      )}
    </div>
  );
};

export default App;