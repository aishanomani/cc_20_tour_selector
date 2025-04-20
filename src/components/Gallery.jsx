import React from "react";
import TourCard from "./TourCard";

const Gallery = ({ tours, onRemove }) => {
  if (!tours.length) {
    return <p>No tours to display.</p>;
  }

  return (
    <section className="gallery" style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
      {tours.map((tour) => (
        <TourCard
          key={tour.id}
          id={tour.id}
          name={tour.name}
          info={tour.info}
          price={tour.price}
          image={tour.image}
          onRemove={onRemove}
        />
      ))}
    </section>
  );
};

export default Gallery;