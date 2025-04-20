import React, { useState } from "react";

const TourCard = ({ id, name, info, price, image, onRemove }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="tour-card" style={{ border: "1px solid #ccc", padding: "15px", borderRadius: "8px", maxWidth: "300px" }}>
      <img src={image} alt={name || "Tour image"} className="tour-image" style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "6px" }} />

      <h3>{name}</h3>
      <h4>Price: ${price}</h4>

      <p>
        {readMore ? info : `${info.substring(0, 200)}... `}
        <button onClick={() => setReadMore(!readMore)} style={{ marginLeft: "10px" }}>
          {readMore ? "Show Less" : "Read More"}
        </button>
      </p>

      <button className="remove-btn" onClick={() => onRemove(id)} style={{ backgroundColor: "#ff4d4d", color: "#fff", padding: "8px 12px", border: "none", borderRadius: "5px" }}>
        Not Interested
      </button>
    </article>
  );
};

export default TourCard;