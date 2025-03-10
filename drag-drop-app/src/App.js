import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

const App = () => {
  const [squares, setSquares] = useState([]);
  const containerRef = useRef(null);

  const addSquare = () => {
    const newSquare = {
      id: Date.now(),
      x: 0,
      y: 0,
    };
    setSquares([...squares, newSquare]);
  };

  const handleDragEnd = (id, event, info) => {
    if (!containerRef.current) return;

    // Get the container's position relative to the page
    const containerRect = containerRef.current.getBoundingClientRect();
    const squareSize = 100;  // Assuming the square size is fixed

    // Calculate the new X and Y positions relative to the container
    let newX = info.point.x ;
    let newY = info.point.y ;

    // Ensure the square stays within the container
    newX = Math.max(0, Math.min(newX, containerRect.width ));
    newY = Math.max(0, Math.min(newY, containerRect.height ));

    // Update the state with the new square position
    setSquares(prev => prev.map(square =>
      square.id === id ? { ...square, x: newX, y: newY } : square
    ));
  };

  return (
    <div >
      <button 
        onClick={addSquare}
        style={{
          padding: "10px 20px",
          background: "blue",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          marginBottom: "20px"
        }}
      >
        Add Square
      </button>

      <div
        ref={containerRef}
        contentEditable
        suppressContentEditableWarning
        style={{
          minHeight: "500px",
          border: "2px solid #ccc",
          padding: "20px",
          position: "relative", // Keep relative positioning for absolute positioning of squares
          outline: "none",
          whiteSpace: "pre-wrap",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          zIndex: 1, // Ensure that the container stays below the squares
        }}
      >
        {squares.map(square => (
          <motion.div
            key={square.id}
            drag
            dragConstraints={containerRef} // Set drag constraints to the container
            onDragEnd={(e, info) => handleDragEnd(square.id, e, info)}
            style={{
              width: "100px",
              height: "100px",
              background: "rgba(255,0,0,0.5)",
              position: "absolute",
              top: square.y,
              left: square.x,
              cursor: "move",
              border: "2px solid red",
              zIndex: 2, // Ensure the square is above the text content
            }}
          />
        ))}

        <div style={{ position: "relative", zIndex: 0 }}>
          Start typing here... Drag squares anywhere in this container.
        </div>
      </div>
    </div>
  );
};

export default App;
