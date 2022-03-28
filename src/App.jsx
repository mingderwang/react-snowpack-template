import React, { useState, useEffect } from "react";
import Typography from "./Typography.jsx";

function App() {
  // Create the count state.
  const [count, setCount] = useState(0);
  // Update the count (+1 every second).
  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000);
    return () => clearTimeout(timer);
  }, [count, setCount]);
  // Return the App component.
  return (
    <div className="min-h-screen bg-gray-50 py-8 flex flex-col justify-center relative overflow-hidden lg:py-12">
      <img
        src="https://cdn.lorem.space/images/fashion/.cache/1000x800/wesley-tingey-3mGnYRUNIck-unsplash.jpg"
        alt=""
        className="fixed top-48 left-1/2 -translate-x-2/3 -translate-y-1/2 max-w-none"
        width="2308"
      />
      <Typography />
    </div>
  );
}

export default App;
